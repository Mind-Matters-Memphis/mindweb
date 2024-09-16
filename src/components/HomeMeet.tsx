import portrait from "../assets/imgs/Portrait.jpg"
import { Link } from "react-router-dom";
import { IoIosArrowForward as Arrow } from "react-icons/io";

export const HomeMeet = () => {
  return ( 
    <div className="grid grid-cols-5 justify-center bg-sage text-midnight py-4">
      <div className="col-start-2 col-span-3 flex flex-col items-center p-4">
          <h2 className="text-6xl p-4 font-altdisplay font-bold uppercase">Meet Dr. Gould</h2>
          <img src={portrait} alt="Dr. Gould professional headshot" className="h-64 w-64 object-cover rounded-full"/>
          <p className="p-4 my-4">Dr. Gould has been providing excellent care in clinical neuropsychology for the better part of two decades.</p>
          <Link to="/meet-dr-gould" aria-label="About Dr. Gould" className="bg-dust/80 font-bold text-2xl p-4 pl-8 pr-12 rounded-lg transition-all ease-in-out duration-200 relative shadow-md lg:before:absolute lg:before:bottom-[30%] lg:before:left-[50%] lg:before:h-[3px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-coral lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:hover:before:left-[25%] lg:hover:before:w-[60%] lg:active:left-[1px] lg:active:top-[2px] lg:active:shadow-none xl:mx-4">
            <Arrow className="inline-block h-12 w-12 text-coral" title="Arrow icon" role="Link to About page"/>
            <span>About Dr. Gould</span>
          </Link>
      </div>
    </div>
  );
}