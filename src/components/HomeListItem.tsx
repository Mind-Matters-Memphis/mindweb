import { IconType } from "react-icons";

type itemProps = {
  title: string;
  text: string;
  icon: IconType;
  imgText: string;
}
export const ListItem = ({title, text, icon, imgText}: itemProps) => {
  return ( 
    <li className="flex bg-inlet bg-opacity-60 items-center p-4 px-8 rounded-full m-4">
      { icon({className:"inline-block h-12 w-12 text-coral", "aria-label": `${imgText}`}) }
      <div className="p-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}