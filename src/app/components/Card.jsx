import { useState } from 'react';
import MapModal from './MapModal';

export default function Card({ contributor }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <button className="text-blue-500 mt-2" onClick={() => setShowMap(true)}>
        📍 Compass
      </button>
      <img src={contributor.avatar_url} alt={contributor.login} className="w-16 h-16 rounded-full" />
      <h2 className="font-bold mt-2">{contributor.login}</h2>
      <p>Commits: {contributor.contributions}</p>
      
      <button
        className="bg-blue-500 text-white py-1 px-4 mt-2 rounded"
        onClick={() => window.location.assign(`/contributors/${contributor.login}`)}
      >
        View Repository
      </button>
      {showMap && <MapModal location={contributor.location} onClose={() => setShowMap(false)} />}
    </div>
  );
}
