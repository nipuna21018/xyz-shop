import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-lg-4">
                    <div className="card shadow ">
                        <div className="p-4 text-center">
                            <h5 className="card-title">OrelBuy</h5>
                            <p className="card-subtitle mb-2 text-muted">Hello, Welcome to OrelBuy</p>
                        </div>
                        <div className="card-body px-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="text-center text-black-50">
                                <div className='p-2'>Don’t have an account? <a href="#signup">Sign up</a></div>
                                <div>Forgot your password? <a href="#reset">Reset it</a></div>
                            </div>
                        </div>
                        <div className="card-footer text-muted px-4 text-black-50 py-3">
                            <div className="d-flex justify-content-between">
                                <span><a href="#guest" className="btn btn-link text-black-50">Continue as Guest</a></span>
                                <span>
                                    <a href="#privacy" className="btn btn-link text-black-50">Privacy</a> <a href="#terms" className="btn btn-link text-black-50">Terms</a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;