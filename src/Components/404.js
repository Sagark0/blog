import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="404">
            <h2>Sorry </h2>
            <p> This Page doesnt exist</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;