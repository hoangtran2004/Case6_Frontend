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
import WorkAddJob from "./page/company/Work-addJob";
import WorkEditInformation from "./page/company/Work-editInformation";
import WorkListJob from "./page/company/Work-list-job";
import WorkEditJob from "./page/company/Work-editJob";
import SearchJob from "./page/user/Search-job";
import AllJob from "./page/user/All-job";
import AuthJobDetail from "./page/user/Auth-jobDetail";
import AllCompany from "./page/user/All-company";
import TopCompany from "./page/user/Top-company";
import AuthCompanyDetail from "./page/user/Auth-companyDetail";
import {Cv} from "./page/cv/Cv";
import JobPerPage from "./page/user/All-job";
import CompanyPerPage from "./page/user/All-company";
import WorkListCv from "./page/company/Work-ListCv";
import JobSearchedPerPage from "./page/user/Search-job";
import {useEffect} from "react";
import OtherJob from "./page/user/Auth-other-job";
function App() {
    return (<div>
            <Routes>
                <Route path={'test-job'} element={<AccessAccount/>}></Route>

                <Route path={'/access-account'} element={<AccessAccount/>}></Route>
                //router user start
                <Route path={'auth/login'} element={<AuthLogin/>}></Route>
                <Route path={'auth/register'} element={<AuthRegister/>}></Route>

                <Route path={'/'} element={<HomeUser/>}>
                    <Route path={'companies'} element={<CompanyPerPage itemPerPage={6}></CompanyPerPage>}/>
                    <Route path={'job-detail/:id'} element={<AuthJobDetail></AuthJobDetail>}>
                        <Route path={''} element={<OtherJob otherJob={4}></OtherJob>}/>
                    </Route>
                    <Route path={'top-work'} element={<TopCompany></TopCompany>}/>
                    <Route path={'detail-company/:id'} element={<AuthCompanyDetail/>}></Route>
                    <Route path={"/my-cv"} element={<Cv/>}></Route>
                    <Route path={'/'} element={<AuthListJob/>}>
                        <Route path={''} element={<JobPerPage itemPerPage={6}/>}></Route>
                        <Route path={'search'} element={<JobSearchedPerPage itemPerPage={6}></JobSearchedPerPage>}/>
                    </Route>
                </Route>
                //router user end

                //router work start
                <Route path={'/work/login'} element={<WorkLogin/>}/>
                <Route path={'/work/register'} element={<WorkRegister/>}/>
                <Route path={'/work/*'} element={<RouterWork/>}>
                    <Route path={''} element={<WorkListJob/>}></Route>
                    <Route path={'add-job'} element={<WorkAddJob/>}></Route>
                    <Route path={'edit-company-information/:id'} element={<WorkEditInformation/>}></Route>
                    <Route path={'edit-job/:id'} element={<WorkEditJob/>}></Route>
                    <Route path={'list-cv/:id'} element={<WorkListCv/>}></Route>
                </Route>
                //router work end
            </Routes>
        </div>);
}

export default App;
