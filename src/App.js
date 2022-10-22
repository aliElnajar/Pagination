import { useFetch } from "./useFetch";
import Follower from "./Follower";
import { useEffect, useState } from "react";
import Header from "./Header";
import Button from "./Button";
function App() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page] || []);
  }, [loading, page]);

  const prevPageHandler = () => {
    if (page === 0) return;
    setPage(page - 1);
  };
  const nextPageHandler = () => {
    if (page === data.length - 1) return;
    setPage(page + 1);
  };

  const changePageHandler = (index) => {
    setPage(index);
  };

  return (
    <main>
      <Header loading={loading} />
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPageHandler}>
              previous
            </button>
            {data.map((item, index) => {
              return (
                <Button
                  key={index}
                  index={index}
                  page={page}
                  changePageHandler={changePageHandler}
                />
              );
            })}
            <button className="next-btn" onClick={nextPageHandler}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
