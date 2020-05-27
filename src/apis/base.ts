export async function fetchData(
  url: string,
  signal?: AbortSignal | undefined,
): Promise<Response> {
  if (!url) {
    throw new Error('No request object');
  }

  const fetchOption: RequestInit = {
    signal,
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  };

  try {
    const res: Response = await fetch(url, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
}
