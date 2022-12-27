import './App.css';
import {Route, Routes} from "react-router-dom";
import HomeUser from "./page/user/Home-user";
import AccessAccount from "./page/Access-account";
import WorkLogin from "./page/company/Work-login";
import AuthLogin from "./page/user/Auth-login";
import WorkRegister from "./page/company/Work-register";

function App() {
  return (
    <div>
        <Routes>
            <Route path={'auth/login'} element={<AuthLogin/>}></Route>
            <Route path={''} element={<HomeUser/>}>
                <Route path={'access-account'} element={<AccessAccount/>}></Route>
                <Route path={'work/login'} element={<WorkLogin/>}></Route>
                {/*<Route path={'auth/login'} element={<AuthLogin/>}></Route>*/}
                <Route path={'work/register'} element={<WorkRegister/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
