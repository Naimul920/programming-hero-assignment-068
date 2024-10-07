import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {/* <Link><button he >Home</button></Link> */}
      {
        error.status === 404 && <div>
          <h3>Page not found</h3>
          <p>Go back</p>
          <Link to="/" ><button className="btn" >Home</button></Link>
        </div>
      }
    </div>
  )
}
