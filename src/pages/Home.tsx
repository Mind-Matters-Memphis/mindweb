// import { Title } from "../components/HomeTitle";
import { HomeLanding } from "../components/HomeLanding";
// import { HomeChoose } from "../components/HomeChoose";
import portrait from "../assets/imgs/Portrait.jpg"
import { Link } from "react-router-dom";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import { HomeContact } from "../components/HomeContact";
import { HomeServices } from "../components/HomeServices";

export const Home = () => {
      // background image of initial block
      // Mind Matters Memphis title
      // buttons for Learn More and Contact
      // block for Our Mission
      //

  return ( 
    <div>
      <HomeLanding />
      <div className="bg-dust grid sm:grid-cols-4 sm:min-h-96 justify-end relative overflow-visible z-10">
        <div className="h-48 md:h-96 w-48 lg:block lg:h-[768px] lg:w-96 bg-inlet rounded-br-full md:rounded-r-full absolute top-0 left-0"></div>
        <div className="absolute top-8 right-8 lg:top-3/4 lg:right-2/3">
          <div className="bg-coral h-32 w-32 rounded-full"></div>
        </div>
        <div className="hidden sm:block absolute top-0 right-0 border-b-12 lg:border-r-100 border-dust border-t-0 border-r-75 border-r-sage rounded-bl-[100px] -z-10"></div>
        <div className="mt-40 text-2xl p-4 sm:pb-12 flex flex-col justify-center text-center sm:col-start-2 lg:col-start-3 sm:col-span-2 lg:text-4xl lg:text-start lg:mt-10">
          <h2 className="text-midnight py-4 font-accessdisplay font-bold uppercase">Our Mission</h2>
          <p className="text-inlet font-extrabold font-accessdisplay">Providing comprehensive neuropsychological care to enhance cognitive health and well being.</p>
        </div>
      </div>
      <HomeServices />
      <div className="grid grid-cols-4 justify-center bg-sage text-midnight py-4">
        <div className="col-start-2 col-span-2 flex flex-col items-center p-4">
            <h2 className="text-4xl p-4">Transforming Cognitive Health</h2>
            <img src={portrait} alt="Dr. Gould professional headshot" className="h-64 w-64 object-cover rounded-full"/>
            <p className="p-4 my-4">Dr. Gould has been providing excellent care in clinical neuropsychology for the better part of two decades.</p>
            <Link to="/meet-dr-gould" aria-label="About Dr. Gould" className="bg-inlet text-dust font-bold text-2xl p-4 pl-8 pr-12 rounded-full transition-all ease-in-out duration-200 relative shadow-md lg:before:absolute lg:before:bottom-[30%] lg:before:left-[50%] lg:before:h-[3px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-coral lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:hover:before:left-[25%] lg:hover:before:w-[60%] lg:active:left-[1px] lg:active:top-[2px] lg:active:shadow-none xl:mx-4">
              <Arrow className="inline-block h-12 w-12 text-coral" title="Arrow icon" role="Link to About page"/>
              <span>About Dr. Gould</span>
            </Link>
        </div>
      </div>
      <HomeContact />
    </div>
  );
}