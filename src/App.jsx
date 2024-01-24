
import { HelmetProvider } from 'react-helmet-async';
import Share from './components/Share';

function App() {
  
  return (
    <HelmetProvider>
      <h1>Hello World</h1>
      <Share />
    </HelmetProvider>
  )
}

export default App
