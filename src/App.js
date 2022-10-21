import useFetch from "./useFetch";
import Pagination from "./Pagination";
import Follower from "./Follower";
import { useEffect, useState } from "react";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  console.log(data, loading);

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[page]);
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : <Pagination />}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
