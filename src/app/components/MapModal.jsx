import { useEffect } from 'react';

export default function MapModal({ location, onClose }) {
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="font-bold mb-2">Location</h2>
        {location ? <p>{location}</p> : <p>No location available</p>}
        <button className="mt-4 text-blue-500" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
