import logo from "../assets/imgs/logo/logoColor.png"

export const HomeLanding = () => {
  return ( 
    <div className="bg-sand w-full h-1/4 font-accessbody grid grid-cols-5">
      <div className="col-span-5 lg:col-start-2 lg:col-span-3 self-center justify-self-center pt-4 pb-6 md:py-12 md:max-w-[800px] xl:max-w-[1000px]">
        <img src={logo} className="h-fit w-fit object-cover px-2 py-6 sm:px-8 sm:py-8"></img>
        <h1 className="text-xl sm:text-3xl xl:text-4xl flex flex-col gap-2 items-center text-midnight">
          <span>Adult Clinical & Forensic Evaluations</span>
        </h1>
      </div>
    </div>
  );
}