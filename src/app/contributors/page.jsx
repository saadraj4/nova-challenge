'use client';

import { useState, useEffect, useRef } from 'react';
import ContributorList from '../components/ContributorList';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ContributorsPage() {
  const [contributors, setContributors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  const fetchContributors = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/contributors?page=${page}&perPage=25`);
      if (!res.ok) throw new Error('Failed to fetch contributors');

      const data = await res.json();
      setContributors((prev) => [...prev, ...data]);
      setHasMore(data.length > 0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, [page]);

  const lastContributorRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Angular Contributors</h1>
      <ContributorList contributors={contributors} lastContributorRef={lastContributorRef} />
      {loading && <LoadingSpinner />}
    </div>
  );
}
