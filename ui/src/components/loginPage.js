import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Quantumimg from '../images/Quantumimg1.png'
import Navimg from '../images/navimg.png'
import officeimg from '../images/officeimg.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HOST } from "../App";
export const LoginPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState();
    const authLogin = async () => {
        //1231234
        try{
        const request = await axios.post(`${HOST}/quantum/login`, data).then((data) => {
            if (data.status === 200) {
                // If login is successful, navigate to the next page
                const { token, email,designation, name, users } = data.data;
                const user = { email:users.email, designation:users.designation, name:users.username, _id: users._id };
                localStorage.setItem("user", JSON.stringify(user));
                navigate('/dashboard');
                console.log('data',data)
            } else {
                // If login fails, set the error message
                setError(true);
            }
        })
    }catch(error){
        setError(true);
    }
    }
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
                    <input type="email" name="email" className="form-control" id="emailinput" placeholder="email@gmail.com" style={{ width: '150%' }} onChange={(e) => { const name = e.target.name; setData({ ...data, [name]: e.target.value }) }} />
                </div>
                <div className=" me-5 mt-2">
                    <label for="passinput" className="form-label fs-4">Password<span className="text-danger">*</span></label>
                    <input type="password" name="password" className="form-control" id="passinput" placeholder="* * *" style={{ width: '150%' }} onChange={(e) => { const name = e.target.name; setData({ ...data, [name]: e.target.value }) }} />
                </div>
                {error&&<small className="text-danger">Invalid Credentials</small>}
                <div className="mt-3">
                    <button className="btn btn-primary p-2 px-4" onClick={() => authLogin()}>Login</button>
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