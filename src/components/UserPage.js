import React from "react";
import "./UserPage.css";
import successImage from "../images/successImage.svg";
import { useLocation } from "react-router-dom";
import raboBankLogo from "../images/raboBankLogo.png";
import headerLogo from "../images/headerLogo.jpeg";

const UserPage = () => {
  const { state } = useLocation();
  const { firstName, lastName } = state;

  return (
    <div className="userContainer">
      <div className="userContent">
        <div className="logo">
          <img src={raboBankLogo} alt="logo" />
        </div>

        <div className="greeting">
          <h2>
            Hi {firstName} {lastName}!
          </h2>
          <h2>Your sign up was a succes!</h2>
        </div>
        <div className="success_image">
          <img src={successImage} alt="successful" />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
