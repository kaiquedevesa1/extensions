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
import Palette from "./assets/images/icon-sun.svg";
import LinkChecker from "./assets/images/icon-sun.svg";
import DOM from "./assets/images/icon-sun.svg";
import Console from "./assets/images/icon-sun.svg";

function App() {
  return (
    <>
      <div className="content-container">
        <div className="container-logo-mode">
          <div className="logo">
            <img id="extension" src={logo} alt="" />
            <div className="dark-mode">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
        <div className="container-extension">
          <div className="filter">
            <div className="extension-list">
              <h1>Extension List</h1>
            </div>

            <div className="container-buttons">
              <button>All</button>
              <button>Active</button>
              <button>Inactive</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
