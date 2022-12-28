import './App.css';
import {Route, Routes} from "react-router-dom";
import HomeUser from "./page/user/Home-user";
import AccessAccount from "./page/Access-account";
import WorkLogin from "./page/company/Work-login";
import AuthLogin from "./page/user/Auth-login";
import WorkRegister from "./page/company/Work-register";
import AuthRegister from "./page/user/Auth-register";
import AuthListJob from "./page/user/Auth-listJob";
function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<HomeUser/>}>
                    <Route path={''} element={<AuthListJob/>}></Route>
                    <Route path={'access-account'} element={<AccessAccount/>}></Route>
                </Route>
                <Route path={'work/company'} element={<WorkLogin/>}></Route>
                <Route path={'work/register'} element={<WorkRegister/>}/>
                <Route path={'auth/company'} element={<AuthLogin/>}></Route>
                <Route path={'auth/register'} element={<AuthRegister/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
