
import Share from './components/Share';
import { HelmetProvider } from 'react-helmet-async';

// import ShareThis from "./components/ShareThis"

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <h1>Hello React World</h1>
      <Share />
      
      {/* <ShareThis /> */}
    </HelmetProvider>
  )
}

export default App
