export const fetchData = async (
  url: string,
  signal?: AbortSignal | undefined,
) => {
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
    const res: Response = await fetch(`/api/webtoon${url}`, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export const sample = async (
  body: object | undefined,
  signal?: AbortSignal | undefined,
): Promise<Response> => {
  if (!body) {
    throw new Error('No request object');
  }

  const fetchOption: RequestInit = {
    signal,
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(body),
  };

  try {
    const res: Response = await fetch(``, fetchOption);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
