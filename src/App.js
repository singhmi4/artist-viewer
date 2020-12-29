// React Router DOM
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'

// Components
import Navbar from './components/layout/Navbar'

// Pages
import Home from './pages/Home'

// Material UI Components
import { CssBaseline, Container } from '@material-ui/core'

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Switch>
          <Home exact path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
