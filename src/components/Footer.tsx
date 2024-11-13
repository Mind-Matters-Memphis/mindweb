import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo/logoDust.svg";
import { MdOutlinePhoneEnabled as Phone } from "react-icons/md";
import { MdOutlineFax as Fax } from "react-icons/md";
import { MdOutlineEmail as Email } from "react-icons/md";
import { MdOutlineLocationOn as Location } from "react-icons/md";
import { ContactListItem } from "./ContactListItem";

export const Footer = () => {
  const contactItems = [
    {
      icon: Phone,
      imgName: "Phone icon",
      text: (
        <p className="hover:underline active:underline decoration-sage md:decoration-2">
          901-766-7500
        </p>
      ),
      url: "tel:+19017667500",
    },
    {
      icon: Fax,
      imgName: "Fax icon",
      text: (
        <p className="hover:underline active:underline decoration-sage md:decoration-2">
          901-766-7550
        </p>
      ),
      url: "tel:+19017667550",
    },
    {
      icon: Email,
      imgName: "Email icon",
      text: (
        <p className="text-lg sm:text-xl hover:underline active:underline decoration-sage md:decoration-2">
          info@mindmattersmemphis.com
        </p>
      ),
      url: "mailto:info@mindmattersmemphis.com",
    },
    {
      icon: Location,
      imgName: "Location icon",
      text: (
        <p className="hover:underline active:underline flex flex-col decoration-sage md:decoration-2">
          <span>5100 Poplar Ave, Suite 322</span>
          <span>Memphis, TN 38137</span>
        </p>
      ),
      url: "https://maps.app.goo.gl/9RzA1WMAE9NfWH1B6",
    },
  ];

  const listItemStyle = "py-2";
  const altLinkStyle =
    "p-2 hover:underline active:underline decoration-sage md:decoration-2 tracking-wide text-dust active:left-[1px] active:top-[2px] active:shadow-none";
  return (
    <footer className="bg-midnight text-dust p-4 sm:p-8 text-xl peer-has-[[data-state=open]]:blur-sm">
      <div className="flex flex-col md:grid md:grid-rows-2 justify-center md:items-end border-b-2 border-sage lg:border-b-4">
        <div className="self-center md:self-start border-b-2 border-sage md:border-b-0 md:pt-6">
          <Link
            to="/"
            className="flex justify-center cursor-pointer py-4"
            aria-label="Return to Mind Matters Memphis homepage"
          >
            <img
              src={logo}
              className="sm:max-w-[575px]"
              title="Mind Matters Logo"
              role="Mind Matters Memphis logo image"
              alt="Mind Matters Memphis logo, with the 3 'M's depicting a bridge"
            />
          </Link>
        </div>
        <div className="flex flex-col mx-auto md:flex-row md:justify-between md:mx-0 md:gap-10 lg:gap-48 xl:gap-96 md:pb-4">
          <div className="pb-4 grid justify-start">
            <h2 className="p-2 pt-4 md:pt-2 text-2xl font-accessdisplay tracking-wider">
              Get in Touch:
            </h2>
            <div className="flex flex-col items-center">
              <div>
                {contactItems.map((item, index) => (
                  <ContactListItem
                    key={index}
                    icon={item.icon}
                    imgName={item.imgName}
                    text={item.text}
                    url={item.url}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:self-start pb-4">
            <h2 className="p-2 md:pb-4 text-2xl font-accessdisplay tracking-wider">
              Site Navigation:
            </h2>
            <ul className="flex flex-col justify-between md:gap-2 md:items-start">
              <li className={listItemStyle}>
                <Link
                  to="/clinical-neuropsychology#top"
                  className={altLinkStyle}
                >
                  <span className="z-20">Clinical Neuropsychology</span>
                </Link>
              </li>
              <li className={listItemStyle}>
                <Link
                  to="/forensic-evaluations#top"
                  className={altLinkStyle}
                >
                  <span className="z-20">Forensic Evaluations</span>
                </Link>
              </li>
              <li className={listItemStyle}>
                <Link to="/cognitive-aging#top" className={altLinkStyle}>
                  <span className="z-20">Healthy Cognitive Aging</span>
                </Link>
              </li>
              <li className={listItemStyle}>
                <Link to="/meet-dr-gould#top" className={altLinkStyle}>
                  <span className="">Meet Dr. Gould</span>
                </Link>
              </li>
              <li className={listItemStyle}>
                <Link to="/forms#top" className={altLinkStyle}>
                  <span className="">Forms</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 pt-6 lg:mx-12">
        <div className="flex justify-center lg:justify-end text-center text-base sm:text-xl">
          <p>&copy; 2024 Mind Matters Memphis, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
