import React from "react";
import "./style.css";

const SchemeColor = ({barvaPalety}) => {
  return (
    <div
      className="scheme-color"
      style={{ backgroundColor: barvaPalety }}
    >
      {barvaPalety}
    </div>
  );
};

export default SchemeColor;
