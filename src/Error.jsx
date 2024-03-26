import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      
      <div id="error-page" className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-bold text-4xl">Oops!</h1>
        <h2 className=" font-bold text-2xl">not found page</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
};

export default Error;