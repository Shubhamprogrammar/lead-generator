import {
  faBuilding,
  faPhone,
  faGlobe,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessCard = ({ business }) => {
  const { name, mobile, website, address, lat, lng, date_created } = business;

  const mapsUrl =
    lat && lng
      ? `https://www.google.com/maps?q=${lat},${lng}`
      : address
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
      : null;

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
        {mobile && (
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-green-500" />
            <a href={`tel:${mobile}`} className="hover:underline">
              {mobile}
            </a>
          </p>
        )}

        {/* Address + Maps */}
        {address && (
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-green-500" />
            {mapsUrl ? (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {address}
              </a>
            ) : (
              address
            )}
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

        {/* Date Created */}
        {date_created && (
          <p className="flex items-center gap-3 text-sm text-gray-500">
            <FontAwesomeIcon icon={faCalendarDays} />
            Established on{" "}
            {date_created}
          </p>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;