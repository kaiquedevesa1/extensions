import "./App.css";

import logo from "./assets/images/logo-dark.png";
import icon from "./assets/images/icon-sun.svg";
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
import DOM from "./assets/images/logo-dom-snapshot.svg";
import Console from "./assets/images/logo-console-plus.svg";

function App() {
  return (
    <>
      <div className="content">
        <div className="content-container">
          <div className="container-logo-mode">
            <div className="logo">
              <img id="extension" src={logo} alt="" />
              <div className="dark-mode">
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
          <div className="extension-buttons">
            <div className="filter">
              <div className="title">
                <h1>Extension List</h1>
              </div>

              <div className="container-buttons">
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
              </div>
            </div>
          </div>
          <div className="container-extensions">
            <div className="extensions-list">
              <div className="extension">
                <div className="img">
                  <img src={DevLens} alt="" />
                  <div className="info-extension">
                    <p>DevLens</p>
                    <p>
                      Quickly inspect page layouts and visualize element
                      boudaries.
                    </p>
                  </div>
                  <div className="button-remove-add">
                    <button>aa</button>
                    <button>aaa</button>
                  </div>
                </div>
              </div>
              <div className="extension">
                <img src={StyleSpy} alt="" />
                <p>StyleSpy</p>
              </div>
              <div className="extension">
                <img src={SpeedBoost} alt="" />
                <p>SpeedBoost</p>
              </div>
              <div className="extension">
                <img src={JSONWizard} alt="" />
                <p>JSONWizard</p>
              </div>
              <div className="extension">
                <img src={TabMasterPro} alt="" />
              </div>
              <div className="extension">
                <img src={View} alt="" />
              </div>
              <div className="extension">
                <img src={Markup} alt="" />
              </div>
              <div className="extension">
                <img src={Grid} alt="" />
              </div>
              <div className="extension">
                <img src={Palette} alt="" />
              </div>
              <div className="extension">
                <img src={LinkChecker} alt="" />
              </div>
              <div className="extension">
                <img src={DOM} alt="" />
              </div>
              <div className="extension">
                <img src={Console} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
