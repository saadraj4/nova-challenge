export async function fetchContributors(page = 1, perPage = 25) {
    const response = await fetch(`/api/contributors?page=${page}&perPage=${perPage}`);
    if (!response.ok) {
      throw new Error('Failed to fetch contributors');
    }
    return response.json();
  }
  