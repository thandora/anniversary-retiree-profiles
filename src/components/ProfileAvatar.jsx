import PropTypes from 'prop-types';

function ProfileAvatar({ name }) {
  // Extract initials for decorative purposes
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('');

  return (
    <div className="w-full max-w-2xl mx-auto text-center mb-8">
      {/* Large decorative initials background */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-8xl md:text-9xl font-bold text-yellow-400/20 tracking-widest">
            {initials}
          </span>
        </div>

        {/* Main name display */}
        <div className="relative z-10 py-6">
          <div className="text-3xl md:text-5xl font-bold text-yellow-400 tracking-wide leading-relaxed mb-6">
            {name}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="w-6 h-px bg-yellow-400/40"></div>
            <div className="w-2 h-2 bg-yellow-400/70 rounded-full"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileAvatar;