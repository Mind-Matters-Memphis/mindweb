import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { MdOutlineArrowRight as Arrow } from "react-icons/md";
type Service = {
  title: string;
  text: string;
  points?: string[];
  url: string;
  linkText: string;
  style: string;
  btnStyle: string;
  color: string;
  icon: IconType;
  iconAlt: string;
  rotation?: number;
}
type Props = {
  invert?: boolean;
  service: Service;
}
export const ServiceBlock = ({ service }: Props) => {

  return ( 
    <div className={"p-8 border-2 rounded-3xl shadow-2xl max-w-3xl bg-gradient-to-tl to-dust z-20 " + service.style}>
      <div className={"bg-dust/75 text-midnight shadow-inner grid justify-center items-center w-fit p-8 rounded-3xl"}>
        <div>
          <h2 className="text-4xl font-accessdisplay">{service.title}</h2>
        </div>
        <div>
          <p className="text-xl">{service.text}</p>
        </div>
        <ul className="">
          {
            service.points?.map((point, index) => (
              <li key={index} className={`text-lg grid grid-cols-12 items-start list-inside`}>
                <Arrow className={"h-8 w-8 justify-self-end text-" + service.color}/>
                <span className="text-wrap col-span-10">{point}</span>
              </li>
            ))
          }
        </ul>
        <div className="flex justify-center">
          <Link to={service.url} className={"text-2xl p-4 px-8 m-4 rounded-lg text-midnight shadow-md border-4 " + service.btnStyle}>{service.linkText}</Link>
        </div>
      </div>
      {/* <div className={"bg-midnight grid justify-center items-center"}>
        <div>
          <h2 className="text-4xl font-accessdisplay">{service.title}</h2>
        </div>
        <div>
          <p className="text-xl">{service.text}</p>
        </div>
        <div className="flex justify-center">
          <Link to={service.url} className="text-2xl border-2 p-4 m-4 border-coral rounded-xl">{service.linkText}</Link>
        </div>
      </div> */}
      {/* <div className={"bg-inlet row-start-1" + col2}>
        <div className="h-full">
          {service.icon({className: iconStyle, "aria-label": service.iconAlt, style: {transform: `rotate(${service.rotation}deg)`}})}
        </div>
      </div> */}
    </div>
  );
}