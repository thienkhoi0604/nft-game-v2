import { useNavigate } from "react-router-dom";

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();
  return <div>PageHOC</div>;
};

export default PageHOC;
