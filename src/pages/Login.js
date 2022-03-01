// React, Router-dom & toastify
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// components
import { Form, Loader } from '../components/components-provider/components-provider'

// firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const auth = getAuth()
    const navigate = useNavigate()

    const login = async () => {
        try {
            setLoading(true)
            const result = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('currentUser', JSON.stringify(result))
            setEmail("")
            setPassword("")
            setLoading(false)
            toast.success("Login Successfull!")
            navigate("/")
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error("Login Failed!")
        }
    }

    return (
        <>
            {loading ? <Loader /> : <div className="login-wrapper">
                <div className="p-5 container login-container">
                    <div className="login-row w-100">
                        <div className="login-col d-flex align-items-center justify-content-center">
                            <Form
                                type="Login"
                                email={email}
                                password={password}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                login={login}
                            />
                        </div>
                        <div className="login-col d-flex align-items-center justify-content-center">
                            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_hu9cd9.json" background="transparent"
                                speed="1"
                                style={{ width: "300", height: "300" }}
                                autoplay loop></lottie-player>
                        </div>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default Login