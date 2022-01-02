import { Link } from "react-router-dom";

export const Page1 = () => {
  const arry = [...Array(100).keys()];
  console.log(arry);
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arry }}>
        Page1DetaikAです
      </Link>
      <br />
      <Link to="/page1/detailB">Page1DetaikBです</Link>
    </div>
  );
};
