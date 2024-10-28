import { IconType } from "react-icons";

type Props = {
  icon: IconType,
  imgName: string,
  text: string | JSX.Element,
  url: string,
}
export const ContactListItem = ({icon, imgName, text, url}: Props) => {
  const iconStyle = "h-8 w-8 md:h-12 md:w-12 text-sand";
  return ( 
    <a href={url} className="flex items-center cursor-pointer py-2">
      <div className="h-8 w-8 md:h-12 md:w-12 mr-4">
        { icon({className: iconStyle, title: imgName}) }
      </div>
      { text }
    </a>
  );
}