type Props = {
  invert?: boolean;
}
export const ServiceBlock = ({ invert }: Props) => {
  const col1 = invert ? " col-start-2" : " col-start-1";
  const col2 = invert ? " col-start-1" : " col-start-3";

  // add title
  // add description
  // add link to service page
  // add abstract art?

  return ( 
    <div className="grid grid-cols-3">
      <div className={"bg-sage col-span-2 row-start-1" + col1}>
        
      </div>
      <div className={"bg-inlet row-start-1" + col2}>

      </div>
    </div>
  );
}