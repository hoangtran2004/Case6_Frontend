import React from 'react';
import '../../style/Work-list-job.css'

function WorkListJob(props) {
    return (
        <div className="container-listJobWork">
            <div className="row">
                <div className="col-12 main">
                    <div className="row">
                        <div className="col-4 card-job-work">
                            <div className="row">
                                <div className="col-1">
                                    <img src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(2068).png"
                                         alt="logo" className="card-logo-work"/>
                                </div>
                                <div className="col-7">
                                    <p className="job-description-work">hthththth</p>
                                    <p className="companyName-work">rgrgrgrgr</p>
                                </div>
                                <div className="col-3">
                                    <img src="https://cdn-icons-png.flaticon.com/128/3199/3199306.png" alt=""
                                         style={{
                                             height: '80px',
                                             width: '80px',
                                             objectFit: "cover",
                                             marginLeft: '30px',
                                             marginTop: '21px'
                                         }}/>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-description">
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png" alt=""
                                            className="icon-description-work"/>fgnfgngfg
                                        </div>
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png" alt=""
                                            className="icon-description-work"/>VND
                                        </div>
                                        <div className="work-description"><img
                                            src="https://cdn-icons-png.flaticon.com/128/639/639394.png" alt=""
                                            className="icon-description-work"/>tỵytyj
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p><img
                                        src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png" alt=""
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
        </div>
    );
}

export default WorkListJob;
