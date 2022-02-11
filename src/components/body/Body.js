import React from "react";
import "./BodyStyle.css";
import { AiFillFile } from "react-icons/ai";
import InputNav from "./InputNav";
const Body = () => {
  return (
    <div className="body">
      <section className="type-btn">
        <button className="text-button">
          <span className="btn">
            <AiFillFile className="doc-icon" />
            Text
          </span>
        </button>
        <button className="document-button">
          <span className="btn">
            <AiFillFile className="doc-icon" />
            Documents
          </span>
        </button>
      </section>
      <section>
        <InputNav />
      </section>
    </div>
  );
};

export default Body;
