open Storybook
open Render

storiesOf("Link", Helpers.storybookModule)
->add("Basic usage", () => {
  <Link href="signup"> {`Sign up`->s} </Link>
})
->ignore
