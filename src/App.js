// React Router DOM
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'

// Context
import MusixMatchProvider from './context/context'

// Components
import Navbar from './components/layout/Navbar'

// Pages
import Home from './pages/Home'
import Albums from './pages/Albums'
import Favourites from './pages/Favourites'

// Material UI Components
import { CssBaseline, Container } from '@material-ui/core'

function App() {
  return (
    <MusixMatchProvider>
        <Router>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/albums/:artist_id" component={Albums} />
          </Switch>
        </Container>
      </Router>
    </MusixMatchProvider>
  );
}

export default App;
