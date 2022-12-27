import {Link} from "react-router-dom";

export default function LoginNavbar() {
    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Bootstrap
                </a>
                <Link to="access-account">Login</Link>
            </nav>
            <div className="row"></div>
        </>
    )
}