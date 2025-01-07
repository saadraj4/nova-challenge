'use client';
import { useState, useEffect } from 'react';
import { fetchContributors } from '../../utils/FetchContributors';
import ContributorPage from './contributors/page';

export default function HomePage() {
  const [contributors, setContributors] = useState([]); // Initialize as empty array
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch contributors when page changes
  useEffect(() => {
    const loadContributors = async () => {
      try {
        setLoading(true);
        const data = await fetchContributors(page);
        setContributors((prev) => [...prev, ...data]); // Append new contributors to the list
      } catch (error) {
        console.error('Error fetching contributors:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContributors();
  }, [page]);


  return (
    <ContributorPage/>
  );
}