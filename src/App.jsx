import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

function App() {
  
  return (
    <>
      <h1>Hello World</h1>
      <FacebookShareButton url="https://superlative-bunny-c61262.netlify.app/">
        <FacebookIcon sx={{ fontSize: 65 }} />
      </FacebookShareButton>
      <TwitterShareButton url="https://superlative-bunny-c61262.netlify.app/">
        <TwitterIcon sx={{ fontSize: 65}} url="https://superlative-bunny-c61262.netlify.app/" />
      </TwitterShareButton>
    </>
  )
}

export default App
