import { useState, useCallback } from "react";
import axios from "axios";

const useAxiosPost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const axiosPost = useCallback(async (url, body) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(url, body);
      setData(data.data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  }, []);

  return { data, loading, error, axiosPost };
};

export default useAxiosPost;
