import { Link } from "react-router-dom";

export default function Home (){
    return (
        <>
        <Link className="btn btn-secondary m-3" to="/admin">Go to admin page</Link>
        <Link className="btn btn-secondary m-3"to="/shop">go to shop page</Link>
        <Link className="btn btn-secondary m-3"to="/aadmin">go to aadmin</Link>
   
        </>
    )
}