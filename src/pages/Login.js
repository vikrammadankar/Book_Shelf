import React, { useState } from 'react'
import { Form } from '../components/components-provider/components-provider'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login-container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <Form
                        type="Login"
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                </div>
                <div className="col-md-5">
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_hu9cd9.json" background="transparent"
                        speed="1"
                        style={{ width: "300", height: "300" }}
                        autoplay loop></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Login