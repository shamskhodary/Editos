import React from "react";
import Typewriter from "typewriter-effect";

const LogoWriter = () => {
  return (
    <div className="logo">
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
