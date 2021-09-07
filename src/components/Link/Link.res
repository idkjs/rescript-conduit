open Emotion

let link = css({
  "fontFamily": Theme.fontFamily,
  "color": Theme.Colors.blue,
  "fontSize": "2.0rem",
  "position": "relative",
  "cursor": "pointer",
  "zIndex": 1,
  "background": "transparent",
  "transition": "100ms color",
  "padding": "2px",
  "&:after": {
    "zIndex": -1,
    "content": `" "`,
    "height": "2px",
    "width": "100%",
    "background": Theme.Colors.blue,
    "position": "absolute",
    "bottom": "-1px",
    "left": 0,
    "transition": "100ms height",
  },
  "&:hover": {
    "transition": "100ms color",
    "color": Theme.Colors.white,
    "&:after": {"transition": "100ms height", "height": "100%"},
  },
})

@react.component
let make = (
  ~href,
  ~matchHref=?,
  ~className=?,
  ~style=?,
  ~activeClassName=?,
  ~activeStyle=?,
  ~matchSubroutes=false,
  ~title=?,
  ~children,
) => {
  let url = Router.useUrl()
  let path = url.path->Belt.List.reduce("", (acc, item) => acc ++ "/" ++ item)
  let compareHref = matchHref->Belt.Option.getWithDefault(href)
  let isActive = matchSubroutes
    ? (path ++ "/")->ReScriptJs.Js.String.startsWith(compareHref) || path->ReScriptJs.Js.String.startsWith(compareHref)
    : path === compareHref || path ++ "/" === compareHref
  let actualHref = Router.makeHref(href)
  <a
    href=actualHref
    ?title
    className={Emotion.cx(
      [className, isActive ? activeClassName : None]->Belt.Array.keepMap(x => x),
    )}
    style=?{switch (style, isActive ? activeStyle : None) {
    | (Some(a), Some(b)) => Some(ReactDOM.Style.combine(a, b))
    | (Some(a), None) => Some(a)
    | (None, Some(b)) => Some(b)
    | (None, None) => None
    }}
    onClick={event => {
      switch (ReactEvent.Mouse.metaKey(event), ReactEvent.Mouse.ctrlKey(event)) {
      | (false, false) =>
        event->ReactEvent.Mouse.preventDefault
        Router.push(href)
      | _ => ()
      }
    }}>
    children
  </a>
}
