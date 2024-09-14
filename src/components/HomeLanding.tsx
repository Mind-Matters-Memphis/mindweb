// import profiles from "../assets/imgs/Profiles.jpg"
import waiting from "../assets/imgs/WomanAtTable.jpg"

export const HomeLanding = () => {
  return ( 
    <div className="bg-midnight w-full h-1/4 font-accessbody grid grid-cols-5">
      <div className="col-start-1 col-span-3 self-center justify-self-center">
        <h1 className="text-4xl flex flex-col gap-2">
          <span className="font-extrabold font-accessdisplay">Mind Matters Memphis</span>
          <span>Adult Clinical and</span>
          <span>Forensic Neuropsychology</span>
        </h1>
      </div>
      <div className="col-start-4 col-span-2 inherit">
        <img src={waiting} alt="profiles" className="h-[32rem] w-full object-cover"/>
      </div>
    </div>
  );
}