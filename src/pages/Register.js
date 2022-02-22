import React, { useState } from 'react'



const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div className="register-container">
            <div className="row">
                <div className="col-md-5">
                    <lottie-player
                        src="https://assets3.lottiefiles.com/packages/lf20_yr6zz3wv.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "300", height: "300" }}
                        loop
                        autoplay>
                    </lottie-player>
                </div>
                <div className="col-md-5">
                    <div className="login-form">
                        <h2>Register</h2>
                        <hr />
                        <input type="email" className="form-control" placeholder="Enter Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="form-control" placeholder="Enter Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" className="form-control" placeholder="Confirm Password..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        <button>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register