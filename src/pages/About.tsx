import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeadshotSmall from "../assets/imgs/HeadshotSm.jpeg";

export const About = () => {
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
    <div className="bg-dust text-midnight text-xl font-accessbody">
      <div className="flex flex-col justify-center w-full py-4 about-parallelogram-wrap">
        <div className="about-parallelogram bg-sage h-40 sm:h-48 md:h-64 flex flex-col justify-center items-center justify-self-center mx-4 sm:mx-12 shadow-2xl">
          <span className="visually-hidden">
            A decorative parallelogram element, sage green color, framing the
            header content.
          </span>
          <div className="drop-shadow-lg flex flex-col w-[80%] sm:w-2/3">
            <h1 className="about-parallelogram-lite bg-midnight text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-accessdisplay text-sand h-20 sm:h-24 md:h-32 w-inherit flex items-center justify-center">
              Meet Dr. Gould
            </h1>
          </div>
        </div>
      </div>
      <div className="p-4 grid gap-4 justify-items-center">
        <div className="grid md:grid-cols-2 md:items-center md:max-w-[1024px] md:pt-8">
          <div className="flex justify-center">
            <img
              src={HeadshotSmall}
              alt="Professional headshot image of Dr. Amanda Gould"
              className="alt-img-frame bg-sand h-80 object-cover md:h-96"
            />
          </div>
          <p className="mt-4 md:mt-0 p-4 max-w-[500px] justify-self-center">
            Dr. Gould is a board-certified neuropsychologist in Memphis, TN,
            whose clinical practice focuses on adult patients with epilepsy,
            traumatic brain injury (TBI), stroke, and other neurocognitive
            concerns. She performs neuropsychological evaluations and provides
            her patients with the education and strategies for optimizing their
            brain health.
          </p>
        </div>
        <div className="flex justify-center sm:p-4 sm:px-8 md:p-8 md:pt-16">
          {/* <div className="grid gap-8 sm:p-8 md:grid-cols-3 md:grid-rows-3 md:gap-12 max-w-[1000px] items-center">
            <p className="p-4 rounded-xl sm:rounded-none bg-dust md:col-span-2 border-8 border-sage quote-frame-sage">
              "Having a neurological illness can be associated with limitations
              to daily life. I get to provide patients with individualized plans
              of care to help{" "}
              <span className="italic font-bold">maximize quality of life</span>{" "}
              within their own health context."
            </p>
            <p className="p-4 rounded-xl sm:rounded-none bg-dust md:col-start-2 md:col-span-2 border-8 border-inlet quote-frame-inlet">
              "Neurospychology as a profession shares overlap between
              understanding the whole person, their psychology, and how they
              exist in the world with the more medical and objective test
              results."
            </p>
            <p className="p-4 rounded-xl sm:rounded-none bg-dust md:col-span-2 border-8 border-coral quote-frame-coral">
              "My goal as a healthcare provider is to meet my patients where
              they are and give them a space where they can feel heard,
              especially on the more social & mental health side which can
              traditionally be overlooked in a regular office setting."
            </p>
          </div> */}
          <div className="flex flex-col gap-4 p-4 font-accessitalic italic rounded-md sm:p-8 md:p-12 md:rounded-none max-w-[768px] items-center border-4 md:border-8 bg-dust border-sage quote-frame-sage">
            <p className="">
              <i>
                "Neurospychology as a profession shares overlap between
                understanding the whole person, their psychology, and how they
                exist in the world with the more medical and objective test
                results.
              </i>
            </p>
            <p className="">
              <i>
                "My goal as a healthcare provider is to meet my patients where
                they are and give them a space where they can feel heard,
                especially on the more social & mental health side which can
                traditionally be overlooked in a regular office setting.
              </i>
            </p>
            <p className="">
              <i>
                "Having a neurological illness can be associated with limitations
                to daily life. I get to provide patients with individualized plans
                of care to help{" "}
                <span className="font-accessbold font-bold">maximize quality of life</span>{" "}
                within their own health context."
              </i>
            </p>
            <p className="font-accessdisplay text-2xl self-end mr-4 sm:mr-16">- Dr. Gould</p>
          </div>
        </div>
        <p className="max-w-prose p-4 md:p-8">
          Dr. Gould completed her graduate degree in clinical psychology with a
          specialization in neuropsychology at the University of Memphis, and
          was awarded her PhD in 2016 after completing an internship at the
          University of Kansas School of Medicine-Wichita. She then completed a
          neuropsychology fellowship in the Neurocognitive Assessment Lab at the
          University of Virginia.
        </p>
        <div>
          <p className="max-w-prose p-4 pt-0 md:p-8 md:pt-0">
            Visit our{" "}
            <Link className="underline font-bold font-accessbold" to="/contact#top">
              Contact page
            </Link>{" "}
            for information on how to request an appointment or refer a patient
            to Dr. Gould.
          </p>
        </div>
      </div>
    </div>
  );
};
