import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import logo from "../assets/imgs/logo/logoColor.png"


export const Error = () => {
  const error = useRouteError();
  const errorMessage = (error as { statusText?: string, message?: string });

  return ( 
    <div className="bg-dust text-midnight font-accessbody">
      <Nav />
      <div className="p-4 sm:mt-10 md:mt-24">
        <div className="flex justify-center">
          <img src={logo} alt="" className="px-12 sm:max-w-96"/>
        </div>
        <div className="flex justify-center items-center pt-6">
          <ErrorIcon className="h-24 w-24 md:h-36 md:w-36 md:m-6 text-coral" />
          <h1 className="text-4xl md:text-6xl font-accessdisplay text-inlet">Oops!</h1>
        </div>
        <div className="text-center py-4">
          <p className="text-2xl md:text-4xl">Sorry, an unexpected error occurred.</p>
          <p className="pt-2 sm:text-2xl"><i>{errorMessage.statusText || errorMessage.message}</i></p>
        </div>
        <div className="p-4 pb-8 sm:p-12 flex justify-center">
          <Link to="/" className="p-4 px-8 sm:p-6 sm:px-10 transition-all duration-500 ease-in-out border-4 border-inlet font-semibold text-2xl rounded-lg shadow-lg relative active:left-[1px] active:top-[2px] active:shadow-none">Return to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}