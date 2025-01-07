'use client';

import React, { useState, useEffect } from 'react';
import RepositoryList from '../../components/RepositoryList';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function ContributorRepos({ params }) {
  const { username } = React.use(params);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const res = await fetch(`/api/user-repos?username=${username}`);
        if (!res.ok) throw new Error('Failed to fetch repositories');

        const data = await res.json();
        setRepositories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-right">{username} Repositories</h1>
      {loading ? <LoadingSpinner /> : <RepositoryList repositories={repositories} />}
    </div>
  );
}
