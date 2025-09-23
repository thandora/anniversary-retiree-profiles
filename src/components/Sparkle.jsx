import PropTypes from 'prop-types';

function Sparkle({ style }) {
  return (
    <div
      className="absolute text-yellow-300 opacity-60 animate-pulse"
      style={style}
    >
      ✨
    </div>
  );
}

Sparkle.propTypes = {
  style: PropTypes.object.isRequired,
};

export default Sparkle;