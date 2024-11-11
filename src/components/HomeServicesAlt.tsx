import { ServiceBlockAlt } from "./ServiceBlockAlt";
import { SiExoscale as Exo } from "react-icons/si";
import { SiClevercloud as Cloud } from "react-icons/si";
import { SiH3 as Honeycomb } from "react-icons/si";
export const HomeServicesAlt = () => {
  const services = [
    {
      title: "Neuropsychological Assessments",
      text: "Comprehensive neuropsychological evaluations for individuals with cognitive concerns.",
      url: "/clinical-neuropsychology",
      points: [
        "Lorem ipsum list item",
        "Lorem ipsum list item",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      ],
      linkText: "Clinical Neuropsychology",
      // style: "xl:justify-self-end xl:mr-24 mt-10 border-inlet from-inlet/75",
      style: "border-inlet quote-frame-inlet",
      btnStyle: "border-inlet/75 hover:bg-inlet/15",
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
      linkText: "Forensic Evaluations",
      style: "border-sage quote-frame-sage",
      btnStyle: "border-sage/90 hover:bg-sage/25",
      color: "sage",
      icon: Cloud,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 65,
    },
    {
      title: "Cognitive Aging Evaluations",
      text: "Specialized care for individuals with memory disorders and their families.",
      url: "/cognitive-aging",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
        "Lorem ipsum list item",
      ],
      linkText: "Cognitive Aging",
      // style: "xl:justify-self-start xl:ml-24 mb-10 border-coral from-coral/50",
      style: "mb-10 border-coral quote-frame-coral",
      btnStyle: "border-coral/70 hover:bg-coral/15",
      color: "coral",
      icon: Honeycomb,
      iconAlt: "Triangle, half solid, half streaked",
      rotation: 75,
    },
  ];

  return (
    <div className="pb-12 bg-dust relative grid gap-10 md:gap-12 justify-center ">
      {services.map((service, index) => (
        <ServiceBlockAlt key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
};
