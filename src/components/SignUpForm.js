import React from "react";
import { useState } from "react";
import headerLogo from "../images/headerLogo.jpeg";
import raboBankLogo from "../images/raboBankLogo.png";
import mobileBanking from "../images/mobile-banking.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({
    firstNameMsg: "",
    lastNameMsg: "",
    emailMsg: "",
    pwMsg: "",
    pwAmountMsg: "",
    pwLUCaseMsg: "",
    pwFirstLastNameMsg: "",
    disabled: false
  });
  const navigate = useNavigate();

  const validate = (fieldName, value) => {
    switch (fieldName) {
      case "firstName":
        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            firstNameMsg: "Your first name is required",
            disabled: true
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            firstNameMsg: "",
            disabled: false
          }));
          setValues((prevState) => ({
            ...prevState,
            firstName: value
          }));
        }
        break;
      case "lastName":
        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            lastNameMsg: "Your last name is required",
            disabled: true
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            lastNameMsg: "",
            disabled: false
          }));
          setValues((prevState) => ({
            ...prevState,
            lastName: value
          }));
        }
        break;
      case "email":
        if (value.length >= 0) {
          let regexEmail = RegExp(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          );

          if (!regexEmail.test(value)) {
            setErrors((prevState) => ({
              ...prevState,
              emailMsg: "Email is invalid",
              disabled: true
            }));
          } else {
            setErrors((prevState) => ({
              ...prevState,
              emailMsg: "",
              disabled: false
            }));
            setValues((prevState) => ({
              ...prevState,
              email: value
            }));
          }
        }

        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            emailMsg: "Email is required",
            disabled: true
          }));
        }
        break;
      case "password":
        if (value.length >= 1 && value.length < 8) {
          setErrors((prevState) => ({
            ...prevState,
            pwAmountMsg: "Your password should contain at least 8 characters",
            pwMsg: "",
            disabled: true
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            pwAmountMsg: "",
            disabled: false
          }));
          setValues((prevState) => ({
            ...prevState,
            password: value
          }));
        }

        let regexLowerUpperCase = RegExp(/^(?=.*[a-z])(?=.*[A-Z])/g);
        if (value.length >= 1 && !regexLowerUpperCase.test(value)) {
          setErrors((prevState) => ({
            ...prevState,
            pwLUCaseMsg:
              "Your password should contain a lower and upper case letter",
            disabled: true
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            pwLUCaseMsg: ""
          }));
          setValues((prevState) => ({
            ...prevState,
            password: value
          }));
        }

        if (values.firstName || values.lastName) {
          let lcPassw = value.toLowerCase();

          if (
            lcPassw.includes(values.firstName.toLowerCase()) ||
            lcPassw.includes(values.lastName.toLowerCase())
          ) {
            setErrors((prevState) => ({
              ...prevState,
              pwFirstLastNameMsg:
                "Your password should not contain your first and/or last name",
              disabled: true
            }));
          } else {
            setErrors((prevState) => ({
              ...prevState,
              pwFirstLastNameMsg: ""
            }));
            setValues((prevState) => ({
              ...prevState,
              password: value
            }));
          }
        }
        if (value.length == 0) {
          setErrors((prevState) => ({
            ...prevState,
            pwMsg: "Your password is required",
            disabled: true,
            pwAmountMsg: ""
          }));
        }
        break;
      default:
        break;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
    validate(name, value);
  };

  const sleep = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    };

    try {
      const response = await axios.post("https://demo-api.now.sh/users", data);
      if (response.status == 200) {
        sleep(4000);
        const user = await axios.get("https://demo-api.now.sh/users", {
          params: {
            _id: response.data_id
          }
        });
        navigate("/user", { state: response.data });
      }
    } catch (error) {
      console.log("error message: ", error);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="left">
          <div className="form_container">
            <div className="form_header_image">
              <img src={headerLogo} alt="header" />
            </div>
            <div className="form_header_text">
              <h2>Create an account</h2>
              <h3>Let's create a better world together</h3>
            </div>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  name="firstName"
                  placeholder="First name"
                  onChange={handleChange}
                  required
                />
                {errors.firstNameMsg?.length > 0 && (
                  <div className="field_invalid">{errors.firstNameMsg}</div>
                )}
                <input
                  type="text"
                  className="input"
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                  required
                />
                {errors.lastNameMsg?.length > 0 && (
                  <div className="field_invalid">{errors.lastNameMsg}</div>
                )}
                <input
                  type="text"
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                {errors.emailMsg?.length > 0 && (
                  <div className="field_invalid">{errors.emailMsg}</div>
                )}
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                {errors.pwMsg?.length > 0 && (
                  <div className="field_invalid">{errors.pwMsg}</div>
                )}
                {errors.pwAmountMsg?.length > 0 && (
                  <div className="field_invalid">{errors.pwAmountMsg}</div>
                )}
                {errors.pwLUCaseMsg?.length > 0 && (
                  <div className="field_invalid">{errors.pwLUCaseMsg}</div>
                )}
                {errors.pwFirstLastNameMsg?.length > 0 && (
                  <div className="field_invalid">
                    {errors.pwFirstLastNameMsg}
                  </div>
                )}
                <button
                  type="submit"
                  className={`${errors.disabled && `disabled`} submitButton`}
                  disabled={errors.disabled}
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content_container">
            <div className="title">
              <h1>Growing a better world together</h1>
            </div>
            <div className="mobile_banking_img">
              <img src={mobileBanking} alt="mobile-banking" />
            </div>
            <div className="logo">
              <img src={raboBankLogo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
