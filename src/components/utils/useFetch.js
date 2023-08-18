import { useEffect, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url) => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      setLoading(true);
      try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        if (!signal.aborted) {
          setData(data);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
      setTimeout(() => {
        abortController.abort();
      });
    };
    fetchData(url);

    return () => {
      abortController.aborted();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
