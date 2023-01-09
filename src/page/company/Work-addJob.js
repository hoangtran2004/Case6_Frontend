import '../../style/Work-addJob.css'
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../service/Category-service";
import {addJob} from "../../service/Job-service";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


export default function WorkAddJob() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let item = JSON.parse(localStorage.getItem('work'));

    const company = item.company;


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


    const category = useSelector(state => {
        return state.category.category
    })


    const handleAddJob = async (value) => {
        value.categoryId = +value.categoryId
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
            dispatch(addJob(value)).then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Tạo bài tuyển dụng thành công!'
                })
                navigate('/work')
            })
        }
    }

    return (
        <>
            <div className="container-add-job">
                <div className="row" style={{width: '100%'}}>
                    <div className="col-8 offset-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-add-job">
                                    <h2 style={{color: 'yellowgreen'}}>Đăng thông tin tuyển dụng của bạn ở đây</h2>
                                    <h5>Nhanh chóng tìm được những nhà phát triển tiềm năng!</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-add-job">
                                    <Formik initialValues={{
                                        title: '',
                                        wageStart: '',
                                        wageEnd: '',
                                        experience: '',
                                        endDate: '',
                                        jobDescription: '',
                                        addressWork:'',
                                        vacancies: '',
                                        categoryId: 0,
                                        nameCategory: '',
                                        companyId: company.companyId,
                                        status: 0,
                                        statusTime: '',
                                        applicants: ''

                                    }} onSubmit={(values, {validateForm}) => {
                                        handleAddJob(values).then()
                                        validateForm().then()

                                    }}>
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
                                                       name={"applicants"}/>
                                            </div>
                                            <div className="form-group group-input">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label className={'name-item'}>Lương từ </label>
                                                        <Field type="number" className="form-control input-info-wage"
                                                               name={"wageStart"} required/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                    <div className="col-5">
                                                        <div className="form-group group-input">
                                                            <label className={'name-item'}>Đến</label>
                                                            <Field type="number"
                                                                   className="form-control input-info-wage"
                                                                   name={"wageEnd"} required/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Kinh nghiệm</label>
                                                <Field as="select" name="experience"
                                                       className="form-control input-info-job"
                                                       style={{height: '53% !important'}}
                                                       aria-label="Default select example">
                                                    <option disabled={true} selected={true}>Kinh nghiệm</option>
                                                        <option value="0" name={'experience'}>Dưới 1 năm</option>
                                                        <option value="1" name={'experience'}>Từ 1-3 năm</option>
                                                        <option value="2" name={'experience'}>Từ 3-5 năm</option>
                                                        <option value="3" name={'experience'}>Trên 5 năm</option>
                                                </Field>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Địa chỉ làm việc</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"addressWork"} required/>
                                            </div>
                                            <div className="form-group group-input" style={{marginBottom: '1rem'}}>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <label className={'name-item'}>Thời gian ứng tuyển hiệu
                                                            lực</label>
                                                        <Field type="date" className="form-control input-info-time"
                                                               min={time}
                                                               name={"endDate"} required/>
                                                    </div>
                                                    <div className="col-4">
                                                        <label className={'name-item'}></label>
                                                        <Field as="select" name="categoryId"
                                                               className="form-select sel input-info-category"
                                                               style={{height: '53% !important'}}
                                                               aria-label="Default select example">
                                                            <option disabled selected>Loại ngành nghề</option>
                                                            {category?.map((item, index) => (
                                                                <option value={+item?.categoryId}
                                                                        name={'nameCategory'}>{item?.nameCategory}</option>
                                                            ))}
                                                        </Field>
                                                    </div>
                                                    <div className="col-4">
                                                        <label className={'name-item'}></label>
                                                        <Field as="select" name="statusTime"
                                                               className="form-select sel input-info-category"
                                                               style={{height: '53% !important'}}
                                                               aria-label="Default select example">
                                                            <option disabled selected>Thời gian làm việc</option>
                                                            <option value={1}
                                                                    name={'statusTime'}>Full time
                                                            </option>
                                                            <option value={0}
                                                                    name={'statusTime'}>Part time
                                                            </option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type={'submit'} className="btn btn-primary">Đăng bài</button>
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