export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
  
    if (!username) {
      return new Response('Username is required', { status: 400 });
    }
  
    const url = `https://api.github.com/users/${username}/repos?sort=updated`;
  
    try {
      const response = await fetch(url, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });
  
      if (!response.ok) {
        return new Response('Failed to fetch repositories', { status: 500 });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  