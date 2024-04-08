import { Route, Routes, Outlet } from "react-router-dom";
import Home from "../Home";
import NotFound from "../Body/NotFound";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default NavigationRoutes;
