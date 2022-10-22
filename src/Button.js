const Button = ({ index, page, changePageHandler }) => {
  return (
    <button
      key={index}
      className={`page-btn ${index === page && "active-btn"} `}
      onClick={() => changePageHandler(index)}
    >
      {index + 1}
    </button>
  );
};

export default Button;
