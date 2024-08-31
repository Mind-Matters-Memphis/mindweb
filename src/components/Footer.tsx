import { Link } from "react-router-dom";
import { GiBrain as MindLogo } from "react-icons/gi";

export const Footer = () => {
  const altLinkStyle = "border-2 border-midnight rounded-md p-2 px-4 tracking-wide text-sand truncate relative transition-all duration-700 ease-in-out hover:border-sand after:bg-sand after:bg-opacity-90 after:block after:absolute after:-top-[50px] after:-left-[75px] after:h-32 after:w-12 after:transition-all after:duration-1000 after:ease-in-out after:rotate-[30deg] after:z-0 hover:after:left-[120%] active:left-[1px] active:top-[2px] active:shadow-none";
  return ( 
    <footer className="bg-midnight text-sand p-8">
      <div className="flex justify-between border-b-2 border-sage p-4 mx-12">
        <Link to="/" className="flex flex-col p-2 cursor-pointer" aria-label="Return to Mind Matters Memphis homepage">
          <MindLogo className="h-10 w-10" title="Mind Matters Logo" role="Mind Matters Memphis logo image"/>
          <h2 className="text-2xl">Mind Matters Memphis</h2>
        </Link>
        <div className="flex gap-6 items-end">
          <Link to="/meet-dr-gould" className={altLinkStyle} >
            <span className="z-20">Meet Dr. Gould</span>
          </Link>
          <Link to="/clinical-neuropsychology" className={altLinkStyle} >
            <span className="z-20">Clinical Neuropsychology</span>
          </Link>
          <Link to="/forensic-evaluations" className={altLinkStyle} >
            <span className="z-20">Forensic Evaluations</span>
          </Link>
          <Link to="/contact" className={altLinkStyle} >
            <span className="z-20">Contact</span>
          </Link>
        </div>
      </div>
      <div className="p-4 pt-6 mx-12">
        <div className="flex justify-end">
          <p>&copy; 2024 Mind Matters Memphis, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}