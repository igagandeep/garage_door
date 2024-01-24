
import Share from './components/Share';
import { Helmet } from 'react-helmet';
function App() {

  return (
    <>
      <Helmet>


        <title>Demo</title>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content="https://superlative-bunny-c61262.netlify.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content="Demo" />
        <meta property="quote" content="Demo1" />
        <meta name="description" content="description" />
        <meta property="image" content="https://superlative-bunny-c61262.netlify.app/preprLogo2.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="I am happy to share my achievement" />
        <meta property="og:quote" content="I am happy to share my achievement" />
        <meta property="og:hashtag" content="yo" />
        <meta property="og:image" content="https://superlative-bunny-c61262.netlify.app/preprLogo2.png" />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://superlative-bunny-c61262.netlify.app/" />
        <meta property="og:site_name" content="DSite name" />
        <meta property="og:description" content="This is so cool" />
      </Helmet>
      <h1>Hello React World</h1>
      <Share />
    </>
  )
}

export default App
