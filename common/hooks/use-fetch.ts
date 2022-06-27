import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Data } from "../models/Data";

const useFetch = (url: string) => {
  const [data, setData] = useState<null | Data>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { locale } = useRouter();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `${url}${locale !== "en" ? "-sr" : ""}`
        );
        setData(response.data);
      } catch (err) {
        // @ts-ignore
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, locale]);

  return { data, error, loading };
};

export default useFetch;
