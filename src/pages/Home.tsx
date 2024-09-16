// import { Title } from "../components/HomeTitle";
import { HomeLanding } from "../components/HomeLanding";
// import { HomeChoose } from "../components/HomeChoose";
import { HomeContact } from "../components/HomeContact";
import { HomeServices } from "../components/HomeServices";
import { HomeReferral } from "@/components/HomeReferral";
import { HomeMeet } from "@/components/HomeMeet";

export const Home = () => {
      // background image of initial block
      // Mind Matters Memphis title
      // buttons for Learn More and Contact
      // block for Our Mission
      //

  return ( 
    <div className="bg-dust">
      <HomeLanding />
      <div className="bg-dust grid md:grid-cols-4 md:min-h-96 justify-end relative overflow-visible z-20">
        <div className="h-48 md:h-96 w-48 lg:block lg:h-[768px] lg:w-96 bg-inlet rounded-br-full md:rounded-r-full absolute top-0 left-0 z-20"></div>
        <div className="absolute top-8 right-8 lg:top-3/4 lg:right-2/3">
          <div className="bg-coral h-32 w-32 rounded-full"></div>
        </div>
        <div className="mt-40 md:mt-16 text-2xl p-4 sm:pb-12 flex flex-col gap-4 justify-center sm:col-start-2 lg:col-start-3 sm:col-span-2 lg:text-4xl lg:text-start lg:mt-10">
          <h2 className="text-inlet text-6xl py-4 font-altdisplay font-bold uppercase text-center flex flex-col justify-center"><span>Optimizing </span><span>Brain Health</span></h2>
          <p className="text-midnight font-bold font-accessbody">Mind Matters Memphis provides clinical and forensic neuropsychological evaluations for adult patients with stroke, traumatic brain injury (TBI), epilepsy, or other neurocognitive concerns. We partner with patients to optimize their cognitive wellness.</p>
          <p className="text-midnight font-bold font-accessdisplay">Referring physicians and therapists can expect (insert quote here about process) through the entirety of the patient's care journey. </p>
        </div>
      </div>
      <div className="relative min-h-48 bg-dust">
        <div className="hidden md:block absolute top-0 right-0 border-t-[96px] border-t-dust border-b-inlet border-b-0 border-r-100w border-r-inlet z-10"></div>
        <div className="hidden md:block absolute bottom-0 left-0 border-b-[96px] border-sage border-t-0 border-l-100w border-l-inlet z-10"></div>
      </div>
      <div>
        <h2 className="text-inlet uppercase text-6xl py-16 font-altdisplay font-bold text-center">What We Offer</h2>
        <HomeServices />
      </div>
      <HomeMeet />
      <HomeReferral />
      <HomeContact />
    </div>
  );
}