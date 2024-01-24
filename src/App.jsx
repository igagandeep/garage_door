
import Share from './components/Share';
import { HelmetProvider } from 'react-helmet-async';

// import ShareThis from "./components/ShareThis"

function App() {
  return (
    <HelmetProvider>
      <h1>Hello React World</h1>
      <Share title="my title" description="this is description" url="https://superlative-bunny-c61262.netlify.app/" img="https://i.ibb.co/N2fppGk/logo3.png"/>
      
      {/* <ShareThis /> */}
    </HelmetProvider>
  )
}

export default App
