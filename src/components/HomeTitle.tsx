import contemplative from "../assets/imgs/Contemplative Woman in Golden Light Full.jpg"
import { Link } from "react-router-dom";
import { IoIosArrowForward as Arrow } from "react-icons/io";

export const Title = () => {
  return ( 
    <div className="h-dvh lg:h-2/3 relative">
      <img src={contemplative} alt="Contemplative Woman, Head in her Hands, in Golden Light" className="h-full object-cover"/>
      <div className="absolute top-4 left-4 text-center bg-midnight bg-opacity-75 p-4 px-6 rounded-md">
        <h1 className="text-4xl font-bold text-sand flex gap-2 underline decoration-coral decoration-double" title="Mind Matters Memphis">Mind Matters Memphis</h1>
        <ul>
          <li>
            <Arrow className="inline-block text-coral" />
            <Link to="/clinical-neuropsychology">Clinical Neuropsychology</Link>
          </li>
          <li>
            <Arrow className="inline-block text-coral" />
            <Link to="/forensic-psychology">Forensic Psychology</Link>
          </li>
        </ul>
      </div>
      {/* <div className="text-center bg-dust bg-opacity-25 z-10">
        <h1 className="text-5xl font-bold text-white flex flex-col gap-4 items-start" title="Mind Matters Memphis">
          <span>Mind</span>
          <span className="pl-8">Matters</span>
          <span className="pl-16">Memphis</span>
        </h1>
      </div> */}
    </div>
  );
}