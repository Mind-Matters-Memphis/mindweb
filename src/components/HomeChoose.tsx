import contemplative from "../assets/imgs/InDeepThought.jpg"
import { ListItem } from "./HomeListItem";
import { RiMentalHealthLine as Mental } from "react-icons/ri";
import { FaNotesMedical as Notes } from "react-icons/fa";
import { FaPersonWalkingWithCane as Old } from "react-icons/fa6";

export const HomeChoose = () => {
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
  );
}