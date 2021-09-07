// let apiUrl = "https://conduit-api-fp.herokuapp.com/api"
let apiUrl = "https://conduit-api-realworld.herokuapp.com/api"
let apiUrl2 = "http://localhost:3003/counters"
let post = (~url, body) => {
  open Promise
  Js.log(`${apiUrl}${url}`)
  Fetch.fetch(
    `${apiUrl}${url}`,
    {
      "method": "POST",
      "body": Js.Json.stringifyAny(body),
      "headers": {
        "Content-Type": "application/json",
      },
    },
  )->then(response => Fetch.Response.json(response))
}
