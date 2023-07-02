import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = (data) => {
    console.log("register");
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="pb-2 page-header">Register</h1>
      <form onSubmit={handleSubmit(signUp)}>
        <div className="form-group py-2">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            className="form-control"
            type="text"
            value={email}
            {...register("email", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setEmail(e.target.value);
              },
            })}
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            className="form-control"
            type="password"
            value={password}
            {...register("password", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setPassword(e.target.value);
              },
            })}
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="confirm">Repeat password: </label>
          <input
            id="confirm"
            className="form-control"
            type="password"
            value={confirmPassword}
            {...register("password", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setConfirmPassword(e.target.value);
              },
            })}
          />
        </div>
        <button type="submit" name="register" className="main-btn p-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
