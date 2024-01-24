// import logo from "../public/preprLogo2.png";
import {
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

function App() {
  
  return (
    <>
      <h1>Hello World</h1>
      <FacebookShareButton url="https://superlative-bunny-c61262.netlify.app/">
        <FacebookIcon sx={{ fontSize: 65 }} />
      </FacebookShareButton>
      {/* <img src={logo} /> */}
    </>
  )
}

export default App
