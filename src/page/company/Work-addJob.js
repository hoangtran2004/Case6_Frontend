import '../../style/Work-addJob.css'
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../service/Category-service";
import {addJob} from "../../service/Job-service";
import {useNavigate} from "react-router-dom";

export default function WorkAddJob() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let item = JSON.parse(localStorage.getItem('work'));

    const [company, setCompany] = useState(item.company);

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
        console.log(value.endDate)
        if (value.wageStart > value.wageEnd) {
            value.wageStart = ''
            value.wageEnd = ''
            alert('Nhập sai số lương')
        }
        if (!checkDate(time, value.endDate)) {
            alert('Nhập sai ngày')
        }
        else {
            await dispatch(addJob(value))
            await navigate('/work')
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
                                        description: '',
                                        addressWork: company.address,
                                        vacancies: '',
                                        categoryId: '',
                                        companyId: company.companyId,
                                        status: 0,
                                        codeJob: '11111111',
                                        statusTime: 1

                                    }} onSubmit={(values, {validateForm}) => {
                                        handleAddJob(values).then()
                                        validateForm()

                                    }}>
                                        <Form className="input-job">
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tiêu đề</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"title"} require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Mô tả công việc</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"description"} require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Vị trí ứng tuyển</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"vacancies"} require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <label className={'name-item'}>Lương từ </label>
                                                        <Field type="number" className="form-control input-info-wage"
                                                               name={"wageStart"} require/>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="form-group group-input">
                                                            <label className={'name-item'} style={{
                                                                position: 'relative',
                                                                right: '-4.45rem'
                                                            }}>Đến</label>
                                                            <Field type="number"
                                                                   className="form-control input-info-wage"
                                                                   name={"wageEnd"} require
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
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Địa chỉ làm việc</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"addressWork"} require/>
                                            </div>
                                            <div className="form-group group-input" style={{marginBottom: '1em'}}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label className={'name-item'}>Thời gian ứng tuyển hiệu
                                                            lực</label>
                                                        <Field type="date" className="form-control input-info-wage"
                                                               name={"endDate"} require/>
                                                    </div>
                                                    <div className="col-6">
                                                        <label className={'name-item'}></label>
                                                        <Field as="select" name="categoryId" className="form-select sel"
                                                               aria-label="Default select example">
                                                            <option disabled selected>Loại ngành nghề</option>

                                                            {category?.map((item, index) => (
                                                                <option value={item.categoryId}>{item?.name}</option>
                                                            ))}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group group-input" style={{marginBottom: '1em'}}>
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