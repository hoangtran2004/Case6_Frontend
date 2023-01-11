import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getJob} from "../../service/Job-service";
import '../../style/Auth-home.css'
import {useNavigate} from "react-router-dom";
import ReactPaginate from "react-paginate";

function AllJob({currentJob}) {
    const navigate = useNavigate()
    const tokenUser = localStorage.getItem('token');
    const detailJob = ({id}) => {
        navigate('job-detail/' + id)
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency', currency: 'VND',
    });

    return (
        <div>
            <div className="container-listJob" style={{marginTop: '-1.9%'}}>
                <div className="row">
                    <div className="col-12 main">
                        <div className="row">
                            {
                                currentJob && currentJob.map((item) => {
                                        let date = item.endDate.split('-').reverse()
                                        return (
                                            <div className="col-5 card-job" onClick={() => {
                                                detailJob({id: item?.jobId})
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
                                                                className="icon-description"/>{item.experience === 0 ? "Dưới 1 năm" : item.experience === 1 ? "Từ 1-3 năm" : item.experience === 2 ? "Từ 3-5 năm" : "Trên 5 năm"}
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
                                                            }}/>Thời gian hiệu lực : {date[0]}-{date[1]}-{date[2]}

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default function JobPerPage({itemPerPage = 6}) {
    const [itemOffSet, setItemOffSet] = useState(0);
    let dispatch = useDispatch();
    const endOffset = itemOffSet + itemPerPage;
    let jobs = useSelector((state) => {
        return state.job.job
    });
    const currentItems = jobs.slice(itemOffSet, endOffset);
    const pageCount = Math.ceil(jobs.length / itemPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % jobs.length;
        setItemOffSet(newOffset);
        document.getElementById('s').scroll({top: 0, behavior: 'smooth'});
    };
    useEffect(() => {
        dispatch(getJob())
    }, []);

    return (
        <>
            <AllJob currentJob={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null} className={'pagination-job'}
            />
        </>
    );
}