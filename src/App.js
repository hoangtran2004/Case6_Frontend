import {Route, Routes} from "react-router-dom";
import AuthLogin from "./pages/login/Auth-login";
function App() {
  return (
    <>
   <Routes>
       <Route path={'login'} element={<AuthLogin/>}></Route>
   </Routes>
    </>
  );
}

export default App;
