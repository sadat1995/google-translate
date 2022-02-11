import React from "react";
import "./MoreStyles.css";
import { RiHistoryFill } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";

const More = () => {
  return (
    <div className="more-container">
      <a className="more-item">
        <div className="icon-container">
          <RiHistoryFill size={60} className="icons" />
        </div>
        <div className="more-text">History</div>
      </a>
      <a className="more-item">
        <div className="icon-container">
          <RiStarFill size={60} className="icons" />
        </div>
        <div className="more-text">Saved</div>
      </a>
      <a className="more-item">
        <div className="icon-container">
          <RiUser3Fill size={60} className="icons" />
        </div>
        <div className="more-text">Contribute</div>
      </a>
    </div>
  );
};

export default More;
