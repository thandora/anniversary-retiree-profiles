import { useEffect, useState } from "react";
import {
  calculateServiceDuration,
  formatServiceDuration,
} from "./utils/dateUtils";
import { getQueryParam, loadRetireeData } from "./utils/routing";
import { sparklePositions } from "./constants/sparklePositions";
import Sparkle from "./components/Sparkle";
import EventHeader from "./components/EventHeader";
import ServiceDurationCard from "./components/ServiceDurationCard";
import CareerDetails from "./components/CareerTimeline";
import AnniversaryInvitation from "./components/AnniversaryInvitation";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileSelector from "./components/ProfileSelector";

function RetireeProfile() {
  const [retireeData, setRetireeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const profileId = getQueryParam("profile");

    if (!profileId) {
      setLoading(false);
      return;
    }

    loadRetireeData(profileId)
      .then((data) => {
        setRetireeData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setRetireeData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!getQueryParam("profile")) {
    return <ProfileSelector />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-xl mb-4">Profile Not Found</div>
          <div className="text-gray-400 mb-6">{error}</div>
          <button
            onClick={() => (window.location.href = window.location.pathname)}
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Back to Profile Selection
          </button>
        </div>
      </div>
    );
  }

  if (!retireeData) {
    return null;
  }

  const serviceDuration = calculateServiceDuration(
    retireeData.dateHired,
    retireeData.dateRetired
  );
  const serviceDurationText = formatServiceDuration(serviceDuration);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {sparklePositions.map((position, index) => (
        <Sparkle key={index} style={position} />
      ))}

      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 px-4 py-8">
        <EventHeader />

        <div className="max-w-md mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(250, 204, 21, 0.2) 15px, rgba(250, 204, 21, 0.2) 16px)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, rgba(250, 204, 21, 0.25) 1.5px, transparent 1.5px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>

            <div className="absolute top-4 right-4 w-8 h-8 border border-yellow-400/10 rounded-full opacity-60" />
            <div
              className="absolute bottom-8 left-4 w-4 h-4 bg-yellow-400/10 rounded-sm rotate-45 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/3 right-8 w-2 h-8 bg-gradient-to-b from-yellow-400/10 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative z-10">
              <ProfileAvatar name={retireeData.name} />

              <ServiceDurationCard serviceDurationText={serviceDurationText} />
              <CareerDetails
                position={retireeData.position}
                dateHired={retireeData.dateHired}
                dateRetired={retireeData.dateRetired}
              />

              <div className="mt-8 text-center">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-4" />
                <p className="text-gray-300 text-base leading-relaxed">
                  Thank you for your unwavering dedication to{" "}
                  <span className="whitespace-nowrap">LEYECO II</span>. Your{" "}
                  <span className="text-yellow-400">
                    {serviceDurationText.toLowerCase()}
                  </span>{" "}
                  of service have been invaluable to our success, illuminating
                  the path forward and embodying the values that define who we
                  are.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AnniversaryInvitation />

        <div className="text-center mt-12">
          <div className="text-yellow-400 text-xl font-bold tracking-widest">
            LEYECO II
          </div>
          <div className="text-gray-400 text-xs tracking-wider mt-1">
            50TH ANNIVERSARY
          </div>
        </div>

      </div>
    </div>
  );
}

export default RetireeProfile;
