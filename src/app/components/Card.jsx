import { useState } from 'react';
import MapModal from './MapModal';

export default function Card({ contributor, lastContributorRef }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div
      className="border rounded-lg p-4 shadow-md relative transition-shadow hover:shadow-lg hover:shadow-blue-400"
      ref={lastContributorRef}  // <-- Attach ref to the last card
    >
      {/* Location Icon */}
      <div
        className="mt-2 ml-60 relative"
        onMouseEnter={() => setShowMap(true)}
        onMouseLeave={() => setShowMap(false)}
      >
        <img src="location.png" alt="Compass" className="w-6 h-6 cursor-pointer" />
        {/* Small Map Modal */}
        {showMap && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 p-4 rounded z-10">
            <MapModal location={contributor.location} />
          </div>
        )}
      </div>

      {/* Contributor Details */}
      <img src={contributor.avatar_url} alt={contributor.login} className="w-16 h-16 rounded-full" />
      <h2 className="font-bold mt-2">{contributor.login}</h2>
      <p>Commits: {contributor.contributions}</p>

      {/* View Repository Button */}
      <button
        className="bg-blue-400 text-white py-1 px-4 mt-2 rounded hover:bg-blue-600"
        onClick={() => window.location.assign(`/contributors/${contributor.login}`)}
      >
        View Repository
      </button>
    </div>
  );
}
