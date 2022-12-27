import React from 'react';
import {Link} from "react-router-dom";
import '../style/Access-account.css'

function AccessAccount() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 left display-left'>
                    <div className={''}>
                        <h2 className={'title'}>For Companies</h2>
                        <p className={'content-text'}>We are the market–leading technical interview platform to identify and hire developers with the
                            right skills.</p>
                        <Link to={'/work/company'}>
                            <button type="button" className="btn btn-outline-primary" style={{margin:'20px 0'}}>Đăng Nhập</button>
                        </Link>
                        <div className={'content-text'}>Don't have an account?</div>
                        <Link to={'/work/register'}><p className={'text'}>Get free trial.</p> </Link>
                    </div>
                </div>

                <div className='col-6 right display-right'>
                    <div>
                        <h2 className={'title'}>For User</h2>
                        <p className={'content-text'}>Join over 21 million developers, practice coding skills, prepare for interviews, and get
                            hired.</p>
                        <Link to={'/auth/company'}>
                            <button type="button" className="btn btn-outline-secondary" style={{margin:'20px 0'}}>Đăng Nhập</button>
                        </Link>
                        <div className={'content-text'}>Don't have an account?</div>
                        <Link to={'/auth/register'}><p className={'text'}>Sign up.</p></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AccessAccount;