import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getJob} from "../../service/Job-service";
import ReactPaginate from "react-paginate";
import {useNavigate} from "react-router-dom";

function AuthOtherJob({otherJob}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJob())
    }, []);

    let job = useSelector(state => {
        return state.job.jobCurrent
    });


    return (<div className="col-4">
        <h5><strong>Các công việc khác của công ty</strong></h5>
        {otherJob && otherJob.map((item, index) => {
            let date = item.endDate.split('-').reverse()

            if (job.companyId === item.companyId) {
                return (<div className="card" id='card' style={{marginTop: '40px', marginBottom: "40px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{item?.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item?.nameCity},Việt Nam</h6>

                        <p className="card-text"><img
                            src="https://cdn-icons-png.flaticon.com/128/439/439398.png"
                            alt=""
                            className="icon-description-work"/>{item?.statusTime === 0 ? "Full time" : "Part time"}
                        </p>
                        <hr/>
                        <p className="card-text" ><img
                            src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                            alt=""
                            className="icon-description-work"/>
                            Thời gian hiệu lực : {date[0]}-{date[1]}-{date[2]}
                        </p>

                    </div>
                </div>)
            }
        })}
    </div>);
}

export default function OtherJob({itemPerPage = 3}) {
    const dispatch = useDispatch();
    const [itemOffSet, setItemOffSet] = useState(0);
    const endOffset = itemOffSet + itemPerPage;

    let otherJob = useSelector(state => {
        return state.job.job || []
    });

    const currentItems = otherJob ? otherJob.slice(itemOffSet, endOffset) : [];
    const pageCount = Math.ceil(otherJob.length / itemPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % otherJob.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffSet(newOffset);
    };

    useEffect(() => {
        dispatch(getJob())
    }, []);

    return (<>
        <AuthOtherJob otherJob={currentItems}/>

    </>)
}