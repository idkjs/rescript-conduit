open Emotion

let card = css({
  "background": Theme.Colors.lightBlue1,
  "borderRadius": Theme.Radius.medium,
  "padding": "3.2rem",
})

@react.component
let make = (~children) => {
  <div className={card}> children </div>
}
