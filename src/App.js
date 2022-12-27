import {Route, Routes} from "react-router-dom";
import LoginUser from "./pages/login/LoginUser";
function App() {
  return (
    <>
   <Routes>
       <Route path={'login'} element={<LoginUser/>}></Route>
   </Routes>
    </>
  );
}

export default App;
