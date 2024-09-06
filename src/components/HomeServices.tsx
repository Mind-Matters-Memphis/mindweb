import { ServiceBlock } from "./ServiceBlock";
import { ServiceBlock as Block } from "./Block";
import { SiExoscale as Exo } from "react-icons/si";
import { SiClevercloud as Cloud } from "react-icons/si";
import { SiH3 as Honeycomb } from "react-icons/si";
export const HomeServices = () => {
  const services = [
    {
      title: "Clinical Neuropsychology",
      text: "Comprehensive neuropsychological evaluations for individuals with cognitive concerns.",
      url: "/clinical-neuropsychology",
      linkText: "Learn More",
      icon: Exo,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 270,
    },
    {
      title: "Forensic Evaluations",
      text: "Expert forensic evaluations for legal matters involving cognitive health.",
      url: "/forensic-evaluations",
      linkText: "Learn More",
      icon: Cloud,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 65,
    },
    {
      title: "Memory Care",
      text: "Specialized care for individuals with memory disorders and their families.",
      url: "/memory-care",
      linkText: "Learn More",
      icon: Honeycomb,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 75,
    }
  ]
  return ( 
    <div className="grid grid-rows-3 h-dvh">
      {services.map((service, index) => (
        <Block key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
}