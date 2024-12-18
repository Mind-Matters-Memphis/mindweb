import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import { MdOutlineArrowRight as Arrow } from "react-icons/md";
//
import "../assets/stylesheets/shapes.css"
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
};
type Props = {
  invert?: boolean;
  service: Service;
};
export const ServiceBlockAlt = ({ service }: Props) => {
  return (
    <div
      className={
        "border-4 rounded-md mx-4 sm:rounded-none sm:border-8 sm:mx-8 max-w-3xl z-20 " +
        service.style
      }
    >
      <div
        className={
          "bg-dust text-midnight shadow-inner grid justify-center items-center w-inherit p-4 sm:px-6 lg:p-8"
        }
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold font-accessdisplay py-4 text-center">
            {service.title}
          </h2>
        </div>
        <div>
          <p className="py-2 text-xl">{service.text}</p>
        </div>
        <ul className="pl-2">
          {service.points?.map((point, index) => (
            <li
              key={index}
              className={`text-lg grid grid-cols-12 items-start list-inside`}
            >
              <Arrow
                className={"h-8 w-8 justify-self-end text-" + service.color}
              />
              <span className="text-wrap col-span-10">{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Link
            to={service.url}
            className={
              "text-xl sm:text-2xl p-4 sm:px-8 m-4 rounded-lg text-midnight text-center font-semibold shadow-md border-2 lg:border-4 transition-all duration-500 ease-in-out relative active:left-[1px] active:top-[2px] active:shadow-none " +
              service.btnStyle
            }
          >
            {service.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};
