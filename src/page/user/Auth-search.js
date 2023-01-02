import '../../style/Auth-home.css'
import {useState} from "react";
import {Link} from "react-router-dom";

export default function AuthSearch() {
    let [keySearch, setKeySearch] = useState()
    return (
        <>
            <div className="contain-search">
                <form action="" method={'GET'}>
                    <div className="row">
                        <div className="col-6 offset-3">
                            <div className="form-group">
                                <input type={'text'} name={'search'} placeholder={'Tìm kiếm...'}
                                       className={'form-control'} onChange={(value) => {
                                    setKeySearch(value.target.value)
                                }}>
                                </input>
                            </div>
                        </div>
                        <div className="col-3">
                            <Link to={`&key=${keySearch}`} className="btn btn-primary">Tìm kiếm</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}