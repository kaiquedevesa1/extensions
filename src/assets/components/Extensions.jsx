import React, { useState, useEffect } from "react";
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
import SwitchesSize from "./Switch";

const extensionsStatic = [
  {
    id: 1,
    active: true,
    nome: "DevLens",
    img: DevLens,
    info: "Quickly inspect page layouts and visualize element boudaries.",
  },
  {
    id: 2,
    active: false,
    nome: "StyleSpy",
    img: StyleSpy,
    info: " Instantly analyze and copy CSS from any webpage element.",
  },
  {
    id: 3,
    active: true,
    nome: "SpeedBoost",
    img: SpeedBoost,
    info: "Optimizes browser resource usage to accelerate pages loading.",
  },
  {
    id: 4,
    active: false,
    nome: "JSONWizard",
    img: JSONWizard,
    info: "Formats, validates, and prettifies JSON responses in-browser.",
  },
  {
    id: 5,
    active: false,
    nome: "TabMasterPro",
    img: TabMasterPro,
    info: "Organizes browser tabs into groups and sessions.",
  },
  {
    id: 6,
    active: false,
    nome: "ViewportBuddy",
    img: View,
    info: " Simulates various screen resolutions directly within the browser.",
  },
  {
    id: 7,
    active: false,
    nome: "Markup Notes",
    img: Markup,
    info: "Enables annotation and notes directly onto webpages for collaborative debugging.",
  },
  {
    id: 8,
    active: false,
    nome: "GridGuides",
    img: Grid,
    info: "Overlay customizable grids and alignment guides on any webpage.",
  },
  {
    id: 9,
    active: false,
    nome: "Palette Picker",
    img: Palette,
    info: "Instantly extracts color palettes from any webpages.",
  },
  {
    id: 10,
    active: false,
    nome: "LinkChecker",
    img: LinkChecker,
    info: "Scans and highlights broken links on any pages.",
  },
  {
    id: 11,
    active: false,
    nome: "DOM Snapshot",
    img: DOMSnap,
    info: "Capture and export DOM structures quickly.",
  },
  {
    id: 12,
    active: false,
    nome: "ConsolePlus",
    img: Console,
    info: "Enhanced developer console with advanced filtering and logging.",
  },
];

function Extensions({ isLightMode, filter }) {
  const [extensionList, setExtensionList] = useState(extensionsStatic);
  const desativarExtensao = (id) => {
    toggleExtension(id, false);
  };

  const toggleExtension = (id, newActive) => {
    setExtensionList((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.id === id ? { ...ext, active: newActive } : ext
      )
    );
  };

  const filtered = extensionList.filter((ext) => {
    if (filter === "active") return ext.active;
    if (filter === "inactive") return !ext.active;
    return true;
  });

  useEffect(() => {
    document.body.classList.remove("body-light", "dark");
    document.body.classList.add(isLightMode ? "body-light" : "dark");
  }, [isLightMode]);

  return (
    <div className="extensions-list">
      {filtered.map((ext) => (
        <div key={ext.id} className={`extension ${isLightMode ? "light" : ""}`}>
          <div className="info-container">
            <img src={ext.img} alt={ext.nome} />
            <div className="info-extension">
              <p id="title">{ext.nome}</p>
              <p className={`info ${isLightMode ? "info-light" : ""}`}>
                {ext.info}
              </p>
            </div>
          </div>

          <div
            className={
              isLightMode
                ? "button-remove-add button-light"
                : "button-remove-add"
            }
          >
            <button onClick={() => desativarExtensao(ext.id)}>Remove</button>

            <SwitchesSize
              isChecked={ext.active}
              onChange={(checked) => toggleExtension(ext.id, checked)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Extensions;
