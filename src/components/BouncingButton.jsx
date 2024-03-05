import React from "react";

const BouncingButton = () => {
  const styles = {
    padding: "20px"
  };

  const buttonStyles = {
    width: "15px",
    height: "50px",
    borderRadius: "40px",
    border: "4px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
  };

  const dotStyles = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "black",
    marginBottom: "2px",
    animation: "bounce 1.5s infinite",
  };

  return (
    <div style={styles}>
      <a href="#" style={{ textDecoration: "none" }}>
        <div style={buttonStyles}>
          <div style={dotStyles}></div>
        </div>
      </a>
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(24px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default BouncingButton;
