export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1; // Default to page 1
    const perPage = searchParams.get('perPage') || 25; // Default to 25 contributors
  
    const url = `https://api.github.com/repos/angular/angular/contributors?page=${page}&per_page=${perPage}`;
  
    try {
      const response = await fetch(url, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });
  
      if (!response.ok) {
        return new Response('Failed to fetch contributors', { status: 500 });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  