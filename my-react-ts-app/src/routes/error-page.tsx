import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Opa!</h1>
      <p>Um erro inesperado aconteceu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
