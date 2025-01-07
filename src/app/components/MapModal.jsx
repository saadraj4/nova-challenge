export default function MapModal({ location }) {
  return (
    <div className="bg-black text-white p-4 rounded shadow-lg max-w-xs">
      {location ? (
        <p className="text-sm truncate">{location}</p>
      ) : (
        <p className="text-sm text-gray-400 truncate">Location not available</p>
      )}
    </div>
  );
}
