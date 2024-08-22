import { Outlet } from "react-router-dom";

export const Root = () => {
  // include navigation here
  // <Outlet /> is where the child routes are rendered
  return ( 
    <div>
      <header><h1>Hi, I'm the header!</h1></header>
      <Outlet />
    </div>
  );
}