import React from "react";
import "./SkillBar.css";

const SkillBar = ({ nombre, porcentaje, variant }) => {
  return (
    <div className={`skill-bar skill-bar--${variant || "default"}`}>
      <div className="skill-info">
        <span>{nombre}</span>
        <span>{porcentaje}%</span>
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
