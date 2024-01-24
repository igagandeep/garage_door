
import { HelmetProvider } from 'react-helmet-async';
import Share from './components/Share';

function App() {
  
  return (
    <HelmetProvider>
      <h1>Hello React World</h1>
      <Share />
    </HelmetProvider>
  )
}

export default App
