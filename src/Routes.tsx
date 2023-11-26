import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import Landing from "./pages/Landing";

function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Landing />} />
    </ReactRouterDomRoutes>
  );
}

export default Routes;
