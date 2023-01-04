import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getJob} from "../../service/Job-service";
import '../../style/Auth-home.css'
export default function AllJob() {

    const dispatch = useDispatch()

    let work = JSON.parse(localStorage.getItem('work'))
    console.log(work)

    let jobs = useSelector((state) => {
        console.log(state)
        return state.job.job
    })

    useEffect(() => {

        dispatch(getJob())
    }, [])
    return (
        <div>
            <div className="container-listJob" style={{marginTop: '-1.9%'}}>
                <div className="row">
                    <div className="col-12 main">
                        <div className="row">
                            {jobs === undefined ? <></> :
                                jobs.map((item) => {
                                        if (item.status === 0) {
                                            return (
                                                <div className="col-5 card-job">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <img src="https://cdn.dribbble.com/users/60166/screenshots/17610068/media/4cbea5351f3f12a22dfb63c04658196d.jpg?compress=1&resize=400x300&vertical=top" alt="" className={'card-logo'}/>

                                                        </div>
                                                        <div className="col-7" style={{marginLeft: "15px"}}>
                                                            <p className="job-description">{item.title} </p>
                                                            <p className="companyName">{item.name} </p>
                                                        </div>
                                                        <div className="col-3">

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
                                            )
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




