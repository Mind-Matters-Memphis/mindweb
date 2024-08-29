import { IoIosArrowForward as Arrow } from "react-icons/io";

type itemProps = {
  title: string;
  text: string;
}
export const ListItem = ({title, text}: itemProps) => {
  return ( 
    <li className="flex bg-inlet bg-opacity-60 items-center p-4 px-8 rounded-full m-4">
      <Arrow className="inline-block h-12 w-12 text-coral" role="List style arrow"/>
      <div className="p-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}