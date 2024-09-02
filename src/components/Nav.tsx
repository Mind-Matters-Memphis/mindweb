import { Link, useLocation } from "react-router-dom";
import { GiBrain as MindLogo } from "react-icons/gi";

export const Nav = () => {
  const location = useLocation();

  const handleListClick = () => {
    const input = document.getElementById("mobile-menu") as HTMLInputElement;
    input.checked = false;
  }
  const navLinkStyle = "block p-8 text-sand transition-all duration-300 ease-in-out hover:text-midnight hover:bg-sand hover:shadow-md lg:hover:text-sand lg:hover:bg-midnight lg:relative lg:p-4 lg:before:absolute lg:before:bottom-[15%] lg:before:left-[50%] lg:before:h-[2px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-sand lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:after:absolute lg:after:left-[50%] lg:after:top-[15%] lg:after:h-[2px] lg:after:w-0 lg:after:origin-center lg:after:rounded-sm lg:after:bg-sand lg:after:transition-all lg:after:duration-300 lg:after:ease-in-out lg:after:content-[''] lg:hover:before:left-[0%] lg:hover:before:w-[100%] lg:hover:after:left-[0%] lg:hover:after:w-[100%] lg:active:left-[1px] lg:active:top-[2px] lg:active:shadow-none xl:mx-4";
  
  return ( 
    <header className="w-full sticky bg-midnight text-sand flex justify-between items-center shadow-sm group" role="banner">
      <div className="">
        <Link to="/" className="flex justify-center items-center gap-2 p-2 md:p-4 sm:ml-4" aria-label="Home">
          <MindLogo className="h-10 w-10" title="Mind Matters Logo" role="Icon image"/>
          <span className="font-bold md:text-xl">Mind Matters Memphis</span>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <nav className="h-full w-full fixed top-16 bg-midnight overflow-hidden max-h-0 transition-all duration-500 ease-out group-has-[:checked]:max-h-full lg:h-fit lg:w-fit lg:max-h-full lg:static xl-pr-4" role="navigation" aria-label="Main navigation" >
        <ul className="list-none lg:flex lg:justify-end items-center" onClick={handleListClick}>
          <li>
            <Link to="/meet-dr-gould" className={navLinkStyle} aria-current={location?.pathname === "/meet-dr-gould"}>About</Link>
          </li>
          <li>
            <Link to="/clinical-neuropsychology" className={navLinkStyle} aria-current={location?.pathname === "/clinical-neuropsychology"}>Clinical Neuropsychology</Link>
          </li>
          <li>
            <Link to="/forensic-evaluations" className={navLinkStyle} aria-current={location?.pathname === "/forensic-evaluations"}>Forensic Evaluations</Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkStyle} aria-current={location?.pathname === "/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="group lg:hidden w-1/6 sm:w-fit sm:px-8">
        <input type="checkbox" id="mobile-menu" className="hidden" value="checked"/>
        <label htmlFor="mobile-menu" className="cursor-pointer py-0 px-10" aria-label="Menu">
          <span className="h-[3px] w-7 bg-sand m-2 block relative group-has-[:checked]:bg-midnight before:h-[3px] before:w-full before:absolute before:bg-sand before:top-2 before:transition-all before:duration-200 before:ease-out group-has-[:checked]:before:rotate-45 group-has-[:checked]:before:top-0 after:h-[3px] after:w-full after:absolute after:bg-sand after:-top-2 after:transition-all after:duration-200 after:ease-out group-has-[:checked]:after:-rotate-45 group-has-[:checked]:after:top-0"></span>
        </label>
      </div>
    </header>
  );
}