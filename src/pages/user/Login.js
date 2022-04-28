import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { child, get, push, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebase } from "../../configFireBase";
function Login() {
  const [email, setEmail] = useState("");
  const navigate =useNavigate()
  const [password, setPassword] = useState("");
  function handleSignIp() {
    const auth = firebase.auth;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('userId', user.uid)
        navigate('/contact')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return (
    <div>
      <div className="container">
        <div className="form__signUp d-flex justify-content-center align-items-center">
          <div className="form__content">
            <h3 className="text-center mb-4">Login</h3>

            <div className="row my-3">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <p className="m-0 fw-bold">Email</p>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <p className="m-0 fw-bold ">Password</p>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-5">
              <button
                type="button"
                onClick={() => handleSignIp()}
                className="form-control btn btn-outline-secondary text-black fw-bold"
              >
                Login
              </button>
            </div>
            <div className="mt-4">
              <Link to="/signup">You don't have acount?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
