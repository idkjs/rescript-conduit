open Render

GlobalStyles.includeStyles()

let queryClient = ReactQuery.Provider.createClient()

@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  <ReactQuery.Provider client={queryClient}>
    {switch url.path {
    | list{} => <Signin />
    | list{"signup"} => <Signup />
    | list{"signin"} => <Signin />
    | _ => "Not found..."->s
    }}
  </ReactQuery.Provider>
}
