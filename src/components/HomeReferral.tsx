
export const HomeReferral = () => {
  return ( 
    <div className="bg-dust flex justify-center p-8">
      <div className="text-midnight max-w-[720px] h-96 bg-dust p-8 grid justify-center relative border-midnight border-l-8 border-b-8 rounded-bl-xl">
        <h2 className="text-2xl text-center lg:text-4xl xl:text-6xl font-altdisplay font-bold uppercase">Refer a Patient</h2>
        <p>We welcome referrals from medical professionals for patients with epilepsy, traumatic brain injury, stroke, neurovascular accidents, non-epileptic seizures, and pre-surgical evaluations.</p>
        <p>Please complete the referral form and fax it - along with patient records - to (901)-766-7550.</p>
        <button className="bg-dust/80 font-bold text-2xl p-4 pl-8 pr-12 rounded-lg transition-all ease-in-out duration-200 relative shadow-md lg:before:absolute lg:before:bottom-[30%] lg:before:left-[50%] lg:before:h-[3px] lg:before:w-0 lg:before:origin-center lg:before:rounded-sm lg:before:bg-coral lg:before:transition-all lg:before:duration-300 lg:before:ease-in-out lg:before:content-[''] lg:hover:before:left-[25%] lg:hover:before:w-[60%] lg:active:left-[1px] lg:active:top-[2px] lg:active:shadow-none xl:mx-4">Download Referral Form</button>
      </div>
    </div>
  );
}