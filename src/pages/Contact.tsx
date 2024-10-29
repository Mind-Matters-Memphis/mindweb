import clarkTower from "../assets/imgs/ClarkTower.png";
import parkingGarage from "../assets/imgs/ParkingGarage.png";
import { ChevronRight, MapPin } from "lucide-react";
import "../assets/stylesheets/shapes.css";

export const Contact = () => {
  return (
    <div className="text-accessbody">
      <div className="bg-dust text-midnight text-xl py-8 sm:p-8 flex flex-col gap-8">
        <div className="contact-parallelogram bg-sand h-40 sm:h-50 md:h-64 flex flex-col justify-center justify-self-center mx-4 sm:mx-12 shadow-2xl">
          <h1 className="text-midnight text-5xl sm:text-7xl xl:text-8xl font-accessdisplay font-bold uppercase text-center flex flex-col justify-center items-center">
            Contact
          </h1>
        </div>
        <div className="md:grid md:grid-cols-9">
          <div className="hidden md:col-span-2 md:flex justify-end items-center mr-[12%]">
            <div className="contact-chevron bg-inlet h-0 md:h-44 lg:h-56"></div>
          </div>
          <div className="sm:px-8 md:col-span-6 xl:col-span-5 flex flex-col">
            <p className="p-4 pt-0">
              To request a neuropsychology appointment or evaluation from Dr.
              Amanda Gould at Mind Matters Memphis, please contact us via one of
              the following methods:
            </p>
            <div className="sm:w-fit self-center p-2">
              <div className="flex items-center gap-2 p-2 sm:w-fit">
                <div className="flex gap-2 items-center">
                  <ChevronRight size={32} className="text-coral" />
                  <h2>Phone:</h2>
                </div>
                <a href="tel:+19017667500" className="underline">
                  901-766-7500
                </a>
              </div>
              <div className="flex flex-wrap gap-2 p-2 sm:w-fit">
                <div className="flex gap-2 items-center">
                  <ChevronRight size={32} className="text-coral" />
                  <h2>Email:</h2>
                </div>
                <a
                  href="mailto:info@mindmattersmemphis.com"
                  className="underline"
                >
                  info@mindmattersmemphis.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dust grid md:grid-cols-4 xl:grid-cols-5">
        <div className="contact-curved-top bg-sage h-[10dvh] w-full md:hidden"></div>
        <div className="hidden xl:block xl:col-start-1 contact-curved-left bg-sage w-[15dvw] h-full justify-self-end"></div>
        <div className="grid justify-center md:col-start-1 md:col-span-3 xl:col-start-2">
          <div className="text-midnight bg-dust grid gap-4 justify-center relative text-xl py-8 sm:p-8 md:gap-8 md:max-w-[700px] md:py-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-accessdisplay font-bold uppercase">
              Referrals
            </h2>
            <p className="px-4">
              We welcome referrals from medical professionals for patients with
              epilepsy, traumatic brain injury, stroke, neurovascular accidents,
              non-epileptic seizures, and pre-surgical evaluations.
            </p>
            <p className="px-4">
              Please complete the referral form and fax it - along with patient
              records - to (901)-766-7550.
            </p>
            <button className="bg-dust/80 font-semibold text-2xl p-4 my-4 sm:p-6 sm:px-12 border-2 border-midnight w-fit h-fit justify-self-center rounded-lg transition-all ease-in-out duration-200 relative shadow-md active:left-[1px] active:top-[2px] active:shadow-none">
              Download Referral Form
            </button>
            <p className="hidden sm:block px-4 text-center">
              For questions about referrals, please email{" "}
              <a
                href="mailto:referrals@mindmattersmemphis.com"
                className="underline"
              >
                referrals@mindmattersmemphis.com
              </a>
              .
            </p>
            <div className="p-1 w-fit mx-auto sm:hidden text-center">
              <p>Questions about referrals?</p>
              <p>Please send us an email:</p>
              <a
                href="mailto:referrals@mindmattersmemphis.com"
                className="underline"
              >
                referrals@mindmattersmemphis.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact-curved-right bg-sage w-[22dvw] h-full hidden md:block justify-self-start xl:w-[15dvw]"></div>
        <div className="contact-curved-bottom bg-sage h-[10dvh] w-full md:hidden"></div>
      </div>
      <div className="bg-dust text-xl text-midnight py-8">
        <div className="contact-ribbon text-bold text-4xl text-dust bg-inlet flex p-4 pl-0 sm:pl-4 justify-center w-[95%] md:w-[90%]">
          <div className="sm:pl-[2.5%] md:pl-[5%] flex items-center gap-2 sm:gap-4">
            <MapPin className="h-10 w-10 md:h-16 md:w-16" />
            <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-accessdisplay font-bold uppercase pt-1 sm:pt-2">
              Office Location
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 p-4 max-w-[500px] sm:pt-8">
          <p className="">
            Mind Matters Memphis is located in Clark Tower at 5100 Poplar
            Avenue,
            <span className="font-bold"> Suite 322</span>, on the{" "}
            <span className="font-bold">3rd floor</span>.
          </p>
          <p className="">
            The Clark Tower at 5100 Poplar Ave. is the tallest building on the
            North side of Poplar, between White Station and Mendenhall.
          </p>
          <div className="block sm:flex justify-center items-center">
            <p className="font-bold sm: pr-6">Directions:</p>
            <div className="flex items-center justify-center pt-2 sm:pt-0 gap-2 sm:gap-4 md:gap-6">
              <MapPin className="h-12 w-12 text-coral" />
              <a
                href="https://maps.app.goo.gl/9RzA1WMAE9NfWH1B6"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                5100 Poplar Ave
              </a>
            </div>
          </div>
          </div>
          <div className="grid items-center p-4 lg:grid-cols-2 lg:gap-8">
            <div className="relative h-36 w-full bg-inlet rounded-3xl lg:col-span-2">
              <div className="absolute w-full top-1/4 bg-sand text-midnight font-accessdisplay text-4xl text-center">
                <h3 className="p-4">Parking Options</h3>
              </div>
            </div>
            <ul className="py-4 max-w-[500px]">
              <li className="py-2 lg:pb-12">
                <p className="font-accessdisplay text-4xl">
                  1. Ground Level Outside
                </p>
                <p>
                  If you park outside on the ground level, there are two “banks”
                  of elevators in the lobby. Take the right bank, which goes to
                  the lower floors.
                </p>
              </li>
              <li className="py-2 lg:pt-12">
                <p className="font-accessdisplay text-4xl">2. Parking Garage</p>
                <p>
                  {`If you park in the garage (which is often easier), enter the parking
                  garage on the West side, bearing left to go to the upper part of
                  Level 3. You'll see a sign for the entrance to Tower Room, and glass
                  doors leading to the 3rd floor (our floor). You may park in any
                  space labeled for guests. When entering the third floor from the
                  parking garage, our suite is at the end of the first hallway to the
                  left.`}
                </p>
              </li>
            </ul>
            <div className=" text-center italic">
              <div>
                <img src={clarkTower} alt="Aerial view of Clark Tower, with west side parking garage entrance indicated." />
                <p className="py-2">Clark Tower, note parking garage entrance</p>
              </div>
              <div>
                <img src={parkingGarage} alt="Entrance to Clark Tower level 3 from parking garage." />
                <p className="py-2">Entrance to Clark Tower level 3 from parking garage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
