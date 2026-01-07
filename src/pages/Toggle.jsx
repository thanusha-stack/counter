import React, { useState } from "react";

const Toggle = () => {
  const [dark, setDark] = useState(false);

  const containerStyle = {
    minHeight:"100vh",
    backgroundColor: dark?"#000000":"#f5f5f5",
    color: dark ? "#ffffff":"#000000",
    padding:"20px"
  };

  return (
    <>
      <button className="btn btn-success" onClick={() => setDark(prev => !prev)}>
        {dark? "Light":"Dark"}
      </button>

      <div style={containerStyle}>
        CONTENT
      </div>
    </>
  );
};

export default Toggle;
