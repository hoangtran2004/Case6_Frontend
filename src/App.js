import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/Home";
import AccessAccount from "./page/Access-account";
import WorkLogin from "./page/Work-login";
import AuthLogin from "./page/Auth-login";
import WorkRegister from "./page/Work-register";

function App() {
  return (
    <div>
        <Routes>
            <Route path={''} element={<Home/>}>
                <Route path={'access-account'} element={<AccessAccount/>}></Route>
                <Route path={'work/login'} element={<WorkLogin/>}></Route>
                <Route path={'auth/login'} element={<AuthLogin/>}></Route>
                <Route path={'work/register'} element={<WorkRegister/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
