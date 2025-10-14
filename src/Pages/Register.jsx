// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Auth/AuthContext";
// import { auth } from "../firebase/firebase.init";

const Register = () => {
  const {createUser} = use(AuthContext);
  
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email,password)
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const name = e.target.name.value;

  //   console.log(email,password,name)

  //   createUserWithEmailAndPassword(auth,email,password)
  //       .then(result=> {
  //           console.log(result)
  //       })
  //       .catch(err=>{
  //           console.log(err)
  //       })
  // };
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold"> Please Register</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4"> Register</button>
          </fieldset>
        </form>
        <p>
          {" "}
          Already have an account? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-800 hover:underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
