import { ServiceBlock } from "./ServiceBlock";
export const HomeServices = () => {
  const services = [
    {
      title: "Clinical Neuropsychology",
      text: "Comprehensive neuropsychological evaluations for individuals with cognitive concerns.",
      url: "/clinical-neuropsychology",
      linkText: "Learn More"
    },
    {
      title: "Forensic Evaluations",
      text: "Expert forensic evaluations for legal matters involving cognitive health.",
      url: "/forensic-evaluations",
      linkText: "Learn More"
    },
    {
      title: "Memory Care",
      text: "Specialized care for individuals with memory disorders and their families.",
      url: "/memory-care",
      linkText: "Learn More"
    }
  ]
  return ( 
    <div className="grid grid-rows-3 h-dvh">
      {services.map((service, index) => (
        <ServiceBlock key={index} service={service} invert={index % 2 === 0} />
      ))}
    </div>
  );
}