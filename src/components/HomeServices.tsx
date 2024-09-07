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
      points: [
        "Lorem ipsum list item",
        "Lorem ipsum list item",
        "Lorem ipsum list item",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      ],
      linkText: "Learn More",
      style: "xl:justify-self-end xl:mr-24 mt-10 border-inlet from-inlet/75",
      btnStyle: "border-inlet/75",
      color: "inlet",
      icon: Exo,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 270,
    },
    {
      title: "Forensic Evaluations",
      text: "Expert forensic evaluations for legal matters involving cognitive health.",
      url: "/forensic-evaluations",
      points: [
        "Lorem ipsum list item",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        "Lorem ipsum list item",
      ],
      linkText: "Learn More",
      style: "xl:justify-self-center border-sage from-sage/75",
      btnStyle: "border-sage/90",
      color: "sage",
      icon: Cloud,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 65,
    },
    {
      title: "Memory Care",
      text: "Specialized care for individuals with memory disorders and their families.",
      url: "/memory-care",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        "Lorem ipsum list item",
        "Lorem ipsum list item",
        "Lorem ipsum list item",
      ],
      linkText: "Learn More",
      style: "xl:justify-self-start xl:ml-24 mb-10 border-coral from-coral/50",
      btnStyle: "border-coral/70",
      color: "coral",
      icon: Honeycomb,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 75,
    }
  ]
  return ( 
    <div className="bg-dust relative grid min-h-dvh gap-10 justify-center xl:justify-normal ">
      <div className="h-[384px] w-[384px] rounded-br-full bg-inlet absolute top-0 left-0"></div>
      <div className="absolute bottom-0 right-0 border-b-0 border-dust border-t-75 border-r-75 border-r-coral z-10"></div>
      {services.map((service, index) => (
        <ServiceBlock key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
}