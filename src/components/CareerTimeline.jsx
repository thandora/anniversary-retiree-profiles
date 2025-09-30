import PropTypes from 'prop-types';
import { formatDateReadable } from '../utils/dateUtils';

function CareerDetails({ position, dateHired, dateRetired }) {
  // Don't render if all data is missing
  if (!position && !dateHired && !dateRetired) {
    return null;
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4 tracking-wide">
          CAREER DETAILS
        </h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
      </div>

      {/* Position Card - only show if position exists */}
      {position && (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-yellow-400/20 mb-6">
          <div className="text-center">
            <div className="text-yellow-400 text-sm font-medium tracking-wide mb-2">
              POSITION
            </div>
            <h4 className="text-2xl font-bold text-white leading-snug">
              {position}
            </h4>
          </div>
        </div>
      )}

      {/* Service Period - only show if dates exist */}
      {(dateHired || dateRetired) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dateHired && (
            <div className="bg-gray-800/30 rounded-lg p-4 border border-yellow-400/10 text-center">
              <div className="text-yellow-400 text-xs font-medium tracking-wide mb-2">
                DATE HIRED
              </div>
              <div className="text-white text-lg font-semibold">
                {formatDateReadable(dateHired)}
              </div>
            </div>
          )}

          {dateRetired && (
            <div className="bg-gray-800/30 rounded-lg p-4 border border-yellow-400/10 text-center">
              <div className="text-yellow-400 text-xs font-medium tracking-wide mb-2">
                DATE OF RETIREMENT
              </div>
              <div className="text-white text-lg font-semibold">
                {formatDateReadable(dateRetired)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

CareerDetails.propTypes = {
  position: PropTypes.string,
  dateHired: PropTypes.string,
  dateRetired: PropTypes.string,
};

export default CareerDetails;