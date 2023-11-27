import { Route, Routes as ReactRouterDomRoutes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Routes() {
  return (
    <ReactRouterDomRoutes>
      <Route path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </ReactRouterDomRoutes>
  );
}

export default Routes;
