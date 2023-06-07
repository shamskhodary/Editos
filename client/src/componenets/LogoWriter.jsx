import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const LogoWriter = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate('/')}>
      <Typewriter
        style={{ color: "white" }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Editor")
            .pauseFor(500)
            .deleteChars(1)
            .start()
            .typeString("s");
        }}
      />
    </div>
  );
};

export default LogoWriter;
