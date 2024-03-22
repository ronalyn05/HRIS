import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
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
                                <div className="text-center" style={{ margin: "20px" }}>
                                    <img src="./img/forgotpass.png" alt="forgot-password" className="forgotpass" style={{ width: "100px", height: "90px" }} />
                                </div>
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                    <p className="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                                </div>
                                <form className="user">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <Link to="/" className="btn btn-primary btn-user btn-block">Reset Password</Link>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link className="small" to="/register">No account yet? Create an Account!</Link>
                                </div>
                                <div className="text-center">
                                    <Link className="small" to="/">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
