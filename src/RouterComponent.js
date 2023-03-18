import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const RouterComponent = () => {
  let element = useRoutes(routes);
  return element;
};

export default RouterComponent;
