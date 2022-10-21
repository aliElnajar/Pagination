const Paginate = (followers) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);
  console.log(pages);
  const newArr = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  console.log(newArr)
  return newArr;
};
export default Paginate;
    