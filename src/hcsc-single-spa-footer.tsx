import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Root } from "./components/Root";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => {
    let footer = document.getElementsByTagName("footer")[0];
    let el = document.getElementById("footer");
    if (!el) {
      el = document.createElement("section");
      el.id = "footer";
      footer.appendChild(el);
    }
    return el;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
