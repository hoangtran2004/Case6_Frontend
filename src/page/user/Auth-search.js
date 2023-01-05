import '../../style/Auth-home.css'
import {useDispatch} from "react-redux";
import {searchJob} from "../../service/Job-service";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function AuthSearch() {
    const dispatch = useDispatch()
    let search = useLocation().search.replace('?', '')
    let navigate = useNavigate()


    let handleSearch = async (event) => {
        let newEvent = removeVietnameseTones(`${event.key}`).split(' ').join('+')
        let arrParam = search.split('&')
        if (search.includes('key=')) {
            if (event.key) {
                arrParam.splice(arrParam.length - 1, 1, `key=${newEvent}`)
            } else {
                console.log(1)
                arrParam.splice(arrParam.length - 1, 1)
            }
        } else {
            if (event.key) {
                console.log(arrParam)
                arrParam.push(`key=${newEvent}`)
                arrParam = arrParam.filter(item => item !== '')
            }
        }
        dispatch(searchJob(arrParam.join('&')))
        navigate(`/search?${arrParam.join('&')}`)
    }

    let removeVietnameseTones = (str) => {
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str.replace(/\s+/g, ' ');
    }

    return (
        <>
            <div className="contain-search">
                <Formik initialValues={{
                    key: ''
                }} onSubmit={(values) =>
                    handleSearch(values)
                }>
                    <Form>
                        <div className="row">
                            <div className="col-3">
                                <h1>aaaaaaaaaaaa</h1>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="form-group">
                                            <Field type={'text'} name={'key'}
                                                   placeholder={'Tìm kiếm việc làm theo tên, công ty...'}
                                                   className={'form-control'}
                                                   style={{width: '95%', marginLeft: '6.5%', backgroundColor: 'white'}}>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <button type={'submit'} className="btn btn-primary"
                                                style={{marginLeft: '6%', width: '40%'}}>Tìm kiếm
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}