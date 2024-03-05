import React from "react";
import "./CoolSpotlightHeading.css";
import profileImg from "../../assets/dinindu_circle.png";
import BouncingButton from "../BouncingButton";

function CoolSpotlightHeading() {
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={profileImg} alt="" width={200} height={200} />
      <p class="large rise">Dinindu</p>
      <p class="small outline">SOFTWARE ENGINEER</p>
      <BouncingButton />
    </div>
  );
}

export default CoolSpotlightHeading;
