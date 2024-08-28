import { Link } from "react-router-dom";
import { useState } from "react";
import { GiBrain as MindLogo } from "react-icons/gi";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  let navLinkDivStyle = "nav-links absolute top-0 right-0 h-full w-0 bg-midnight text-sand flex flex-col justify-center items-center transition-all duration-300 ease-in-out z-20 ";
  const handleNavClick = () => {
    setNavOpen(true);
  }
  const handleListClick = () => {
    const input = document.getElementById("mobile-menu") as HTMLInputElement;
    input.checked = false;
  }
  const navLinkOld = "relative p-4 transition-all duration-300 ease-in-out before:absolute before:bottom-[15%] before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:rounded-sm before:bg-sand before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-[50%] after:top-[15%] after:h-[2px] after:w-0 after:origin-center after:rounded-sm after:bg-sand after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:before:left-[0%] hover:before:w-[100%] hover:after:left-[0%] hover:after:w-[100%] active:left-[1px] active:top-[2px] active:shadow-none xl:mx-4";
  const navLinkStyle = "block p-8 text-sand hover:text-midnight hover:bg-sand hover:shadow-md";
  
  return ( 
    <header className="w-full sticky bg-midnight text-sand flex justify-between shadow-sm group">
      <div className="">
        <Link to="/" className="flex justify-center items-center gap-2 p-2 md:p-4 sm:ml-4">
          <MindLogo className="h-10 w-10" title="Mind Matters logo - outline of brain with grey matter" role="Icon image"/>
          <span className="font-bold md:text-xl">Mind Matters Memphis</span>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <nav className="h-full w-full fixed top-16 bg-midnight overflow-hidden max-h-0 transition-all duration-500 ease-out group-has-[:checked]:max-h-full" >
        <ul className="list-none" onClick={handleListClick}>
          <li>
            <Link to="/meet-dr-gould" className={navLinkStyle} >About</Link>
          </li>
          <li>
            <Link to="/clinical-neuropsychology" className={navLinkStyle}>Clinical Neuropsychology</Link>
          </li>
          <li>
            <Link to="/forensic-services" className={navLinkStyle}>Forensic Evaluations</Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkStyle}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="group lg:hidden float-right">
        <input type="checkbox" id="mobile-menu" className="hidden" value="checked"/>
        <label htmlFor="mobile-menu" className="cursor-pointer mx-2 my-4 relative">
          <span className="h-[3px] w-7 bg-sand m-2 block relative group-has-[:checked]:bg-midnight before:h-[3px] before:w-full before:absolute before:bg-sand before:top-2 before:transition-all before:duration-200 before:ease-out group-has-[:checked]:before:rotate-45 group-has-[:checked]:before:top-0 after:h-[3px] after:w-full after:absolute after:bg-sand after:-top-2 after:transition-all after:duration-200 after:ease-out group-has-[:checked]:after:-rotate-45 group-has-[:checked]:after:top-0"></span>
        </label>
      </div>
      {/* <div className="lg:hidden">
        <button className="p-2 md:p-4" title="Open navigation menu" onClick={handleNavClick}>
          <span className="h-[3px] w-7 bg-sand m-2 block"></span>
          <span className="h-[3px] w-7 bg-sand m-2 block"></span>
          <span className="h-[3px] w-7 bg-sand m-2 block"></span>
        </button>
      </div> */}
      {/* <nav>
        <div className={navLinkDivStyle + `${navOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
          <Link to="/meet-dr-gould" className={navLinkStyle}>About</Link>
          <Link to="/clinical-neuropsychology" className={navLinkStyle}>Clinical Neuropsychology</Link>
          <Link to="/forensic-services" className={navLinkStyle}>Forensic Evaluations</Link>
          <Link to="/contact" className={navLinkStyle}>Contact</Link>
        </div>
        <div className={navOpen ? "nav-overlay h-full top-0 visible opacity-100 z-10" : "nav-overlay h-full top-0 invisible opacity-0 z-10"}></div>
      </nav> */}
    </header>
  );
}