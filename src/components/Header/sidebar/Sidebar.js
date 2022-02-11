import React from "react";
import "./SidebarStyle.css";

const Sidebar = ({ sidebar }) => {
  let sidebar_class = sidebar ? "sidebar sidebar-active" : "sidebar";
  return (
    <div className={sidebar_class}>
      <div>
        <img
          src="https://1000logos.net/wp-content/uploads/2020/05/Google-Translate-Logo.png"
          alt="google-translate-logo"
          className="google-logo"
        />
      </div>
      <div className="about">
        <a className="about-link">About Google Translate</a>
      </div>
      <div className="sidebar-info">
        <a className="about-link">Privacy & Terms</a>
        <a className="about-link">Help</a>
        <a className="about-link">Send feedback</a>
        <a className="about-link">About Google</a>
      </div>
    </div>
  );
};

export default Sidebar;
