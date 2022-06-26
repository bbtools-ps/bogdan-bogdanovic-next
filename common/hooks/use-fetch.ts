import axios from "axios";
import { useEffect, useState } from "react";
import { Data } from "../models/Data";

const useFetch = (url: string) => {
  const [data, setData] = useState<null | Data>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        // @ts-ignore
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
