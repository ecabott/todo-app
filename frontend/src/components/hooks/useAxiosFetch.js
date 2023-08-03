import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = false;
    setLoading(true);
    const fetchData = async () => {
      isMounted = true;
      try {
        const { data } = await axios(url);
        if (isMounted && data) {
          setLoading(false);
          setData(data);
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);
  return { data, loading, error };
};

export default useAxiosFetch;
