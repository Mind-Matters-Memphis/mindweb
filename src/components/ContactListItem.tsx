import { IconType } from "react-icons";

type Props = {
  icon: IconType,
  text: string,
  url: string,
}
export const ContactListItem = ({icon, text, url}: Props) => {
  const iconStyle = "h-12 w-12 text-sage mr-4";
  // const iconComponent = icon;
  console.log(url)
  return ( 
    <a href={url} className="flex items-center cursor-pointer">
      { icon({className: iconStyle}) }
      <p className="underline">{text}</p>
    </a>
  );
}