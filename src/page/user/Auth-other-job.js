import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getJob} from "../../service/Job-service";
import {useNavigate, useParams} from "react-router-dom";
import {workById} from "../../service/Work-service";

function AuthOtherJob({otherJob}) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const detailJob = ({id}) => {
        navigate('/job-detail/' + id)
    }
    useEffect(() => {
        dispatch(getJob())
    }, []);


    let job = useSelector(state => {
        console.log('state job', state)
        return state.job.jobCurrent
    });

    return (
        <div className="col-4">
            <h6>Các công việc khác của công ty</h6>
            {otherJob && otherJob.map((item, index) => {
                if (job.companyId === item.companyId) {
                    return (
                        <div className="card" id='card' style={{marginTop: '40px', marginBottom: "40px"}}
                             onClick={() => {
                                 detailJob({id: item?.jobId})

                             }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{item?.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{item?.nameCity},Việt Nam</h6>

                                <p className="card-text"><img
                                    src="https://cdn-icons-png.flaticon.com/128/439/439398.png"
                                    alt=""
                                    className="icon-description-work"/>{item?.statusTime === 0 ? "Full time" : "Part time"}
                                </p>
                                <p className="card-text"><img
                                    src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                    alt=""
                                    className="icon-description-work"/>
                                    <a href="#" className="card-link">Số lượng ứng tuyển
                                        :{item?.applicants}</a>
                                </p>

                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default function OtherJob({itemPerPage = 3}) {
    const dispatch = useDispatch();
    const [itemOffSet, setItemOffSet] = useState(0);
    const endOffset = itemOffSet + itemPerPage;

    let otherJob = useSelector(state => {
        console.log(state)
        return state.job.job || []
    });

    const currentItems = otherJob ? otherJob.slice(itemOffSet, endOffset) : [];
    console.log(currentItems)
    const pageCount = Math.ceil(otherJob.length / itemPerPage);
    console.log(pageCount)
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % otherJob.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffSet(newOffset);
    };

    useEffect(() => {
        dispatch(getJob())
    }, []);

    return (
        <>
            <AuthOtherJob otherJob={currentItems}/>

        </>
    )
}