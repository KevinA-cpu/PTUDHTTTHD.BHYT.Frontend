import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Home />} />
    </ReactRouterDomRoutes>
  );
}

export default Routes;
