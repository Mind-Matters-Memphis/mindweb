import { IconType } from "react-icons";

type Props = {
  icon: IconType,
  text: string,
  isEmail: boolean,
}
export const ContactListItem = ({icon, text, isEmail}: Props) => {
  const iconStyle = "h-12 w-12 text-dust";
  const iconComponent = icon;
  return ( 
    <div className="flex items-center">
      { iconComponent({className: iconStyle}) }
      <p>{text}</p>
    </div>
  );
}