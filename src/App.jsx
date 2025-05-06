import "./App.css";
import React, { useState } from "react";
import logo from "./assets/images/logo-dark.png";
import LogoL from "./assets/images/logo.svg";
import Light from "./assets/images/icon-sun.svg";
import Dark from "./assets/images/icon-moon.svg";
import DevLens from "./assets/images/logo-devlens.svg";
import StyleSpy from "./assets/images/logo-style-spy.svg";
import SpeedBoost from "./assets/images/logo-speed-boost.svg";
import JSONWizard from "./assets/images/logo-json-wizard.svg";
import TabMasterPro from "./assets/images/logo-tab-master-pro.svg";
import View from "./assets/images/logo-viewport-buddy.svg";
import Markup from "./assets/images/logo-markup-notes.svg";
import Grid from "./assets/images/logo-grid-guides.svg";
import Palette from "./assets/images/logo-palette-picker.svg";
import LinkChecker from "./assets/images/logo-link-checker.svg";
import DOMSnap from "./assets/images/logo-dom-snapshot.svg";
import Console from "./assets/images/logo-console-plus.svg";
import SwitchesSize from "./assets/components/Button";

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
            <div className="extensions-list">
              <div className="extension">
                <div className="info-container">
                  <img src={DevLens} alt="" />
                  <div className="info-extension">
                    <p id="title">DevLens</p>
                    <p id="info">
                      Quickly inspect page layouts and visualize element
                      boudaries.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={StyleSpy} alt="" />
                  <div className="info-extension">
                    <p id="title">StyleSpy</p>
                    <p id="info">
                      Instantly analyze and copy CSS from any webpage element.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={SpeedBoost} alt="" />
                  <div className="info-extension">
                    <p id="title">SpeedBoost</p>
                    <p id="info">
                      Optimizes browser resource usage to accelerate pages
                      loading.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={JSONWizard} alt="" />
                  <div className="info-extension">
                    <p id="title">JSONWizard</p>
                    <p id="info">
                      Formats, validates, and prettifies JSON responses
                      in-browser.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={TabMasterPro} alt="" />
                  <div className="info-extension">
                    <p id="title">TabMasterPro</p>
                    <p id="info">
                      Organizes browser tabs into groups and sessions.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={View} alt="" />
                  <div className="info-extension">
                    <p id="title">ViewportBuddy</p>
                    <p id="info">
                      Simulates various screen resolutions directly within the
                      browser.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={Markup} alt="" />
                  <div className="info-extension">
                    <p id="title">Markup Notes</p>
                    <p id="info">
                      Enables annotation and notes directly onto webpages for
                      collaborative debugging.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={Grid} alt="" />
                  <div className="info-extension">
                    <p id="title">GridGuides</p>
                    <p id="info">
                      Overlay customizable grids and alignment guides on any
                      webpage.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={Palette} alt="" />
                  <div className="info-extension">
                    <p id="title">Palette Picker</p>
                    <p id="info">
                      Instantly extracts color palettes from any webpages.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={LinkChecker} alt="" />
                  <div className="info-extension">
                    <p id="title">LinkChecker</p>
                    <p id="info">
                      Scans and highlights broken links on any pages.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={DOMSnap} alt="" />
                  <div className="info-extension">
                    <p id="title">DOM Snapshot</p>
                    <p id="info">Capture and export DOM structures quickly.</p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>

                  <SwitchesSize />
                </div>
              </div>
              <div className="extension">
                <div className="info-container">
                  <img src={Console} alt="" />
                  <div className="info-extension">
                    <p id="title">ConsolePlus</p>
                    <p id="info">
                      Enhanced developer console with advanced filtering and
                      logging.
                    </p>
                  </div>
                </div>
                <div className="button-remove-add">
                  <button>Remove</button>
                  <SwitchesSize />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type=""></button>
    </>
  );
}

export default App;
