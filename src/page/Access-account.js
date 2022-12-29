import React from 'react';
import {Link} from "react-router-dom";
import '../style/Access-account.css'

function AccessAccount() {
    return (
        <div className='container-fluid' style={{marginTop:'67px'}}>
            <div className='row'>
                <div className='col-6 left display-left'>
                    <div className={''}>
                        <h2 className={'title'}>Dành cho doanh nghiệp</h2>
                        <p className={'content-text'}>Tìm kiếm những nhà phát triển tiềm năng phù hợp với nhu cầu doanh nghiệp.</p>
                        <Link to={'/work/login'}>
                            <button type="button" className="btn btn-outline-primary" style={{margin:'20px 0'}}>Đăng Nhập</button>
                        </Link>
                        <div className={'content-text'}>Chưa có tài khoản ?</div>
                        <Link to={'/work/register'}><p className={'text'}>Đăng kí ngay.</p> </Link>
                    </div>
                </div>

                <div className='col-6 right display-right'>
                    <div>
                        <h2 className={'title'}>Dành cho người dùng</h2>
                        <p className={'content-text'}>Tìm kiếm cơ hội việc làm,tham gia phỏng vấn với các nhà tuyển dụng.</p>
                        <Link to={'/auth/login'}>
                            <button type="button" className="btn btn-outline-secondary" style={{margin:'20px 0'}}>Đăng Nhập</button>
                        </Link>
                        <div className={'content-text'}>Chưa có tài khoản ?</div>
                        <Link to={'/auth/register'}><p className={'text'}>Đăng kí ngay.</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AccessAccount;