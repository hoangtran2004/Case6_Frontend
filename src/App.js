import './App.css';
import {Route, Routes} from "react-router-dom";
import HomeUser from "./page/user/Home-user";
import AccessAccount from "./page/Access-account";
import WorkLogin from "./page/company/Work-login";
import AuthLogin from "./page/user/Auth-login";
import WorkRegister from "./page/company/Work-register";
import AuthRegister from "./page/user/Auth-register";
import AuthListJob from "./page/user/Auth-listJob";
import RouterWork from "./router/router-work";
import {HomeWork} from "./page/company/Home-work";
import NavbarWork from "./component/Nav-bar/Navbar-work";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/access-account'} element={<AccessAccount/>}></Route>
                //router user start
                <Route path={'auth/login'} element={<AuthLogin/>}></Route>
                <Route path={'auth/register'} element={<AuthRegister/>}></Route>
                <Route path={'/'} element={<HomeUser/>}>
                    <Route path={''} element={<AuthListJob/>}></Route>
                </Route>
                //router user end

                //router work start
                <Route path={'/work/login'} element={<WorkLogin/>}/>
                <Route path={'/work/register'} element={<WorkRegister/>}/>
                <Route path={'/work/*'} element={<RouterWork/>}>
                    <Route path={''} element={<NavbarWork/>}> </Route>
                    <Route path={''} element={<HomeWork/>}> </Route>
                </Route>
                //router work end
            </Routes>
        </div>
    );
}

export default App;
