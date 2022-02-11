import React from "react";
import "./GoogleAppsStyles.css";

const GoogleApps = ({ apps }) => {
  let classes = apps ? "apps-dropdown-content active" : "apps-dropdown-content";
  return (
    <div className={classes}>
      <div className="apps-container">
        <div className="item-container">
          <div className="item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
              alt="google-translate-logo"
              className="google-image"
            />
          </div>
          <div className="item-text">Account</div>
        </div>
        <div className="item-container">
          <div className="item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
              alt="google-translate-logo"
              className="google-image"
            />
          </div>
          <div className="item-text">Account</div>
        </div>
        <div className="item-container">
          <div className="item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
              alt="google-translate-logo"
              className="google-image"
            />
          </div>
          <div className="item-text">Account</div>
        </div>
        <div className="item-container">
          <div className="item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
              alt="google-translate-logo"
              className="google-image"
            />
          </div>
          <div className="item-text">Account</div>
        </div>
        <div className="item-container">
          <div className="item-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLFJbTrVFnOBgjYC_-vGIIM4aQwuYco1Xww&usqp=CAU"
              alt="google-translate-logo"
              className="google-image"
            />
          </div>
          <div className="item-text">Account</div>
        </div>
      </div>
      <div className="more-button-container">
        <button className="more-button">More from Google</button>
      </div>
    </div>
  );
};

export default GoogleApps;
