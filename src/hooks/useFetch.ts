import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type Hooks<T> = {
  loading: boolean;
  response: T;
  error: any;
};

export default function useFetch<T>(
  url: string,
  options?: AxiosRequestConfig | undefined,
): Hooks<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<null | T>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    async function fetchData() {
      const baseptions: AxiosRequestConfig = {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      };
      try {
        setLoading(true);
        const res : AxiosResponse<T> = await axios(url, options || baseptions);        
        const data = (await res.data) as T;
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => fetchData();
  }, [url]);

  return { loading, response, error };
}
