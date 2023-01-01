import '../../style/Auth-home.css'
import {Field, Form, Formik} from "formik";

export default function AuthSearch() {
    return (
        <>
            <div className="contain-search">
                <Formik initialValues={{
                    search: ''
                }} onSubmit={() => {

                }}>
                    <Form>
                        <div className="row">
                            <div className="col-6 offset-3">
                                <div className="form-group">
                                    <Field type={'text'} name={'search'}  placeholder={'Tìm kiếm...'} className={'form-control'}>
                                    </Field>
                                </div>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>
                  </Form>
                </Formik>
            </div>
        </>
    )
}