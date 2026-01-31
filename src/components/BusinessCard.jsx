
import {
  faBuilding,
  faPhone,
  faGlobe,
  faLocationDot,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BusinessCard = ({ business }) => {
  const { business_name, mobile_no, website, location, rating } = business;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
      
      {/* Business Name */}
      {business_name && (
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={faBuilding} className="text-green-600" />
          {business_name}
        </h2>
      )}

      <div className="space-y-3 text-gray-700">
        {/* Phone */}
        {mobile_no && (
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-green-500" />
            {mobile_no}
          </p>
        )}

        {/* Website */}
        {website && (
          <p className="flex items-center gap-3 break-all">
            <FontAwesomeIcon icon={faGlobe} className="text-green-500" />
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:underline"
            >
              {website}
            </a>
          </p>
        )}

        {/* Address */}
        {location && (
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-green-500" />
            {location}
          </p>
        )}

        {/* Rating */}
        {rating && (
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            {rating} / 5
          </p>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;