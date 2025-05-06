import "./App.css";
import React, { useState } from "react";
import logo from "./assets/images/logo-dark.png";
import LogoL from "./assets/images/logo.svg";
import Light from "./assets/images/icon-sun.svg";
import Dark from "./assets/images/icon-moon.svg";
import Extensions from "./assets/components/Extensions";

function App() {
  const [isLightMode, setIsLightMode] = useState(false); // false significa modo escuro inicialmente

  const toggleMode = () => {
    setIsLightMode((prev) => !prev); // Alterna entre true e false
  };

  return (
    <>
      <div
        className={isLightMode ? " content light-mode" : " content dark-mode"}
      >
        <div
          className={
            isLightMode
              ? " content-container light-mode"
              : " content-container dark-mode"
          }
        >
          <div className="container-logo-mode">
            <div className={isLightMode ? "logo logo-light" : "logo"}>
              <img
                id={isLightMode ? "extension-light" : "extension"}
                src={isLightMode ? LogoL : logo}
                alt=""
              />
              <div
                className={isLightMode ? "button-mode blight" : "button-mode"}
                onClick={toggleMode}
                style={{ cursor: "pointer" }}
              >
                <img src={isLightMode ? Dark : Light} alt="Icone" />
              </div>
            </div>
          </div>
          <div className="extension-buttons">
            <div
              className={
                isLightMode ? "filter light-mode" : " filter dark-mode"
              }
            >
              <div className={isLightMode ? "title-light" : "title "}>
                <h1>Extension List</h1>
              </div>

              <div
                className={
                  isLightMode
                    ? " container-buttons buttons-light"
                    : " container-buttons buttons-dark"
                }
              >
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
              </div>
            </div>
          </div>
          <div className="container-extensions">
            <Extensions islightMode={isLightMode} />
          </div>
        </div>
      </div>
      <button type=""></button>
    </>
  );
}

export default App;
