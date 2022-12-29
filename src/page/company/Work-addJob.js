import '../../style/Work-addJob.css'
import {Field, Form, Formik} from "formik";
import {useState} from "react";

export default function WorkAddJob() {
    // let item=JSON.parse(localStorage.getItem('job'));
    // const [company,setCompany]=useState()
    return (
        <>
            <div className="container-add-job">
                <div className="row" style={{width:'100%'}}>
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
                                        addressWork: '',
                                        vacancies: '',
                                        // companyId:''

                                    }} onSubmit={() => {

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
                                                        <Field type="text" className="form-control input-info-wage"
                                                               name={"wageStart"} require />
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="form-group group-input" >
                                                            <label className={'name-item'}>Đến</label>
                                                            <Field type="text" className="form-control input-info-wage"
                                                                   name={"wageEnd"} require style={{marginLeft:'2.2em'}}/>
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
                                                <label className={'name-item'}>Thời gian ứng tuyển hiệu lực</label>
                                                <Field type="date" className="form-control input-info-job"
                                                       name={"endDate"} require/>
                                            </div>
                                            <button className="btn btn-primary">Đăng bài</button>
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