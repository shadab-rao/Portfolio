import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Import icons
import { adminLogin } from "../ApiServices/ApiCallService";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    
    setLoading(true);
    try {
      const payload = {
        ...data      };
      console.log(payload);
      const response = await adminLogin(payload);
      
      const token = response?.data?.data?.token;

      if (token) {
        localStorage.setItem("token-adminPortfolio", token);
      }

      if (response?.data && !response?.data?.data?.error) {
        const user = response?.data?.data?.admin;
        localStorage.setItem("portfolio-admin", JSON.stringify(user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
    setLoading(false);
  };

  return (
    <section
      className="login_page"
      style={{ backgroundImage: 'url("assets/img/bg.jpg")' }}
    >
      <div className="container-fluid px-0">
        <div className="row justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-10 col-11">
            <div className="login_top shadow">
              <div className="login_page_form">
                <div className="row">
                  <div className="col-12 mb-4 text-center">
                    <img className="authlogo" src="assets/img/logo.png" alt="Logo" />
                  </div>
                  <div className="col-12 formheader mb-4 text-center">
                    <h1>Login for Admin Panel</h1>
                    <p>Please enter your email and password</p>
                  </div>
                  <div className="col-12">
                    <form
                      className="row form-design"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-12">
                        <label htmlFor="email">User Name</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="User@gmail.com"
                          {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email.message}</p>
                        )}
                      </div>

                      {/* 👇 Password field with eye icon */}
                      <div className="form-group col-12 position-relative">
                        <label htmlFor="password">Password</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          placeholder="**********"
                          {...register("password", { required: "Password is required" })}
                        />
                        <span
                          className="position-absolute"
                          style={{
                            right: "25px",
                            top: "68%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEye/> : <FaEyeSlash />}
                        </span>
                        {errors.password && (
                          <p className="text-danger">{errors.password.message}</p>
                        )}
                      </div>

                      <div className="form-group col-12">
                        <Link className="for_got" to={"/forget-password"}>
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="form-group col-12 mb-0 mt-2">
                        <button
                          className="comman_btn"
                          type="submit"
                          disabled={loading}
                        >
                          <span>{loading ? "Logging in..." : "Login"}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
