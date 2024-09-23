import portrait from "../assets/imgs/Portrait.jpg"
import { Link } from "react-router-dom";

export const HomeMeet = () => {
  return ( 
    <div className="grid sm:grid-cols-9 justify-center bg-sage text-midnight py-4">
      <div className="sm:col-start-2 sm:col-span-7 lg:col-start-3 lg:col-span-5 flex flex-col items-center p-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl pb-4 sm:p-4 font-accessdisplay font-bold uppercase">Meet Dr. Gould</h2>
          <img src={portrait} alt="Dr. Gould professional headshot" className="h-64 w-64 object-cover rounded-full"/>
          <div className="p-4 my-4 text-xl text-start flex flex-col gap-2 md:gap-4">
          <p className="">Dr. Gould has been providing excellent care in clinical neuropsychology for XX years.</p>
          <p>She founded Mind Matters Memphis to [insert goal statement].</p>
          </div>
          <Link to="/meet-dr-gould" aria-label="About Dr. Gould" className="bg-dust/80 font-bold text-2xl p-4 px-8 sm:p-6 sm:px-12 rounded-lg transition-all ease-in-out duration-200 relative shadow-md lg:before:absolute lg:before:bottom-[27.5%] lg:before:left-[50%] lg:before:h-[3px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-coral lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:hover:before:left-[17.5%] lg:hover:before:w-[65%] active:left-[1px] active:top-[2px] active:shadow-none xl:mx-4">
            <span>About Dr. Gould</span>
          </Link>
      </div>
    </div>
  );
}