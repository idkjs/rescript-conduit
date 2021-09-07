type user = {
  username: string,
  email: string,
  password: string,
}

type signupPayload = {user: user}

@decco
type loggedUser = {token: string}

@decco
type response = {user: loggedUser}

let handleSignup = (payload: signupPayload) =>
  QueryClient.post(~url="/users", payload)->Promise.then(json =>{
    Js.log(("API JSON =>", json))
    Js.log(("API JSON PAYLOAD =>", payload))
    json->response_decode->Promise.resolve
  })

let useSignup = () => {
  let handleSuccess = React.useCallback0((result, _, _) => {
    switch result {
    | Ok(response) => Js.log(("Token =>", response.user.token))
    | Error(error) => Js.log(("API Error =>", error))
    }

    Promise.resolve()
  })

  let {mutate} = ReactQuery.useMutation(
    ReactQuery.mutationOptions(
      //
      ~mutationKey="signup",
      ~mutationFn=handleSignup,
      ~onSuccess=handleSuccess,
      (),
    ),
  )

  let handleSubmit = _ => {
    mutate(.
      {
        user: {
          username: "john",
          email: "john@doe.com",
          password: "myRe4l1ySaf3Passw0rd!#",
        },
      },
      None,
    )
  }

  handleSubmit
}
