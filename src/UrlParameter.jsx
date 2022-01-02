import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // serach = ?name=hogehoge
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です。</p>
      <p>クエリメーターは{query.get("name")}です。</p>
    </div>
  );
};
