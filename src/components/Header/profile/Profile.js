import React from "react";
import "./ProfileStyle.css";
import { BsCamera } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
const Profile = ({ profile }) => {
  let classes = profile ? "dropdown-content active" : "dropdown-content";
  return (
    <div className={classes}>
      <div className="profile-dropdown">
        <div className="profile-dropdown info">
          <div className="profile-image-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
              alt="google-translate-logo"
              className="profile-image"
            />
            <div>
              <a>
                <BsCamera className="camera-icon" />
              </a>
            </div>
          </div>
          <div className="name">Mohammad Mousavi</div>
          <div className="email">mousavi0951@gmail.com</div>
          <button className="manage-btn">Manage your Google Account</button>
        </div>
        <hr className="divider" />
        <div className="add-account">
          <a>
            <BsPersonPlus />
            <span className="add-text">Add another account</span>
          </a>
        </div>
        <hr className="divider" />
        <div className="sign-out">
          <a className="sign-out-btn">Sign out</a>
        </div>

        <hr className="divider" />
        <footer className="footer">
          <div>
            <a className="footer-link">Privacy Policy</a>.
            <a className="footer-link"> Terms Of Services</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Profile;
