import { MdOutlinePhoneEnabled as Phone } from "react-icons/md";
import { MdOutlineEmail as Email } from "react-icons/md";
import { MdOutlineLocationOn as Location } from "react-icons/md";
import { ContactListItem } from "./ContactListItem";

export const HomeContact = () => {

  const contactItems = [
    {
      icon: Phone,
      text: "901-555-5555",
      url: "tel:+19015555555",
    },
    {
      icon: Email,
      text: "gould@gouldmail.com",
      url: "mailto:gould@gouldmail.com",
    },
    {
      icon: Location,
      text: "1234 Main St, Memphis, TN 38103",
      url: "https://maps.app.goo.gl/gebxzX7GRH19RUeA8",
    },
  ];
  return (
    <div>
      <h2 className="text-4xl text-center p-4">Contact</h2>
      <div className="flex flex-col items-center p-4">
        <div>
          {
            contactItems.map((item, index) => <ContactListItem key={index} icon={item.icon} text={item.text} url={item.url}/>)
          }
        </div>
      </div>
    </div>
  );
}