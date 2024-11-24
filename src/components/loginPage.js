import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Quantumimg from '../images/Quantumimg1.png'
import Navimg from '../images/navimg.png'
import officeimg from '../images/officeimg.png'
import { Navigate, useNavigate } from "react-router-dom";
export const LoginPage = () => {
const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-light" style={{ background: "linear-gradient(to right, #092D43, #B9F3F6)" }}>
                <div className="container-fluid row">
                    <div className="col-md-8 ms-2">
                        <img className="navbar-brand" src={Quantumimg} alt="app-Logo" /><br />
                        <h2 className="text-light mt-1">Facial Recognition: &nbsp;The Future of Secure Attendance</h2>
                        <p className="text-light fs-4 mt-4">The Image for "Quantum Check-in" Shows a sleek facial recognition scanning an employee's face, confirming attendance instantly.Soft blue tones highlight the modern,high-tech atmosphere of the system. </p>
                       
                        
                    </div>
                    <div className="col-md-3">
                        <img src={Navimg} alt="nav-img" style={{ width: '100%', height: '100%', marginLeft: '12%' }} />
                    </div>
                </div>
            </nav>
            <div style={{ justifyItems: 'center', justifyContent: 'center', }}>
                <br />
                <h5>USER LOGIN</h5>
                <div className="me-5">
                    <label for="emailinput" className="form-label fs-4">Email<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="emailinput" placeholder="email@gmail.com" style={{width:'150%'}} />
                </div>
                <div className=" me-5 mt-2">
                    <label for="passinput" className="form-label fs-4">Password<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="passinput" placeholder="* * *" style={{width:'150%'}}/>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary p-2 px-4" onClick={()=>navigate('/dashboard')}>Login</button>
                </div>
                <div className="mt-3">
                    <p>Forgot Password ?</p> 
                </div>
                <h4 className="text-secondary">From</h4>
                <img src={officeimg} alt="resource-img" />
            </div>
            
        </div>
    )

}