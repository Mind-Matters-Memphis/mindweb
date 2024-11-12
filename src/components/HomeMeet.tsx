import portrait from "../assets/imgs/HeadshotLg.jpeg";
import { Link } from "react-router-dom";

export const HomeMeet = () => {
  return (
    <div className="grid sm:grid-cols-9 justify-center bg-sage text-midnight py-4 relative">
      <div className="hidden lg:block absolute left-0 h-[30cqw] w-[15cqw] rounded-br-full rounded-tr-full bg-inlet border-r-4 border-b-8 border-t-8 border-inlet z-0 -translate-y-[50%]">
        <span className="visually-hidden">
          A decorative semicircle element, big sky blue color, sitting at the
          upper left corner of the Meet Dr. Gould section.
        </span>
      </div>
      <div className="hidden lg:block absolute left-0 h-[20cqw] w-[10cqw] rounded-br-full rounded-tr-full bg-sand border-r-6 border-coral z-0 -translate-y-[50%]">
        <span className="visually-hidden">
          A decorative semicircle element, sand and coral colors, sitting inside
          the larger blue semicircle in the upper left corner.
        </span>
      </div>
      <div className="sm:col-start-2 sm:col-span-7 p-4 lg:p-0">
        <div className="flex flex-col items-center lg:hidden">
          <h2 className="text-4xl sm:text-6xl md:text-7xl pb-4 sm:p-4 font-accessdisplay font-bold uppercase">
            Meet Dr. Gould
          </h2>
          <img
            src={portrait}
            alt="Dr. Gould professional headshot"
            className="h-64 w-64 object-cover object-top rounded-full"
          />
          <div className="p-4 my-4 text-xl text-start flex flex-col gap-2 md:gap-4">
            <p className="">
              Dr. Amanda Gould founded Mind Matters Memphis to provide a more
              personalized clinical neuropsychology experience for her patients.
            </p>
            <p className="text-2xl italic">
              “As a boutique clinic, I’m able to offer a greater level of
              attention and time to the patient to ensure they feel heard and
              receive a plan of care that is specific to their needs, lifestyle,
              and goals.”
            </p>
          </div>
          <Link
            to="/meet-dr-gould"
            aria-label="About Dr. Gould"
            className="bg-dust/80 font-bold text-2xl p-4 px-8 sm:p-6 sm:px-12 rounded-lg transition-all ease-in-out duration-200 relative shadow-md before:absolute before:bottom-[27.5%] before:left-[50%] before:h-[3px] before:w-0 before:origin-center before:rounded-sm before:bg-coral before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[17.5%] hover:before:w-[65%] active:left-[1px] active:top-[2px] active:shadow-none"
          >
            <span>About Dr. Gould</span>
          </Link>
        </div>
        <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-5 justify-center justify-items-center items-center py-12 z-10 relative">
          <div className="lg:col-start-2 lg:row-span-5 self-center xl:px-8 2xl:px-16">
            <img
              src={portrait}
              alt="Dr. Gould professional headshot"
              className="object-cover object-top rounded-3xl shadow-xl"
            />
          </div>
          <h2 className="text-7xl p-4 font-accessdisplay font-bold uppercase text-center lg:col-start-1 lg:row-start-1">
            Meet Dr. Gould
          </h2>
          <div className="p-4 pt-0 xl:p-8 xl:pt-0 text-xl text-start flex flex-col gap-4 row-span-3 justify-center lg:gap-8 2xl:gap-16">
            <p className="">
              Dr. Amanda Gould founded Mind Matters Memphis to provide a more
              personalized clinical neuropsychology experience for her patients.
            </p>
            <p className="text-2xl xl:text-4xl italic text-midnight">
              “As a boutique clinic, I’m able to offer a greater level of
              attention and time to the patient to ensure they feel heard and
              receive a plan of care that is specific to their needs, lifestyle,
              and goals.”
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/meet-dr-gould#top"
              aria-label="About Dr. Gould"
              className="bg-dust/80 font-bold text-2xl p-6 px-12 rounded-lg transition-all ease-in-out duration-200 relative shadow-md lg:before:absolute lg:before:bottom-[27.5%] lg:before:left-[50%] lg:before:h-[3px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-coral lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:hover:before:left-[17.5%] lg:hover:before:w-[65%] active:left-[1px] active:top-[2px] active:shadow-none xl:mx-4"
            >
              <span>About Dr. Gould</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
