import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import newPatient from "../assets/forms/NewPatientPaperwork.pdf";
import roiDisclose from "../assets/forms/ReleaseOfInformationDisclose.pdf";
import roiObtain from "../assets/forms/ReleaseOfInformationObtain.pdf";
import referral from "../assets/forms/ReferralForm.pdf";
import "../assets/stylesheets/shapes.css";

export const Forms = () => {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1,
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="text-accessbody">
      <div className="bg-dust text-midnight text-xl pt-8 sm:p-8 flex flex-col gap-8">
        <div className="contact-parallelogram bg-sand h-40 sm:h-50 md:h-64 flex flex-col justify-center justify-self-center mx-4 sm:mx-12 shadow-2xl">
          <span className="visually-hidden">
            A decorative parallelogram element, sand color, framing the header
            content.
          </span>
          <h1 className="text-midnight text-5xl sm:text-7xl xl:text-8xl font-accessdisplay font-bold uppercase text-center flex flex-col justify-center items-center">
            Forms
          </h1>
        </div>
        <div className="md:grid md:grid-cols-9">
          <div className="hidden md:col-span-2 md:flex justify-end items-center mr-[12%]">
            <div className="contact-chevron bg-inlet h-0 md:h-44 lg:h-56">
              <span className="visually-hidden">
                A decorative chevron element, big sky blue color, pointing to
                the right.
              </span>
            </div>
          </div>
          <div className="sm:px-8 md:col-span-6 xl:col-span-5 flex flex-col">
            <p className="p-8 pt-0">
              The forms page is currently under construction!
            </p>
            <div className="sm:w-fit self-center p-2 pl-4">
              <div className="flex items-center gap-2 p-2 sm:w-fit">
                <div className="pl-2 flex gap-2 items-center">
                  <ChevronRight size={32} className="text-coral" />
                  <h2>Phone:</h2>
                </div>
                <a href="tel:+19017667500" className="underline">
                  901-766-7500
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-2 p-2 sm:w-fit">
                <div className="pl-2 flex gap-2 items-center">
                  <ChevronRight size={32} className="text-coral" />
                  <h2>Email:</h2>
                </div>
                <a
                  href="mailto:info@mindmattersmemphis.com"
                  className="underline"
                >
                  info@mindmattersmemphis.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-midnight p-8 text-xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl">
          Mind Matters Memphis Patient Forms
        </h2>
        <ul className="sm:pl-4">
          <li className="pl-2 flex gap-2 items-center">
            <ChevronRight size={32} className="text-coral shrink-0" />
            <a href={newPatient} target="_blank" rel="noopener noreferrer" className="underline">
              New Patient Paperwork
            </a>
          </li>
          <li className="pl-2 flex gap-2 items-center">
            <ChevronRight size={32} className="text-coral shrink-0" />
            <a href={roiDisclose} target="_blank" rel="noopener noreferrer" className="underline">
              Release of Information - Disclose
            </a>
          </li>
          <li className="pl-2 flex gap-2 items-center">
            <ChevronRight size={32} className="text-coral shrink-0" />
            <a href={roiObtain} target="_blank" rel="noopener noreferrer" className="underline">
              Release of Information - Obtain
            </a>
          </li>
        </ul>
      </div>
      <div className="text-midnight p-8 text-xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl">Mind Matters Memphis Referral Form</h2>
        <ul className="sm:pl-4 sm:pr-40">
          <li className="pl-2 flex gap-2 items-center">
            <ChevronRight size={32} className="text-coral shrink-0" />
            <a href={referral} target="_blank" rel="noopener noreferrer" className="underline">
              Referral Form
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
