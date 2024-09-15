import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Remove any default margin/padding from the body to ensure full-screen iframe
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.documentElement.style.height = "100%"; // Make sure HTML also takes full height
  }, []);

  return (
    <iframe
      src="http://localhost:8501"
      style={{
        width: "100vw", // 100% of the viewport width
        height: "100vh", // 100% of the viewport height
        border: "none", // No border
        display: "block", // Remove any default inline spacing
      }}
      title="Chatbot"
    ></iframe>
  );
};

export default Chatbot;
