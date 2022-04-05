import React, { useState } from "react";
import { Form, Loader } from "../components/components-provider/components-provider";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth()
    const navigate = useNavigate()

  const login = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(result));
      setEmail("");
      setPassword("");
      setLoading(false);
      toast.success("Login Successfull!");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed!");
    }
  };

  return (
    <div className="login-container">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-4 z1">
          <Form
            type="Login"
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            login={login}
          />
        </div>
        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_hu9cd9.json"
            background="transparent"
            speed="1"
            style={{ width: "300", height: "300" }}
            autoplay
            loop
          ></lottie-player>
        </div>
      </div>
      <div className="login-bottom"></div>
    </div>
  );
};

export default Login;
