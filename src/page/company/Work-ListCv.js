import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCv} from "../../service/Cv-service";
import {findJobWithId} from "../../service/Job-service";
import '../../style/Work-home.css'
export default function WorkListCv() {
    let idJob = useParams().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCv(idJob))
        dispatch(findJobWithId(idJob))
    }, []);
    let allCV = useSelector(state => {
        return state.cv.cvFind
    })
    let currentJob = useSelector(state => {
        console.log(state, 11111111)
        return state.job.jobFindWithId
    })
    return (
        <>
            <div className="row" style={{marginTop: '4%'}}>
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên người dùng</th>
                            <th scope="col">Email</th>
                            <th scope="col">SĐT</th>
                            <th scope="col">Công việc ứng tuyển</th>
                            <th scope="col">Sơ yếu lí lịch</th>
                        </tr>
                        </thead>
                        {allCV && allCV.map((item, index) => (
                            <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phone}</td>
                                <td>{currentJob?.title}</td>
                                <td>
                                    <a href={item?.image} target={'_blank'}>
                                        <p id={'text'}>{item?.cv_des}</p>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        ))}

                    </table>

                </div>
            </div>
        </>
    )
}