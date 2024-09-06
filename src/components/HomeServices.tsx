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
      style: "justify-self-end",
      icon: Exo,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 270,
    },
    {
      title: "Forensic Evaluations",
      text: "Expert forensic evaluations for legal matters involving cognitive health.",
      url: "/forensic-evaluations",
      linkText: "Learn More",
      style: "justify-self-center",
      icon: Cloud,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 65,
    },
    {
      title: "Memory Care",
      text: "Specialized care for individuals with memory disorders and their families.",
      url: "/memory-care",
      linkText: "Learn More",
      style: "justify-self-start",
      icon: Honeycomb,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 75,
    }
  ]
  return ( 
    // <div className="grid grid-rows-3 h-dvh">
    //   {services.map((service, index) => (
    //     <Block key={index} service={service} invert={index % 2 === 0} />
    //   ))}
    // </div>
    <div className="bg-dust relative grid min-h-dvh gap-8">
      <div className="h-[384px] w-[384px] rounded-br-full bg-inlet absolute top-0 left-0"></div>
      <div className="absolute bottom-0 right-0 border-b-0 border-dust border-t-75 border-r-75 border-r-coral z-10"></div>
      {services.map((service, index) => (
        <ServiceBlock key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
}