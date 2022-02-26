import React from 'react'
import { Link } from 'react-router-dom'

const Form = (props) => {
    return (
        <div className="form">
            <h2>{props.type}</h2>
            <hr />
            <input type="email" className="form-control" placeholder="Enter Email..." value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
            <input type="password" className="form-control" placeholder="Enter Password..." value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
            {props.type === "Register" ? <input type="password" className="form-control" placeholder="Confirm Password..." value={props.confirmPassword} onChange={(e) => props.setConfirmPassword(e.target.value)} /> : null}

            <button onClick={props.type === "Register" ? props.register : props.login} className="mt-4 myBtn">
                {props.type}
            </button>

            <hr />

            <Link className="bottom-nav-link" to={props.type === "Register" ? "/login" : "/register"}>
                Click Here To {props.type === "Register" ? "Login" : "Register"}
            </Link>
        </div>
    )
}

export default Form