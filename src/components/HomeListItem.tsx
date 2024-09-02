import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type itemProps = {
  title: string;
  text: string;
  icon: IconType;
  imgText: string;
  url: string;
}
export const ListItem = ({title, text, icon, imgText, url}: itemProps) => {
  return ( 
    <li className="bg-inlet bg-opacity-60 p-4 px-8 rounded-full m-4">
      <Link to={url} className="flex items-center" aria-label={title}>
        { icon({className:"inline-block h-12 w-12 text-coral", "aria-label": `${imgText}`}) }
        <div className="p-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p>{text}</p>
        </div>
      </Link>
    </li>
  );
}