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
    <div className={"py-4 sm:px-2 md:p-4 lg:p-8 border-2 rounded-3xl shadow-2xl max-w-3xl bg-gradient-to-tl to-dust z-20 " + service.style}>
      <div className={"bg-dust xl:bg-dust/75 text-midnight shadow-inner grid justify-center items-center w-fit p-2 sm:p-4 lg:p-8 rounded-3xl"}>
        <div>
          <h2 className="text-4xl font-bold font-accessdisplay py-4 text-center">{service.title}</h2>
        </div>
        <div>
          <p className="py-2 text-xl">{service.text}</p>
        </div>
        <ul className="pl-2">
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
          <Link to={service.url} className={"text-2xl p-4 px-8 m-4 rounded-lg text-midnight shadow-md border-2 lg:border-4 " + service.btnStyle}>{service.linkText}</Link>
        </div>
      </div>
    </div>
  );
}