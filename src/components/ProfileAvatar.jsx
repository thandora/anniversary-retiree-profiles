import PropTypes from 'prop-types';
import { extractInitials } from '../utils/nameUtils';

function ProfileAvatar({ name, profileImage, hasPhoto, onImageClick }) {
  if (hasPhoto && profileImage) {
    return (
      <div className="w-32 h-32 rounded-full border-3 border-yellow-400 p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto cursor-pointer transition-transform hover:scale-105">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full rounded-full object-cover"
          onClick={onImageClick}
        />
      </div>
    );
  }

  // No photo - show initials
  const initials = extractInitials(name);

  return (
    <div className="w-32 h-32 rounded-full border-3 border-yellow-400 p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 mx-auto transition-transform hover:scale-105">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 flex items-center justify-center relative overflow-hidden">
        {/* Subtle background pattern for initials */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(250, 204, 21, 0.3) 1px, transparent 1px)`,
              backgroundSize: "15px 15px",
            }}
          />
        </div>

        {/* Initials text */}
        <span className="text-3xl font-bold text-yellow-400 relative z-10 tracking-wider">
          {initials}
        </span>
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