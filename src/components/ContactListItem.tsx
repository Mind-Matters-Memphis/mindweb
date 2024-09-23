import { IconType } from "react-icons";

type Props = {
  icon: IconType,
  imgName: string,
  text: string,
  url: string,
}
export const ContactListItem = ({icon, imgName, text, url}: Props) => {
  const iconStyle = "h-12 w-12 text-sand";
  // const iconComponent = icon;
  console.log(url)
  return ( 
    <a href={url} className="flex items-center cursor-pointer py-2">
      <div className="h-12 w-12 mr-4">
        { icon({className: iconStyle, title: imgName}) }
      </div>
      
      <p className="underline">{text}</p>
    </a>
  );
}