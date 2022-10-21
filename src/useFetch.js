import { useState, useEffect } from "react";
import Paginate from "./Pagination";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getFollowers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      const data = await response.json();
      setData(Paginate(data));
      console.log(Paginate(data));
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFollowers();
  }, []);
  return { data, loading };
};

export default useFetch;
