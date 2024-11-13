export const HomeReferral = () => {
  return (
    <div className="bg-dust flex justify-center p-4 sm:p-8">
      <div className="text-midnight bg-dust p-4 grid gap-4 justify-center relative rounded-bl-xl text-xl max-w-[500px] md:gap-8 md:max-w-[800px]">
        <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-accessdisplay font-bold uppercase">
          Refer a Patient
        </h2>
        <p>
          We welcome referrals from medical professionals for patients with
          epilepsy, traumatic brain injury, stroke, neurovascular accidents,
          non-epileptic seizures, and pre-surgical evaluations.
        </p>
        <p>
          Please complete the referral form and fax it - along with patient
          records - to (901) 766-7550.
        </p>
        <button className="bg-dust/80 font-bold font-accessbold text-2xl p-4 m-4 sm:p-6 sm:px-12 border-2 border-midnight w-fit h-fit justify-self-center rounded-lg transition-all ease-in-out duration-200 relative shadow-md before:absolute before:bottom-[27.5%] before:left-[50%] before:h-[3px] before:w-0 before:origin-center before:rounded-sm before:bg-coral before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:before:left-[13%] hover:before:w-[74%] active:left-[1px] active:top-[2px] active:shadow-none">
          Download Referral Form
        </button>
      </div>
    </div>
  );
};
