import { NavLink } from "react-router-dom";

import React, { Component } from 'react'

export class login extends Component {
    state = {
        email: "",
        password: "",
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
                        <h2 className="form-heading center">Enter login details</h2>
                        <div className="form-section">
                            <div className="input-group"><label>Email</label>
                                <div className="effect"><input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group"><label>Password</label>
                                <div className="effect"><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><span></span>
                                </div>
                                <div className="error"></div>
                            </div>

                            <div className="input-group">
                                <div className="center"><p>{this.state.errorMessage}</p>
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button className=" btn hvr-float-shadow center">Login</button>
                            </div>
                           
                            <div className="form-buttons">
                            <p className="center">if you don't have account</p>
                                <NavLink to='/register'  className="center">Register</NavLink>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        )
    }
}

export default login
