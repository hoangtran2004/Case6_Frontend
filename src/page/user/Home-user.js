import React from 'react';
import NavbarHome from "../../component/Nav-bar/Navbar-home";
import {Outlet} from "react-router-dom";
function HomeUser() {
    return (
       <div className='container-fluid'>
           <div className='row'>
               <div className='col-12'>
                   <NavbarHome></NavbarHome>
                   <Outlet></Outlet>
               </div>
           </div>
       </div>

    );
}

export default HomeUser;
