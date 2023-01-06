import React, {useEffect} from 'react';
import AuthSearchCompany from "./Auth-searchCompany";
import {useDispatch, useSelector} from "react-redux";
import {getTopCompany} from "../../service/Work-service";
import {useNavigate} from "react-router-dom";

function TopCompany(props) {

    const dispatch = useDispatch();
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(getTopCompany())
    },[])

    const topCompany = useSelector(state => {
        console.log(state)
        return state.work.work.company
    })
    const detailCompany = ({id}) => {
        console.log(id)
        navigate('/detail-company/' + id)
    }

    return (
        <>
            <AuthSearchCompany></AuthSearchCompany>
            <div className="row container-listJobWork" style={{marginTop:"-1.5%"}}>
                <div className="col-12 main">
                    <div className="row">
                        {topCompany&&topCompany.map((item)=>(
                            <div className="col-4 card-job-work">
                                <div className="row">
                                    <div className="col-2">
                                        <img
                                            src={item?.image}
                                            alt="logo" className="card-logo-work" onClick={()=>{
                                                detailCompany({id:item?.companyId})
                                        }}/>
                                    </div>
                                    <div className="col-8">
                                        <p className="job-description-work">{item?.name}</p>
                                        <p className="companyName-work">{item?.email}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="job-description-work"></p>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-description">
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.nameCity}
                                            </div>
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/9332/9332901.png"
                                                alt=""
                                                className="icon-description-work"/>{item?.phoneNumber}
                                            </div>
                                            <div className="work-description"><img
                                                src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                                alt=""
                                                className="icon-description-work"/>Nhu cầu tuyển dụng :{item?.total} nhân sự

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">

                                    </div>
                                </div>
                                <div className="row" style={{marginTop: '15px'}}>
                                    <div className="col-12">
                                        <p style={{fontSize: '12px'}}><img
                                            src=""
                                            alt=""
                                            style={{
                                                width: '12px',
                                                height: '12px',
                                                objectFit: 'cover',
                                                marginRight: '5px'
                                            }}/></p>
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

export default TopCompany;