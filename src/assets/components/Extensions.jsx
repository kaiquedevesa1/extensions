import React from "react";
import DevLens from "../../assets/Images/logo-devlens.svg";

import StyleSpy from "../../assets/Images/logo-style-spy.svg";
import SpeedBoost from "../../assets/Images/logo-speed-boost.svg";
import JSONWizard from "../../assets/Images/logo-json-wizard.svg";
import TabMasterPro from "../../assets/Images/logo-tab-master-pro.svg";
import View from "../../assets/Images/logo-viewport-buddy.svg";
import Markup from "../../assets/Images/logo-markup-notes.svg";
import Grid from "../../assets/Images/logo-grid-guides.svg";
import Palette from "../../assets/Images/logo-palette-picker.svg";
import LinkChecker from "../../assets/Images/logo-link-checker.svg";
import DOMSnap from "../../assets/Images/logo-dom-snapshot.svg";
import Console from "../../assets/Images/logo-console-plus.svg";
import SwitchesSize from "./Button";

const extensions = [
  {
    nome: "DevLens",
    img: DevLens,
    info: "Quickly inspect page layouts and visualize element boudaries.",
  },
  {
    nome: "StyleSpy",
    img: StyleSpy,
    info: " Instantly analyze and copy CSS from any webpage element.",
  },
  {
    nome: "SpeedBoost",
    img: SpeedBoost,
    info: "Optimizes browser resource usage to accelerate pages loading.",
  },
  {
    nome: "JSONWizard",
    img: JSONWizard,
    info: "Formats, validates, and prettifies JSON responses in-browser.",
  },
  {
    nome: "TabMasterPro",
    img: TabMasterPro,
    info: "Organizes browser tabs into groups and sessions.",
  },
  {
    nome: "ViewportBuddy",
    img: View,
    info: " Simulates various screen resolutions directly within the browser.",
  },
  {
    nome: "Markup Notes",
    img: Markup,
    info: "Enables annotation and notes directly onto webpages for collaborative debugging.",
  },
  {
    nome: "GridGuides",
    img: Grid,
    info: "Overlay customizable grids and alignment guides on any webpage.",
  },
  {
    nome: "Palette Picker",
    img: Palette,
    info: "Instantly extracts color palettes from any webpages.",
  },
  {
    nome: "LinkChecker",
    img: LinkChecker,
    info: "Scans and highlights broken links on any pages.",
  },
  {
    nome: "DOM Snapshot",
    img: DOMSnap,
    info: "Capture and export DOM structures quickly.",
  },
  {
    nome: "ConsolePlus",
    img: Console,
    info: "Enhanced developer console with advanced filtering and logging.",
  },
];

function Extensions({ islightMode }) {
  return (
    <div className="extensions-list">
      {extensions.map((ext, index) => (
        <div key={index} className={`extension ${islightMode ? "light" : ""}`}>
          <div className="info-container">
            <img src={ext.img} alt={ext.nome} />
            <div className="info-extension">
              <p id="title">{ext.nome}</p>
              <p className={`info ${islightMode ? "info-light" : ""}`}>
                {ext.info}
              </p>
            </div>
          </div>
          <div
            className={
              islightMode
                ? "button-remove-add button-light "
                : "button-remove-add"
            }
          >
            <button>Remove</button>
            <SwitchesSize />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Extensions;
