import { ServiceBlock } from "./ServiceBlock";
import { SiExoscale as Exo } from "react-icons/si";
import { SiClevercloud as Cloud } from "react-icons/si";
import { SiH3 as Honeycomb } from "react-icons/si";
export const HomeServices = () => {
  const services = [
    {
      title: "Neuropsychological Assessments",
      text: "Comprehensive neuropsychological evaluations for individuals with cognitive concerns.",
      url: "/clinical-neuropsychology#top",
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
      text: "Objective, independent evaluations for legal matters involving cognitive health. Services include:",
      url: "/forensic-evaluations#top",
      points: [
        "Neuropsychological IMEs",
        "Psychologidal-only IMEs",
        "Testamentary Evaluations",
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
      text: "Specialized care for individuals with memory disorders and their families, designed to:",
      url: "/cognitive-aging#top",
      points: [
        "Maximize existing cognitive function",
        "Promote healthy cognitive aging",
        "Establish a cognitive baseline"
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
  // commented out an abstract triangle
  {
    /* <div className="absolute bottom-0 right-0 border-b-0 border-dust border-t-50 border-r-50 md:border-t-75 md:border-r-75 border-r-coral z-10"></div> */
  }

  return (
    <div className="pb-12 bg-dust relative grid gap-10 md:gap-16 justify-center ">
      {services.map((service, index) => (
        <ServiceBlock key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
};
