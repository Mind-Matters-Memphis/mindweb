import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import NavMenuMobile from "./components/NavMenuMobile";
import { Footer } from "./components/Footer";
import "./assets/stylesheets/body.css";

export const Root = () => {
  // <Outlet /> is where the child routes are rendered
  return ( 
    <div className="font-accessbody bg-dust">
      <a href="#main-content" className="focusable visually-hidden text-midnight text-2xl">Skip to main content</a>
      <NavMenu />
      <NavMenuMobile />
      <main id="main-content" className="peer-has-[[data-state=open]]:blur-sm">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}