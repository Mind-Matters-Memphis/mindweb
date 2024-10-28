import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import NavMenuMobile from "./components/NavMenuMobile";
import { Footer } from "./components/Footer";

export const Root = () => {
  // <Outlet /> is where the child routes are rendered
  return ( 
    <div className="font-accessbody">
      {/* <Nav></Nav> */}
      <NavMenu />
      <NavMenuMobile />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}