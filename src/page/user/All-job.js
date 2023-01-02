import {useSelector} from "react-redux";

export default function AllJob() {
    let jobs = useSelector((state) => {
        return state.job.job
    })
    return (
        <>
            {
                jobs === undefined ? <></> :
                    jobs.map((item) => (
                        <>
                            <div className="container-listJob">
                                <div className="row">
                                    <div className="col-9 main">
                                        <div className="row">
                                            <div className="col-5 card-job">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img
                                                            src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(2068).png"
                                                            alt="logo" className="card-logo"/>
                                                    </div>
                                                    <div className="col-7" style={{marginLeft: "15px"}}>
                                                        <p className="job-description">{item.title} </p>
                                                        <p className="companyName">{item.name} </p>
                                                    </div>
                                                    <div className="col-3">
                                                        <img src={item.image}
                                                             alt=""
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
                                                            <div className="description"><img
                                                                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                                alt=""
                                                                className="icon-description"/>{item.addressWork}
                                                            </div>
                                                            <div className="description"><img
                                                                src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                                                                alt=""
                                                                className="icon-description"/>VND {item.wageStart} - {item.wageEnd}
                                                            </div>
                                                            <div className="description"><img
                                                                src="https://cdn-icons-png.flaticon.com/128/639/639394.png"
                                                                alt=""
                                                                className="icon-description"/>{item.experience} năm
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row" style={{marginTop: '23px'}}>
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
                            </div>
                        </>
                    ))
            }
        </>
    )
}