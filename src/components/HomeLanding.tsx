import profiles from "../assets/imgs/Profiles.jpg"

export const HomeLanding = () => {
  return ( 
    <div className="bg-midnight w-full h-1/4 font-accessbody grid grid-cols-5">
      <div className="col-start-1 col-span-3 self-center justify-self-center">
        <h1 className="text-4xl flex flex-col gap-2">
          <span>Empowering your</span>
          <span className="font-extrabold font-accessdisplay">Cognitive Health Journey</span>
          <span>with Expert, Individualized Care</span>
        </h1>
      </div>
      <div className="col-start-4 col-span-2 inherit">
        <img src={profiles} alt="profiles" className="h-[32rem] w-full object-cover"/>
      </div>
    </div>
  );
}