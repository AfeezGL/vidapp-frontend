import Header from './components/Header'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Trending from './components/Trending'
import Subcriptions from './components/Subscriptions'
import Library from './components/Library'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" exact render={(props) => (
          <>
            <HomePage/>
          </>
        )}/>
        <Route path="/trending" render={(props) => (
          <>
            <Trending/>
          </>
        )}/>
        <Route path="/subsriptions" render={(props) => (
          <>
            <Subcriptions/>
          </>
        )}/>
        <Route path="/library" render={(props) => (
          <>
            <Library/>
          </>
        )}/>
        <Nav/>
      </div>
    </Router>
  );
}

export default App;
