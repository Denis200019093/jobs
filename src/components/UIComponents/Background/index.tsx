import React from "react";

const Background: React.FC<{ background?: string }> = (props) => {
  return (
    <img
      src={props.background}
      alt="alt"
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "left",
        position: "absolute",
        borderRadius: "5px",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Background;
