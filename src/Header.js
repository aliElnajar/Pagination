const Header = ({ loading }) => {
  return <div className="section-title">
  <h1>{loading ? "loading..." : "Pagination"} </h1>
  <div className="underline"></div>
</div>
};
export default Header;
