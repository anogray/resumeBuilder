import { NavLink } from "react-router-dom";

import React, { Component } from 'react'

export class Register extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword:"",
        errorMessage: "error message"
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container med contact">
                <div className="section funnel-section">
                    <div className="form-card">
                        <h2 className="form-heading center">Enter signup details</h2>
                        <div className="form-section">
                            <div className="input-group full"><label>Email</label>
                                <div className="effect"><input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group full"><label>Password</label>
                                <div className="effect"><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>
                            <div className="input-group full"><label>Confirm Password</label>
                                <div className="effect"><input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group">
                                <div className="center hide"><p>{this.state.errorMessage}</p>
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button className=" btn hvr-float-shadow center">Register</button>
                            </div>
                           
                            <div className="form-buttons">
                            <p className="center">if you already have account</p>
                                <NavLink to='/login'  className="center">Login</NavLink>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        )
    }
}

export default Register
