import React, { useState } from 'react'

import { Form } from '../components/components-provider/components-provider'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div className="register-container">
            <div className="row justify-content-center">
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
                    <Form
                        type="Register"
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register