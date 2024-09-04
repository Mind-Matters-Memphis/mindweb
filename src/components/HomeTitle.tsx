import contemplative from "../assets/imgs/Contemplative Woman in Golden Light Full.jpg"
import portrait from "../assets/imgs/ArtFusion.jpg"
import thought from "../assets/imgs/InDeepThought.jpg"
import { Link } from "react-router-dom";
import { IoIosArrowForward as Arrow } from "react-icons/io";

export const Title = () => {
  return ( 
    <div className="h-dvh lg:h-2/3 relative">
      {/* <img src={contemplative} alt="Contemplative Woman, Head in her Hands, in Golden Light" className="h-full object-cover"/> */}
      <div className=" bg-sage w-full grid grid-cols-5">
        <div></div>
        <div className="col-start-3 col-span-3 grid grid-rows-3 relative py-4">
          <img src={contemplative} alt="Contemplative Woman, Head in her Hands, in Golden Light" className="h-64 object-cover rounded-lg shadow-2xl"/>
          <img src={portrait} alt="Contemplative Woman, Head in her Hands, in Golden Light" className="absolute h-80 object-cover top-56 right-20 rounded-2xl shadow-2xl"/>
          <img src={thought} alt="Contemplative Woman, Head in her Hands, in Golden Light" className="h-64 object-cover row-start-3 rounded-lg shadow-xl"/>

        </div>
      </div>
      <div className="absolute top-32 left-4 text-center bg-midnight bg-opacity-85 p-8 px-6 rounded-md">
        <h1 className="text-8xl font-bold text-sand flex gap-4 underline decoration-coral decoration-double pb-4 font-altdisplay flex-col items-start uppercase" title="Mind Matters Memphis">
          <span>Mind</span>
          <span>Matters</span>
          <span>Memphis</span>
        </h1>
        <h2 className="text-4xl font-display p-4">Transforming Cognitive Health</h2>
        <ul className="font-altdisplay text-2xl p-4">
          <li>
            <Arrow className="inline-block text-coral" />
            <Link to="/clinical-neuropsychology">Clinical Neuropsychology</Link>
          </li>
          <li>
            <Arrow className="inline-block text-coral" />
            <Link to="/forensic-evaluations">Forensic Evaluations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}