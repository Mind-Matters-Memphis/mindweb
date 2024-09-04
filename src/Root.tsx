import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export const Root = () => {
  // <Outlet /> is where the child routes are rendered
  return ( 
    <div className="font-body">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}