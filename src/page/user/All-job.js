import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getJob} from "../../service/Job-service";
import '../../style/Auth-home.css'
import {useNavigate} from "react-router-dom";

export default function AllJob() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let jobs = useSelector((state) => {
        return state.job.job
    })

    const tokenUser = localStorage.getItem('token');
    const detailJob = ({id}) => {
        console.log(id)
        navigate('job-detail/' + id)
    }

    useEffect(() => {
        dispatch(getJob())
    }, [])

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency', currency: 'VND',
    });
    return (
        <div>
            <div className="container-listJob" style={{marginTop: '-1.9%'}}>
                <div className="row">
                    <div className="col-12 main">
                        <div className="row">
                            {jobs === undefined ? <></> :
                                jobs.map((item) => {

                                            return (
                                                <div className="col-5 card-job" onClick={()=>{
                                                    detailJob({id:item?.jobId})
                                                }}>
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <img src={item.image} alt="" className={'card-logo'}/>

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
                                                                    src="https://cdn-icons-png.flaticon.com/128/3850/3850259.png"
                                                                    alt=""
                                                                    className="icon-description"/>{item?.nameCategory}
                                                                </div>
                                                                <div className="description"><img
                                                                    src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                                    alt=""
                                                                    className="icon-description"/>{item?.nameCity}
                                                                </div>
                                                                {tokenUser ? <div className="description"><img
                                                                    src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                                                                    alt=""
                                                                    className="icon-description"/>VND {formatter.format(item.wageStart)} - {formatter.format(item.wageEnd)}
                                                                </div> : <></>}

                                                                <div className="description"><img
                                                                    src="https://cdn-icons-png.flaticon.com/128/639/639394.png"
                                                                    alt=""
                                                                    className="icon-description"/>{item.experience}
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
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}




