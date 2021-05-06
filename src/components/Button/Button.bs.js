// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CssJs from "bs-css-emotion/src/CssJs.bs.js";
import * as Theme from "../../lib/Theme.bs.js";
import * as React from "react";

function button(block) {
  return CssJs.style([
              CssJs.background(CssJs.hex(Theme.Colors.blue)),
              CssJs.borderStyle(CssJs.none),
              CssJs.color(CssJs.hex(Theme.Colors.white)),
              CssJs.height(CssJs.rem(5.5)),
              CssJs.minWidth(block ? CssJs.pct(100.0) : CssJs.rem(20.0)),
              CssJs.borderRadius(Theme.Radius.small),
              CssJs.cursor(CssJs.pointer),
              CssJs.fontFamily(Theme.fontFamily),
              CssJs.fontSize(CssJs.rem(2.0))
            ]);
}

function Button(Props) {
  var children = Props.children;
  var blockOpt = Props.block;
  var block = blockOpt !== undefined ? blockOpt : false;
  return React.createElement("button", {
              className: button(block)
            }, children);
}

var make = Button;

export {
  button ,
  make ,
  
}
/* CssJs Not a pure module */
