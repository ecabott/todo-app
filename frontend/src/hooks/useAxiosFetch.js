import { useState, useEffect } from "react";
import axios from "axios";

const useFetchAPI = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is still mounted
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        if (isMounted) {
          setData(data?.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setIsLoading(false);
        }
      }
    };
    fetchData(); // Call the fetchData function when the component mounts
    // Cleanup function to cancel the request and avoid memory leaks
    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, [url]); // Re-run the effect when the URL changes
  return { data, isLoading, error };
};

export default useFetchAPI;
