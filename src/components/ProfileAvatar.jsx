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

  return (
    <div className="w-full max-w-lg mx-auto text-center">
      {/* Name display - enhanced styling */}
      <div className="space-y-4 mb-8">
        <div className="text-4xl font-bold text-yellow-400 tracking-wide leading-relaxed px-6 py-4">
          {name}
        </div>
      </div>

      {/* Decorative accent */}
      <div className="flex items-center justify-center">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
        <div className="w-3 h-3 bg-yellow-400/70 rounded-full mx-4 animate-pulse"></div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
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