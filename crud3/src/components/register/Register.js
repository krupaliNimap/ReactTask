import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LOGINSTYLES from "./../../shared/styles/Login.module.css";
import eye from "./../../assets/images/eye.svg";
import eyeOff from "./../../assets/images/eye-off.svg";
import { combineClasses } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserRegister,
  getUserRegister,
} from "../redux/reduxSlice/registerSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerUsers } = useSelector((state) => state.userRegisterSlice);
  const [passwordVisibility, SetPasswordVisibility] = useState(true);
  const [didMatch, setDidMatch] = useState(true);
  console.log("registerUsers", registerUsers);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    if (data.password === data.confirmPassword) {
      console.log(payload);
      setDidMatch(true);
      if (!registerUsers.filter((item) => item.email === data.email).length) {
        dispatch(addUserRegister(payload));
        reset();
        navigate("/login");
      } else toast.error("Email id already exist!!");
    } else {
      setDidMatch(false);
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
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                })}
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
              {errors?.password?.type === "pattern" && (
                <span className={LOGINSTYLES.errorSpan}>
                  Password should contain 7 to 15 characters which contain at
                  least one numeric digit and a special character.
                </span>
              )}
            </div>
            <div
              className={combineClasses(
                LOGINSTYLES.loginField,
                LOGINSTYLES.relative
              )}
            >
              <label>Confirm Password :</label>
              <input
                onhange={() => setDidMatch(false)}
                type={passwordVisibility ? "password" : "string"}
                placeholder="Enter Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                })}
              />
              {(errors?.confirmPassword?.type === "required" && (
                <span className={LOGINSTYLES.errorSpan}>
                  Password is required
                </span>
              )) ||
                (!didMatch && (
                  <span className={LOGINSTYLES.errorSpan}>
                    Password and confirm password did not match.
                  </span>
                ))}
            </div>
            <button className={LOGINSTYLES.loginButton} type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
