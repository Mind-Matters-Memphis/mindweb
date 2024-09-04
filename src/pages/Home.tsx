import { Title } from "../components/HomeTitle";
import calm from "../assets/imgs/Calm.jpg"
import contemplative from "../assets/imgs/InDeepThought.jpg"
import portrait from "../assets/imgs/Portrait.jpg"
import { ListItem } from "../components/HomeListItem";
import { Link } from "react-router-dom";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import { HomeContact } from "../components/HomeContact";
import { RiMentalHealthLine as Mental } from "react-icons/ri";
import { FaNotesMedical as Notes } from "react-icons/fa";
import { FaPersonWalkingWithCane as Old } from "react-icons/fa6";

export const Home = () => {
      // background image of initial block
      // Mind Matters Memphis title
      // buttons for Learn More and Contact
      // block for Our Mission
      //
      const listItems = [
        {
          title: "Clinical Expertise",
          text: "Dr. Gould has been a neuropsychological clinician for 15 years.",
          url: "/clinical-neuropsychology",
          icon: Mental,
          imgText: "Mental Health icon",
        },
        {
          title: "Forensic Evaluations",
          text: "Specialized forensic evaluations for legal and court-related matters.",
          url: "/forensic-evaluations",
          icon: Notes,
          imgText: "Medical Notes icon",
        },
        {
          title: "Cognitive Aging",
          text: "Support and strategies for healthy cognitive aging and memory care.",
          url: "/cognitive-aging",
          icon: Old,
          imgText: "Older Adult icon",
        }
      ]
  return ( 
    <div>
      <Title />
      <div className="bg-dust lg:grid lg:grid-cols-4">
        <div className="hidden lg:block col-span-2 p-12">
          <img src={calm} alt="Young East Asian Woman in Cozy Work Environment" className="h-full object-cover rounded-xl"/>
        </div>
        <div className="text-2xl p-4 pb-12 flex flex-col justify-center text-center lg:col-span-2 lg:text-6xl lg:text-start">
          <h2 className="text-midnight py-4 font-display">Our Mission</h2>
          <p className="text-inlet font-extrabold font-display">Providing comprehensive neuropsychological care to enhance cognitive health and well being.</p>
        </div>
      </div>
      <div className="bg-midnight p-4 lg:grid lg:grid-cols-4">
        <div className="flex flex-col justify-center lg:col-span-2 lg:p-8">
          <h2 className="text-sand py-4 self-center lg:text-4xl font-display">Why Choose Us</h2>
          <ul className="grid grid-rows-3">
            {
              listItems.map((item, index) => <ListItem key={index} title={item.title} text={item.text} icon={item.icon} imgText={item.imgText} url={item.url} />)
            }
          </ul>
        </div>
        <div className="hidden col-span-2 p-12 lg:flex items-center">
          <img src={contemplative} alt="Young Black Man in Contemplation" className="h-full object-cover rounded-xl"/>
        </div>
      </div>
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