import '../../style/Work-addJob.css'
import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../service/Category-service";
import {useNavigate, useParams} from "react-router-dom";
import {editJob, findJobById} from "../../service/Job-service";
import Swal from "sweetalert2";

export default function WorkEditJob() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jobId = useParams().id


    let companyId = JSON.parse(localStorage.getItem('work')).company.companyId
    let time = (new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear())

    let checkDate = (date, endDate) => {
        let arrDate = date.split("/")
        let arrEndDate = endDate.split("-").reverse()

        if (+arrEndDate[2] - +arrDate[2] < 0) {
            return false
        } else if (+arrEndDate[2] - +arrDate[2] === 0) {
            if (+arrEndDate[1] - +arrDate[1] < 0) {
                return false
            } else if (+arrEndDate[1] - +arrDate[1] === 0) {
                if (+arrEndDate[0] - +arrDate[0] < 0) {
                    return false
                } else if (+arrEndDate[0] - +arrDate[0] >= 0) {
                    return true
                }
            } else {
                return true
            }
        } else {
            return true
        }
    }

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    useEffect(() => {
        dispatch(findJobById(jobId))
    }, [])


    let oneJob = useSelector((state) => {
        return state.job.jobCurrent
    })

    const category = useSelector(state => {
        return state.category.category
    })

    const handleEditJob = async (value) => {
        let newJob = {
            jobId: +value.jobId,
            title: value.title,
            companyId: +value.companyId,
            categoryId: +value.categoryId,
            experience: value.experience,
            jobDescription: value.jobDescription,
            codeJob: +value.codeJob,
            wageEnd: +value.wageEnd,
            wageStart: +value.wageStart,
            vacancies: value.vacancies,
            endDate: value.endDate,
            addressWork: +value.addressWork,
            status: +value.status,
            statusTime: value.statusTime,
            applicants: value.applicants,
        }
        if (value.wageStart > value.wageEnd) {
            value.wageStart = ''
            value.wageEnd = ''
            await Toast.fire({
                icon: 'error',
                title: 'Giá trị lương không hợp lệ!'
            })
        } else if (!checkDate(time, value.endDate)) {
            await Toast.fire({
                icon: 'error',
                title: 'Ngày không hợp lệ!'
            })
        } else {
            dispatch(editJob(newJob)).then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Chỉnh sửa thành công!'
                })
                navigate('/work')
            })
        }
    }

    return (
        <>
            <div className="container-add-job" style={{width: '99%'}}>
                <div className="row" style={{width: '100%'}}>
                    <div className="col-8 offset-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-add-job">
                                    <h2 style={{color: 'yellowgreen'}}>Sửa thông tin tuyển dụng.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-add-job">

                                    <Formik initialValues={oneJob} onSubmit={(values, {validateForm}) => {
                                        values.jobId = +jobId
                                        values.companyId = +companyId
                                        handleEditJob(values).then()
                                    }} enableReinitialize={true}>
                                        <Form className="input-job">
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tiêu đề</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"title"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Mô tả công việc</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"jobDescription"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Vị trí ứng tuyển</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"vacancies"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Số lượng ứng tuyển</label>
                                                <Field type="number" className="form-control input-info-job"
                                                       name={"applicants"} required/>
                                            </div>
                                            <div className="form-group group-input">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label className={'name-item'}>Lương từ </label>
                                                        <Field type="number" className="form-control input-info-wage"
                                                               name={"wageStart"} required/>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="form-group group-input">
                                                            <label className={'name-item'} style={{
                                                                position: 'relative',
                                                                right: '-4.45rem'
                                                            }}>Đến</label>
                                                            <Field type="number"
                                                                   className="form-control input-info-wage"
                                                                   name={"wageEnd"} required
                                                                   style={{marginLeft: '4.4em'}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Kinh nghiệm</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"experience"} require/>
                                            </div>
                                            <div className="form-group group-input" style={{marginBottom: '1em'}}>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label className={'name-item'}>Thời gian ứng tuyển hiệu
                                                            lực</label>
                                                        <Field type="date" className="form-control input-info-wage"
                                                               name={"endDate"} min={time}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                    <div className="col-5" style={{marginTop: '0.7%'}}>
                                                        <label className={'name-item'}></label>
                                                        <Field as="select" name="categoryId"
                                                               className="form-select sel input-info-category"
                                                               aria-label="Default select example">
                                                            <option disabled selected>Loại ngành nghề</option>

                                                            {category?.map((item, index) => (
                                                                <option
                                                                    value={item.categoryId}>{item?.nameCategory}</option>
                                                            ))}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group group-input" style={{marginBottom: '1rem'}}>
                                            </div>
                                            <button type={'submit'} className="btn btn-primary">Sửa bài viết</button>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}