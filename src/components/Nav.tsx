import { Link } from "react-router-dom";
import { GiBrain as MindLogo } from "react-icons/gi";

export const Nav = () => {
  const navLinkStyle = "relative p-4 transition-all duration-300 ease-in-out before:absolute before:bottom-[15%] before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:rounded-sm before:bg-sand before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:absolute after:left-[50%] after:top-[15%] after:h-[2px] after:w-0 after:origin-center after:rounded-sm after:bg-sand after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:before:left-[0%] hover:before:w-[100%] hover:after:left-[0%] hover:after:w-[100%] active:left-[1px] active:top-[2px] active:shadow-none xl:mx-4";
  return ( 
    <div className="w-full bg-midnight text-sand flex justify-between items-center">
      <div>
        <Link to="/" className="flex justify-center items-center gap-2 p-2 md:p-4 sm:ml-4">
          <MindLogo className="h-10 w-10" title="Mind Matters logo - outline of brain with grey matter" role="Icon image"/>
          <span className="font-bold md:text-xl">Mind Matters Memphis</span>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="m-2 mr-8 hidden lg:block">
        <Link to="/meet-dr-gould" className={navLinkStyle} >About</Link>
        <Link to="/clinical-neuropsychology" className={navLinkStyle}>Clinical Neuropsychology</Link>
        <Link to="/forensic-services" className={navLinkStyle}>Forensic Evaluations</Link>
        <Link to="/contact" className={navLinkStyle}>Contact</Link>
      </div>
      <div className="lg:hidden">
        <button className="p-2 md:p-4" title="Open navigation menu">
          <span className="h-[3px] w-7 bg-sand m-2 block"></span>
          <span className="h-[3px] w-7 bg-sand m-2 block"></span>
          <span className="h-[3px] w-7 bg-sand m-2 block"></span>
        </button>
      </div>
    </div>
  );
}