
import Share from './components/Share';
import { HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// import ShareThis from "./components/ShareThis"

function App() {
  return (
    <HelmetProvider>
    <Router>
      <h1>Hello React World</h1>

      {/* Create a button or link to navigate to the SharePage */}
      <Link to="/share">Share</Link>

      {/* Define the route for the SharePage */}
      <Routes>
        <Route path="/share" element={<Share />} />
      </Routes>
    </Router>
  </HelmetProvider>
  )
}

export default App
