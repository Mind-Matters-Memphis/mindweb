import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";

export const Root = () => {
  // <Outlet /> is where the child routes are rendered
  return ( 
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}