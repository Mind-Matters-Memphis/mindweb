import { ServiceBlock } from "./ServiceBlock";
export const HomeServices = () => {
  return ( 
    <div className="grid grid-rows-3 h-dvh">
      <ServiceBlock />
      <ServiceBlock invert />
      <ServiceBlock />
    </div>
  );
}