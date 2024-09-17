
export const HomeReferral = () => {
  return ( 
    <div className="bg-dust flex justify-center p-8">
      <div className="text-midnight max-w-[720px] h-96 bg-dust p-8 grid justify-center relative rounded-bl-xl">
        <h2 className="text-2xl text-center lg:text-4xl xl:text-6xl font-altdisplay font-bold uppercase">Refer a Patient</h2>
        <p>We welcome referrals from medical professionals for patients with epilepsy, traumatic brain injury, stroke, neurovascular accidents, non-epileptic seizures, and pre-surgical evaluations.</p>
        <p>Please complete the referral form and fax it - along with patient records - to (901)-766-7550.</p>
        <button className="bg-dust/80 font-bold text-2xl p-4 px-8 border-2 border-midnight w-fit h-fit justify-self-center rounded-lg transition-all ease-in-out duration-200 relative shadow-md lg:active:left-[1px] lg:active:top-[2px] lg:active:shadow-none">Download Referral Form</button>
      </div>
    </div>
  );
}