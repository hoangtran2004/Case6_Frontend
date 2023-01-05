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
            <div className="row container-listJobWork">
                <div className="col-12 main">
                    <div className="row">
                        {companies?.map((item)=>(
                            <div className="col-4 card-job-work">
                                <div className="row">
                                    <div className="col-2">
                                        <img
                                            src={item?.image}
                                            alt="logo" className="card-logo-work"/>
                                    </div>
                                    <div className="col-8">
                                        <p className="job-description-work">{item?.title}</p>
                                        <p className="companyName-work">{item?.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-description">
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.address}
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