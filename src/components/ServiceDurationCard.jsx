import PropTypes from 'prop-types';

function ServiceDurationCard({ serviceDurationText }) {
  // Don't render if service duration is not available
  if (!serviceDurationText) {
    return null;
  }

  return (
    <div className="text-center mb-6">
      <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl px-4 py-3 border border-yellow-400/30">
        <div className="text-yellow-400 text-xs font-medium tracking-wider mb-1">
          YEARS OF SERVICE
        </div>
        <div className="text-2xl font-bold text-white">
          {serviceDurationText}
        </div>
      </div>
    </div>
  );
}

ServiceDurationCard.propTypes = {
  serviceDurationText: PropTypes.string,
};

export default ServiceDurationCard;