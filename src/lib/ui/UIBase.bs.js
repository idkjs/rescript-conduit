// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Devices from "../helpers/Devices.bs.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Css from "@emotion/css";
import * as UIResponsive from "./UIResponsive.bs.js";

function toFloat(value) {
  if (value === 1) {
    return 1.0;
  } else if (value === 2) {
    return 2.0;
  } else if (value === 3) {
    return 3.0;
  } else if (value === 4) {
    return 4.0;
  } else if (value === 5) {
    return 5.0;
  } else if (value === 6) {
    return 6.0;
  } else if (value === 7) {
    return 7.0;
  } else if (value === 8) {
    return 8.0;
  } else if (value === 9) {
    return 9.0;
  } else if (value === 10) {
    return 10.0;
  } else if (value === 11) {
    return 11.0;
  } else if (value === 12) {
    return 12.0;
  } else {
    return 12.0;
  }
}

function flexBasis(maybeValue) {
  return Belt_Option.getWithDefault(Belt_Option.map(maybeValue, (function (value) {
                    var flexBasisValue = value === "auto" ? "auto" : (toFloat(value) / 12.0 * 100.0).toFixed(1) + "%";
                    return "flex-basis: " + flexBasisValue + ";";
                  })), "");
}

function box(xxs, xs, sm, md, lg, xl, param) {
  return Css.css(Devices.Raw.greaterThan(Devices.Raw.greaterThan(Devices.Raw.greaterThan(Devices.Raw.greaterThan(Devices.Raw.greaterThan(Devices.Raw.greaterThan("", "xxs", flexBasis(xxs)), "xs", flexBasis(xs)), "sm", flexBasis(sm)), "md", flexBasis(md)), "lg", flexBasis(lg)), "xl", flexBasis(xl)));
}

function UIBase(Props) {
  var display = Props.display;
  var justifyContent = Props.justifyContent;
  var flexDirection = Props.flexDirection;
  var alignItems = Props.alignItems;
  var p = Props.p;
  var px = Props.px;
  var py = Props.py;
  var pt = Props.pt;
  var pb = Props.pb;
  var pl = Props.pl;
  var pr = Props.pr;
  var m = Props.m;
  var mx = Props.mx;
  var my = Props.my;
  var mt = Props.mt;
  var mb = Props.mb;
  var ml = Props.ml;
  var mr = Props.mr;
  var xxs = Props.xxs;
  var xs = Props.xs;
  var sm = Props.sm;
  var md = Props.md;
  var lg = Props.lg;
  var xl = Props.xl;
  var width = Props.width;
  var height = Props.height;
  var position = Props.position;
  var top = Props.top;
  var bottom = Props.bottom;
  var left = Props.left;
  var right = Props.right;
  var children = Props.children;
  var tagOpt = Props.tag;
  var classNameOpt = Props.className;
  var tag = tagOpt !== undefined ? tagOpt : "div";
  var className = classNameOpt !== undefined ? classNameOpt : "";
  return React.createElement(tag, {
              children: children,
              className: box(xxs, xs, sm, md, lg, xl, undefined) + " " + className + " " + Css.css(UIResponsive.make(display, justifyContent, flexDirection, alignItems, p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, undefined, width, height, position, top, bottom, left, right, undefined))
            });
}

var make = UIBase;

export {
  toFloat ,
  flexBasis ,
  box ,
  make ,
  
}
/* react Not a pure module */
