import { Link } from "react-router-dom";
type Service = {
  title: string;
  text: string;
  url: string;
  linkText: string;
}
type Props = {
  invert?: boolean;
  service: Service;
}
export const ServiceBlock = ({ invert, service }: Props) => {
  const col1 = invert ? " col-start-2" : " col-start-1";
  const col2 = invert ? " col-start-1" : " col-start-3";

  return ( 
    <div className="grid grid-cols-3">
      <div className={"bg-midnight col-span-2 row-start-1 grid justify-center items-center" + col1}>
        <div>
          <h2 className="text-4xl font-accessdisplay">{service.title}</h2>
        </div>
        <div>
          <p className="text-xl">{service.text}</p>
        </div>
        <div className="flex justify-center">
          <Link to={service.url} className="text-2xl border-2 p-4 m-4 border-coral rounded-xl">{service.linkText}</Link>
        </div>
      </div>
      <div className={"bg-inlet row-start-1" + col2}>
      {/* abstract art? */}
      </div>
    </div>
  );
}