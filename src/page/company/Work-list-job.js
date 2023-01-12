import React, {useEffect, useState} from 'react';
import '../../style/Work-list-job.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteJob, getJob, lockJob} from "../../service/Job-service";
import Banner from "../../component/Banner";
import {useNavigate} from "react-router-dom";
import {findJobByIdWork} from "../../service/Work-service";
import Swal from 'sweetalert2'
import ReactPaginate from "react-paginate";

function WorkListJob({currentJobs}) {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const detailJob = ({id}) => {
        navigate('list-cv/' + id)
    }


    const formEdit = ({id}) => {
        navigate('edit-job/' + id)
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <>
            <Banner></Banner>
            <div className="row container-listJobWork">
                <div className="col-12 main">
                    <div className="row">
                        {
                            currentJobs && currentJobs?.map((item, index) => {
                                let date = item.endDate.split('-').reverse()

                                return (
                                    <div className="col-4 card-job-work">
                                        <div className="row">
                                            <div className="col-2">
                                                <img
                                                    src={item?.image}
                                                    alt="logo" className="card-logo-work"/>
                                            </div>
                                            <div className="col-8" onClick={() => {
                                                detailJob({id: item.jobId})
                                            }} style={{cursor: 'pointer'}}>
                                                <p className="job-description-work">{item?.title}</p>
                                                <p className="companyName-work">{item?.nameCategory}</p>
                                            </div>
                                            <div className="col-2" style={{marginLeft: '-1rem'}}>
                                                <img src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                                                     alt="" style={{
                                                    height: '20px',
                                                    width: '20px',
                                                    objectFit: "cover",
                                                    marginLeft: '25px',
                                                    marginTop: '21px',
                                                    cursor: 'pointer'
                                                }} data-toggle="dropdown" aria-expanded="false" id={'a'}/>

                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button className="dropdown-item" type="submit" onClick={() => {
                                                        Swal.fire({
                                                            title: 'Bạn có chắc?',
                                                            text: "Dữ liệu sẽ không thể khôi phục!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#d33',
                                                            cancelButtonColor: '#3085d6',
                                                            confirmButtonText: 'Xóa',
                                                            cancelButtonText: 'Hủy'
                                                        }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                dispatch(deleteJob({id: item?.jobId}))
                                                                Swal.fire(
                                                                    'Đã xóa!',
                                                                    'Bài tuyển dụng của bạn đã được xóa.',
                                                                    'success'
                                                                )
                                                                dispatch(getJob())
                                                            }
                                                        })
                                                    }}>Xóa
                                                    </button>
                                                    <button className="dropdown-item" type="submit"
                                                            onClick={(id) => {
                                                                formEdit({id: item?.jobId})
                                                            }}>Sửa

                                                    </button>
                                                    <button className="dropdown-item" type="submit" onClick={() => {
                                                        dispatch(lockJob({id: item?.jobId}))
                                                        dispatch(getJob())
                                                    }}>Đóng/mở
                                                    </button>
                                                </div>

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
                                                        src="https://cdn-icons-png.flaticon.com/128/2454/2454282.png"
                                                        alt=""
                                                        className="icon-description-work"/>{formatter.format(item.wageStart)} - {formatter.format(item.wageEnd)}
                                                    </div>
                                                    <div className="work-description"><img
                                                        src="https://cdn-icons-png.flaticon.com/128/639/639394.png"
                                                        alt=""
                                                        className="icon-description-work"/>{item.experience === 0 ? "Dưới 1 năm" : item.experience === 1 ? "Từ 1-3 năm" : item.experience === 2 ? "Từ 3-5 năm" : "Trên 5 năm"}
                                                    </div>
                                                    <div className="work-description"><img
                                                        src="https://cdn-icons-png.flaticon.com/128/3885/3885079.png"
                                                        alt=""
                                                        className="icon-description-work"/>Số lượng ứng tuyển
                                                        : {item?.applicants}
                                                    </div>
                                                    <div className="work-description"><img
                                                        src="https://cdn-icons-png.flaticon.com/128/535/535245.png"
                                                        alt=""
                                                        className="icon-description-work"/>{item?.status === 0 ? "Đang mở" : "Đã đóng"}
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
                                                    }}/>Thời gian hiệu lực {date[0]}-{date[1]}-{date[2]} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default function JobCompanyPerPage({itemPerPage = 9}) {
    const [itemOffSet, setItemOffSet] = useState(0);
    let dispatch = useDispatch();
    let item = JSON.parse(localStorage.getItem('work'));
    let companyId = item.company.companyId;
    const endOffset = itemOffSet + itemPerPage;
    let job = useSelector(state => {
        console.log(state)
        return state.job.jobEnd
    });
    const currentItems = job.slice(itemOffSet, endOffset);
    const pageCount = Math.ceil(job.length / itemPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % job.length;
        setItemOffSet(newOffset);
        window.scrollTo({top: 0, behavior: 'smooth'})
    };
    useEffect(() => {
        dispatch(getJob())
        dispatch(findJobByIdWork(companyId))
    }, []);
    return (
        <>
            <WorkListJob currentJobs={currentItems}/>
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
    )

}
