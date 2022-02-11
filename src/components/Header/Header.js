import React, { useState } from "react";
import "./HeaderStyle.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Sidebar from "./sidebar/Sidebar";
import Profile from "./profile/Profile";
import GoogleApps from "./googleApps/GoogleApps";

const Header = ({
  sidebar,
  setSidebar,
  profile,
  setProfile,
  apps,
  setApps,
}) => {
  const handleSidebar = () => {
    setProfile(false);
    setApps(false);
  };
  const handleApps = () => {
    setProfile(false);
    setApps(!apps);
  };
  const handleProfile = () => {
    setProfile(!profile);
    setApps(false);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="align">
          <div className="left-side" onClick={handleSidebar}>
            <span className="side-bar-icon ">
              <a
                href="#"
                className="link icon"
                onClick={() => setSidebar(true)}
              >
                <AiOutlineMenu size={25} />
              </a>
              <Sidebar sidebar={sidebar} />
            </span>
            <a href="#" className="link">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/05/Google-Translate-Logo.png"
                alt="google-translate-logo"
                className="logo"
              />
            </a>
          </div>
          <div className="right-side" onClick={() => setSidebar(false)}>
            <span className="side-bar-icon">
              <a href="#" className="link icon" onClick={handleApps}>
                <BsGrid3X3GapFill size={25} />
              </a>

              <GoogleApps apps={apps} />
            </span>
            <span className="dropdown" onClick={() => setProfile(!profile)}>
              <a href="#" className="link avatar-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
                  alt="google-translate-logo"
                  className="avatar"
                  onClick={handleProfile}
                />
              </a>
              <div>
                <Profile profile={profile} />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
