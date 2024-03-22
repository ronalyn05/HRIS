import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="bg-gradient-primary d-flex align-items-center justify-content-center min-vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card o-hidden border-0 shadow-lg">
                            <div className="card-body p-5">
                                <div className="text-center">
                                    <img src="./img/hris-2.png" alt="Logo" className="logo" style={{ width: '200px', height: 'auto' }} />
                                </div>
                                <hr />
                                <div className="text-center" style={{ margin: '20px' }}>
                                    <img src="./img/login.png" alt="Login" className="login-image" style={{ width: '100px', height: '90px' }} />
                                </div>
                                <form className="user">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox small">
                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                        </div>
                                    </div>
                                    <Link to="/dashboard" className="btn btn-primary btn-user btn-block">Login</Link>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link className="small" to="/forgotpassword">Forgot Password?</Link>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/register">No account yet? Create an Account!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
