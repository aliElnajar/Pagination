import { useFetch } from "./useFetch";
import Follower from "./Follower";
import { useEffect, useState } from "react";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page] || []);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Pagination"} </h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className="page-btn"
                  onClick={() => {
                    setPage(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
