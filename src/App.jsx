
import { Helmet } from 'react-helmet';
import { FacebookShareButton, FacebookIcon } from 'react-share';

function App() {
  const item = {
    title: "Prepr",
    img: "https://superlative-bunny-c61262.netlify.app/preprLogo2.png"
  };

  return (
    <>
      <Helmet>
        <title>{item.title}</title>
        <meta property="og:title" content={item.title} />
        <meta property="og:image" content={item.img} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Other meta tags as needed */}
      </Helmet>

      <h1>Hello World</h1>
      <FacebookShareButton url="https://superlative-bunny-c61262.netlify.app/">
        <FacebookIcon size={65} />
      </FacebookShareButton>
      {/* <img src={logo} /> */}
    </>
  );
}

export default App;
