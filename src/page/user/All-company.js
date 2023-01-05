import React, {useEffect} from 'react';
import '../../style/Work-list-job.css'
import AuthSearchCompany from "./Auth-searchCompany";
import {useDispatch, useSelector} from "react-redux";
import {getCompany} from "../../service/Work-service";
function AllCompany() {
    const dispatch = useDispatch();


    let companies = useSelector(state => {
        console.log(state)
        return state.work.work.company

    });
    useEffect(() => {
        dispatch(getCompany())
    }, [])

    return (

        <>
            <AuthSearchCompany></AuthSearchCompany>
            <div className="row container-listJobWork" style={{marginTop:'-1%'}}>
                <div className="col-12 main">
                    <div className="row">
                        {companies?.map((item)=>(
                            <div className="col-5 card-job-work">
                                <div className="row">
                                    <div className="col-2">
                                        <img
                                            src={item?.image}
                                            alt="logo" className="card-logo-work"/>
                                    </div>
                                    <div className="col-8">
                                        <p className="job-description-work">{item?.name}</p>
                                        <p className="companyName-work"></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-description" style={{marginTop:'5%'}}>
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.nameCity}
                                            </div>
                                            <div className="work-description" style={{marginTop:'1%'}}><img
                                                src="https://cdn-icons-png.flaticon.com/128/3296/3296467.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.email}
                                            </div>
                                            <div className="work-description" style={{marginBottom:'5%',marginTop:'2%'}}><img
                                                src="https://cdn-icons-png.flaticon.com/128/126/126509.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.phoneNumber}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default AllCompany;
