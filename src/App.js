import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Gallery from './components/pages/Gallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/details' component={Details} />
        <Route path='/gallery' component={Gallery} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
