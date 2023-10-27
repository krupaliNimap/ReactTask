import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LOGINSTYLES from "./../../shared/styles/Login.module.css";
import eye from "./../../assets/images/eye.svg";
import eyeOff from "./../../assets/images/eye-off.svg";
import { combineClasses } from "../../utils/utils";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserRegister } from "../redux/reduxSlice/registerSlice";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerUsers } = useSelector((state) => state.userRegisterSlice);
  const [passwordVisibility, SetPasswordVisibility] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    const user = registerUsers.filter((item) => item.email === data.email);
    if (user.length) {
      if (user[0].password === data.password) {
        navigate("/");
        localStorage.setItem(
          "token",
          "sdioiocsdmkcmdknfkvnfkdvnnvfmkvnnksdncsdjkcnjdnnsmdcnk"
        );
        toast.success("Login Successfull");
      } else {
        toast.error("Incorrect Password");
      }
    } else {
      toast.error("Email is not registered");
    }
  };
  useEffect(() => {
    dispatch(getUserRegister());
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={LOGINSTYLES.loginContainer}>
          <div className={LOGINSTYLES.loginBox}>
            <div className={LOGINSTYLES.loginField}>
              <label>Email Id :</label>
              <input
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <span className={LOGINSTYLES.errorSpan}>Email is required</span>
              )}
            </div>
            <div
              className={combineClasses(
                LOGINSTYLES.loginField,
                LOGINSTYLES.relative
              )}
            >
              <label>Password :</label>
              <input
                type={passwordVisibility ? "password" : "string"}
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              {passwordVisibility ? (
                <img
                  className={LOGINSTYLES.eyeButton}
                  src={eye}
                  alt="eye"
                  onClick={() => SetPasswordVisibility(false)}
                />
              ) : (
                <img
                  className={LOGINSTYLES.eyeButton}
                  src={eyeOff}
                  alt="eye"
                  onClick={() => SetPasswordVisibility(true)}
                />
              )}
              {errors?.password?.type === "required" && (
                <span className={LOGINSTYLES.errorSpan}>
                  Password is required
                </span>
              )}
            </div>
            <button className={LOGINSTYLES.loginButton} type="submit">
              Log In
            </button>
            <NavLink to="/register" className={LOGINSTYLES.registerLink}>
              Register here, if don't have an account
            </NavLink>
            {/* <NavLink to="/">Forgot Password</NavLink> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
