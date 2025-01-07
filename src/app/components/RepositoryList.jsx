import { formatDate } from '../../../utils/FormatDate';

export default function RepositoryList({ repositories }) {
  return (
    <>
      <div className="space-y-4">
        <a
          href="/"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded shadow hover:bg-blue-400"
          style={{ position: 'absolute', top: '16px', left: '16px' }}
        >
          Go back
        </a>


        {repositories.map((repo) => (
          <div key={repo.id} className="p-4 border rounded-lg shadow-md">
            <h2 className="font-bold text-lg">{repo.name}</h2>
            <p className="text-sm text-gray-600">
              {repo.fork ? 'Forked' : 'Not Forked'} | ⭐ {repo.stargazers_count} | Last updated: {formatDate(repo.updated_at)}
            </p>
          </div>
        ))}
      </div>
    </>

  );
}
