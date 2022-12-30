import {Field, Form, Formik} from "formik";

export default function WorkEditInformation() {
    return (
        <>
            <div className="row container-add-job">
                <div className="row" style={{width: '100%'}}>
                    <div className="col-8 offset-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-add-job">
                                    <h2 style={{color: 'yellowgreen'}}>Chỉnh sửa thông tin của nhà tuyển dụng</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-add-job">
                                    <Formik initialValues={{
                                        name: '',
                                        phoneNumber: '',
                                        address: '',
                                        numberStaff: '',
                                        abbreviatedName: '',
                                        description: ''

                                    }} onSubmit={(values, {validateForm}) => {

                                    }}>
                                        <Form className="input-job">
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tên công ty</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"name"}  require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Tên viết tắt</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"abbreviatedName"} require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Địa chỉ</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"address"} require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Số nhân viên</label>
                                                <Field type="number" className="form-control input-info-job"
                                                       name={"numberStaff"} require/>
                                            </div>
                                            <div className="form-group group-input">
                                                <label className={'name-item'}>Mô tả</label>
                                                <Field type="text" className="form-control input-info-job"
                                                       name={"description"} require/>
                                            </div>
                                            <button type={'submit'} className="btn btn-primary">Xác nhận</button>
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