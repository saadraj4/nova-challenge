export async function fetchRepositories(username) {
    const response = await fetch(`/api/user-repos?username=${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return response.json();
  }
  