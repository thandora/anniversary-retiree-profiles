import PropTypes from 'prop-types';
import { extractInitials } from '../utils/nameUtils';

function ProfileAvatar({ name, profileImage, hasPhoto, onImageClick }) {
  if (hasPhoto && profileImage) {
    return (
      <div className="text-center mb-4">
        <div className="w-32 h-32 rounded-full border-3 border-yellow-400 p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto cursor-pointer transition-transform hover:scale-105">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full rounded-full object-cover"
            onClick={onImageClick}
          />
        </div>
      </div>
    );
  }

  // No photo - show elegant name-focused design
  const initials = extractInitials(name);
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Large initials centerpiece */}
      <div className="relative mb-4">
        <div className="w-40 h-40 mx-auto relative">
          {/* Background gradient circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 via-yellow-500/30 to-yellow-600/20 blur-xl"></div>

          {/* Main circle with initials */}
          <div className="relative w-full h-full rounded-full border-2 border-yellow-400/40 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            {/* Geometric background pattern */}
            <div className="absolute inset-0 opacity-15">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(250, 204, 21, 0.4) 2px, transparent 2px),
                    radial-gradient(circle at 75% 75%, rgba(250, 204, 21, 0.3) 1px, transparent 1px),
                    linear-gradient(45deg, transparent 30%, rgba(250, 204, 21, 0.1) 50%, transparent 70%)
                  `,
                  backgroundSize: "40px 40px, 20px 20px, 60px 60px",
                }}
              />
            </div>

            {/* Large initials */}
            <span className="text-5xl font-bold text-yellow-400 relative z-10 tracking-wider font-serif">
              {initials}
            </span>

            {/* Decorative corner elements */}
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-yellow-400/30"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-yellow-400/30"></div>
          </div>
        </div>
      </div>

      {/* Name display below */}
      <div className="text-center space-y-1">
        <div className="text-2xl font-bold text-white tracking-wide">
          {firstName}
        </div>
        {lastName && (
          <div className="text-xl font-semibold text-yellow-400/90 tracking-wider">
            {lastName}
          </div>
        )}

        {/* Decorative line */}
        <div className="flex items-center justify-center mt-3">
          <div className="w-8 h-px bg-yellow-400/30"></div>
          <div className="w-2 h-2 bg-yellow-400/50 rounded-full mx-2"></div>
          <div className="w-8 h-px bg-yellow-400/30"></div>
        </div>
      </div>
    </div>
  );
}

ProfileAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  hasPhoto: PropTypes.bool.isRequired,
  onImageClick: PropTypes.func,
};

ProfileAvatar.defaultProps = {
  profileImage: null,
  onImageClick: () => {},
};

export default ProfileAvatar;