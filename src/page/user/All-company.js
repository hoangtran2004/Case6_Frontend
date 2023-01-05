import React from 'react';
import '../../style/Work-list-job.css'
import AuthSearchCompany from "./Auth-searchCompany";

function AllCompany() {
    return (
        <>
            <AuthSearchCompany></AuthSearchCompany>
            <div className="row container-listJobWork">
                <div className="col-12 main">
                    <div className="row">
                        <div className="col-4 card-job-work">
                            <div className="row">
                                <div className="col-2">
                                    <img
                                        src=""
                                        alt="logo" className="card-logo-work"/>
                                </div>
                                <div className="col-8">
                                    <p className="job-description-work">aa</p>
                                    <p className="companyName-work">aaaaaa</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-description">
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                            alt=""
                                            className="icon-description-work"/>
                                        </div>
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                                            alt=""
                                            className="icon-description-work"/>a
                                        </div>
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/639/639394.png"
                                            alt=""
                                            className="icon-description-work"/>
                                        </div>
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                            alt=""
                                            className="icon-description-work"/>Số lượng ứng tuyển

                                        </div>
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/535/535245.png"
                                            alt=""
                                            className="icon-description-work"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">

                                </div>
                            </div>
                            <div className="row" style={{marginTop: '15px'}}>
                                <div className="col-12">
                                    <p style={{fontSize: '12px'}}><img
                                        src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png"
                                        alt=""
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            objectFit: 'cover',
                                            marginRight: '5px'
                                        }}/>Thời gian ứng tuyển : 48 giờ </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AllCompany;
