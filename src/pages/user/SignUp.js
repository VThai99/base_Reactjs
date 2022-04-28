import { createUserWithEmailAndPassword } from "firebase/auth";
import { child, get, push, ref, set } from "firebase/database";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebase } from "../../configFireBase";
function SignUp() {
  const passRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avata, setAvata] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSignUp() {
    const auth = firebase.auth;
    const db = firebase.database;

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        set(ref(db, "users/" + user.uid), {
          id: user.uid,
          username: name,
          email: email,
          avata: avata,
        })
          .then((res) => {
            navigate("/login");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    const dbRef = ref(firebase.database);
    get(child(dbRef, `users/-N0UcPQHGTA6H4JC4nvs`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="form__signUp d-flex justify-content-center align-items-center">
          <div className="form__content">
            <h3 className="text-center mb-4">SignUp</h3>
            <div className="row my-3">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <p className="m-0 fw-bold ">Name</p>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <p className="m-0 fw-bold ">Link Avata</p>
              </div>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAvata(e.target.value)}
                />
                {avata && (
                  <div className="mt-2">
                    <img src={avata} alt="" className="image square size7090" />
                  </div>
                )}
              </div>
            </div>
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
                  ref={passRef}
                  onBlur={() => {
                    if (passRef.current.value.length < 6) {
                      alert("Password need more than 6 characters");
                    }
                  }}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-5">
              <button
                type="button"
                onClick={() => handleSignUp()}
                className="form-control btn btn-outline-secondary text-black fw-bold"
              >
                SignUp
              </button>
            </div>
            <div className="mt-4">
              <Link to="/login">You have acount</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
