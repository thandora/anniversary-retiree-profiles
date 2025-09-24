import { useState, useEffect } from "react";
import { getAvailableProfiles, setQueryParam } from "../utils/routing";

function ProfileSelector() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAvailableProfiles()
      .then(setProfiles)
      .finally(() => setLoading(false));
  }, []);

  const handleProfileSelect = (profileId) => {
    const url = new URL(window.location);
    url.searchParams.set("profile", profileId);
    window.history.pushState({ profile: profileId }, '', url.toString());
    window.location.reload(); // Trigger re-render for SPA
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-yellow-400 text-3xl font-bold tracking-widest mb-2">
            LEYECO II
          </div>
          <div className="text-gray-400 text-lg tracking-wider">
            50TH ANNIVERSARY
          </div>
          <div className="text-white text-xl mt-4">Retiree Profiles</div>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          {loading ? (
            <div className="text-center text-white">Loading profiles...</div>
          ) : (
            profiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => handleProfileSelect(profile.id)}
                className="w-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 text-left group"
              >
                <div className="text-white text-lg font-medium group-hover:text-yellow-400 transition-colors">
                  {profile.name}
                </div>
                <div className="text-gray-400 text-sm mt-1">View Profile →</div>
              </button>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <div className="text-gray-500 text-sm">
            Select a profile to view their career journey
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelector;
