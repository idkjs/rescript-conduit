// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Theme from "../../lib/theme/Theme.bs.js";
import * as React from "react";
import * as Render from "../../lib/helpers/Render.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Css from "@emotion/css";

var wrapper = Css.css({
      width: "100%"
    });

var label = Css.css({
      fontSize: "2.0rem",
      color: Theme.Colors.black,
      fontFamily: Theme.fontFamily,
      display: "block",
      marginBottom: "0.8rem"
    });

var input = Css.css({
      height: "5.6rem",
      width: "100%",
      background: Theme.Colors.lightBlue1,
      font: "2.0rem " + Theme.fontFamily,
      borderStyle: "none",
      borderRadius: Theme.Radius.small,
      padding: "0 2.4rem",
      boxSizing: "border-box",
      color: Theme.Colors.black,
      outlineStyle: "none",
      "&::placeholder": {
        color: Theme.Colors.gray2
      }
    });

var Styles = {
  wrapper: wrapper,
  label: label,
  input: input
};

function Input(Props) {
  var placeholder = Props.placeholder;
  var name = Props.name;
  var onChange = Props.onChange;
  var type_ = Props.type_;
  var label$1 = Props.label;
  var tmp = {
    className: input
  };
  if (name !== undefined) {
    tmp.name = Caml_option.valFromOption(name);
  }
  if (placeholder !== undefined) {
    tmp.placeholder = Caml_option.valFromOption(placeholder);
  }
  if (type_ !== undefined) {
    tmp.type = Caml_option.valFromOption(type_);
  }
  if (onChange !== undefined) {
    tmp.onChange = Caml_option.valFromOption(onChange);
  }
  return React.createElement("div", {
              className: wrapper
            }, label$1 !== undefined ? React.createElement("label", {
                    className: label
                  }, Render.s(label$1)) : null, React.createElement("input", tmp));
}

var make = Input;

export {
  Styles ,
  make ,
  
}
/* wrapper Not a pure module */
