import PropTypes from 'prop-types';

function CareerTimeline({ positions }) {
  return (
    <div>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2 tracking-wide">
          CAREER JOURNEY
        </h3>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </div>

      <div className="relative">
        <div
          className="absolute left-[5px] top-3 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600 opacity-50"
          style={{
            height: `calc(${(positions.length - 1) * 6}rem - 3rem)`,
          }}
        ></div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <div key={index} className="relative flex items-start space-x-3">
              <div className="flex-shrink-0 w-3 h-3 bg-yellow-400 rounded-full mt-3 relative z-10">
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="flex-grow min-w-0 pt-1">
                {(position.type === "start" || position.type === "final") && (
                  <div className="text-yellow-400 text-xs font-medium tracking-wide mb-1">
                    {position.type === "start" ? "CAREER START" : "FINAL POSITION"}
                  </div>
                )}
                <h4 className="text-lg font-semibold text-white leading-snug">
                  {position.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {position.startDate}
                  {position.endDate && ` - ${position.endDate}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CareerTimeline.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CareerTimeline;