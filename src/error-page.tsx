import { useRouteError } from "react-router-dom";

interface ErrorProps {
  data?: string;
  status?: number;
  internal?: boolean;
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const typedError = error as ErrorProps; // Cast the error to your ErrorProps interface

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{typedError.statusText || typedError.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
