import { MdOutlinePhoneEnabled as Phone } from "react-icons/md";
import { MdOutlineEmail as Email } from "react-icons/md";
import { MdOutlineLocationOn as Location } from "react-icons/md";
import { ContactListItem } from "./ContactListItem";

export const HomeContact = () => {

  const contactItems = [
    {
      icon: Phone,
      imgName: "Phone icon",
      text: "901-555-5555",
      url: "tel:+19015555555",
    },
    {
      icon: Email,
      imgName: "Email icon",
      text: "gould@gouldmail.com",
      url: "mailto:gould@gouldmail.com",
    },
    {
      icon: Location,
      imgName: "Location icon",
      text: "1234 Main St, Memphis, TN 38103",
      url: "https://maps.app.goo.gl/gebxzX7GRH19RUeA8",
    },
  ];
  return (
    <div className="bg-midnight text-sand p-4">
      <h2 className="text-4xl text-center p-4">Get in Touch</h2>
      <div className="flex flex-col items-center p-4">
        <div>
          {
            contactItems.map((item, index) => <ContactListItem key={index} icon={item.icon} imgName={item.imgName} text={item.text} url={item.url}/>)
          }
        </div>
      </div>
    </div>
  );
}