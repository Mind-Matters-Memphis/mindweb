import { useRouteError } from "react-router-dom";


export const Error = () => {
  const error = useRouteError();
  const errorMessage = (error as { statusText?: string, message?: string });

  return ( 
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p><i>{errorMessage.statusText || errorMessage.message}</i></p>
    </div>
  );
}