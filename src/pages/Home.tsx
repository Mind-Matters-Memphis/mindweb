import { useEffect } from "react";
import { HomeLanding } from "../components/HomeLanding";
import { HomeServices } from "../components/HomeServices";
import { HomeReferral } from "@/components/HomeReferral";
import { HomeMeet } from "@/components/HomeMeet";
import waiting from "../assets/imgs/WomanAtTable.jpg";

export const Home = () => {
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
    <div className="bg-dust">
      <HomeLanding />
      <div className="bg-dust grid grid-cols-5 md:min-h-96 justify-end relative overflow-visible z-20">
        <div className="hidden sm:block border-l-12 md:border-l-16 border-t-33 border-b-33 border-dust border-l-inlet lg:hidden">
          <span className="visually-hidden">
            A decorative triangle element, inlet color, pointing right at the
            mission statement section.
          </span>
        </div>
        <div className="hidden lg:flex col-span-2 justify-center items-center">
          <img
            src={waiting}
            alt="Adult woman seated at a table, deep in thought."
          />
        </div>
        <div className="mt-4 text-xl p-4 px-8 xl:px-16 flex flex-col gap-4 justify-center xl:items-start max-w-[900px] bg-dust col-span-5 sm:col-start-2 lg:col-start-3 sm:col-span-3 lg:text-2xl lg:text-start lg:mt-10">
          <h2 className="text-inlet text-4xl sm:text-6xl xl:text-7xl font-accessdisplay font-bold uppercase text-center flex flex-col justify-center items-center">
            <span>Optimizing Brain Health</span>
          </h2>
          <p className="text-midnight font-accessbody">
            Mind Matters Memphis provides clinical and forensic
            neuropsychological evaluations for adult patients with stroke, TBI,
            epilepsy, or other neurocognitive concerns. We partner with patients
            to optimize their cognitive wellness.
          </p>
          <p className="text-midnight font-accessbody">
            Referring physicians and therapists can expect a comprehensive
            evaluation and thorough list of recommendations for the patient,
            along with connections to the appropriate resources or local
            organizations.
          </p>
        </div>
      </div>
      <div className="relative min-h-48 bg-dust">
        <div className="absolute top-0 right-0 border-t-[96px] border-t-dust border-b-0 border-r-100w border-r-inlet z-10"></div>
        <div className="absolute bottom-0 left-0 border-b-[96px] border-sage border-t-0 border-l-100w border-l-inlet z-10"></div>
      </div>
      <div className="bg-dust relative">
        <div className="absolute bg-sage w-0 h-0 top-0 left-0 z-0 border-l-[50dvw] border-dust border-r-[50cqw] border-t-25 sm:border-t-12 lg:border-t-25 border-t-sage">
          <span className="visually-hidden">
            A decorative triangle element, sage green color, pointing downward
            at the services section.
          </span>
        </div>
        <div className="relative h-32 sm:h-36 lg:h-64 w-dvw flex justify-center items-start">
          <h2 className="text-midnight uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:py-8 font-accessdisplay font-bold text-center underline decoration-line decoration-midnight decoration-4 z-10">
            What We Offer
          </h2>
        </div>
        <HomeServices />
      </div>
      <HomeMeet />
      <HomeReferral />
    </div>
  );
};
