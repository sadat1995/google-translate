import React, { useState } from "react";
import "./BodyStyle.css";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSwap } from "react-icons/ai";
import InputBody from "./InputBody";

const InputNav = () => {
  const [detectActive, setDetectActive] = useState(false);
  const [englishActive, setEnglishActive] = useState(true);
  const [persianActive, setPersianActive] = useState(false);
  let detect_class = detectActive
    ? "nav-btn active-btn detect-btn"
    : "nav-btn input-btn detect-btn";
  let english_class = englishActive
    ? "nav-btn active-btn  blue-text"
    : "nav-btn input-btn blue-text hide-persian";
  let persian_class = persianActive
    ? "nav-btn active-btn  blue-text"
    : "nav-btn input-btn blue-text hide-persian";

  const handleDetectedLanguage = () => {
    setDetectActive(true);
    setEnglishActive(false);
    setPersianActive(false);
  };

  const englishTranslation = () => {
    setDetectActive(false);
    setPersianActive(false);
    setEnglishActive(true);
  };
  const persianTranslation = () => {
    setDetectActive(false);
    setEnglishActive(false);
    setPersianActive(true);
  };
  const handleSwitch = () => {
    englishActive ? persianTranslation() : englishTranslation();
  };
  return (
    <div>
      <div className="card">
        <div className="nav">
          <div className="btn-container">
            <button className={detect_class} onClick={handleDetectedLanguage}>
              <strong>DETECT LANGUAGE</strong>
            </button>
            <button className={english_class} onClick={englishTranslation}>
              <strong>ENGLISH</strong>
            </button>
            <button className={persian_class} onClick={persianTranslation}>
              <strong>PERSIAN</strong>
            </button>
            <button className="icon-btn arrow-icon">
              <strong>
                <a className="icon">
                  <AiOutlineDown />
                </a>
              </strong>
            </button>
          </div>
          <div className="translation-btn">
            <button className="icon-btn switch-icon" onClick={handleSwitch}>
              <strong>
                <a className="icon">
                  <AiOutlineSwap />
                </a>
              </strong>
            </button>
            <div className="division btn-division">
              <button className={persian_class} onClick={persianTranslation}>
                <strong>ENGLISH</strong>
              </button>
              <button className={english_class} onClick={englishTranslation}>
                <strong>PERSIAN</strong>
              </button>
              <button className=" icon-btn arrow-icon">
                <strong>
                  <a className="icon">
                    <AiOutlineDown />
                  </a>
                </strong>
              </button>
            </div>
          </div>
        </div>
        <InputBody englishActive={englishActive} />
      </div>
    </div>
  );
};

export default InputNav;
