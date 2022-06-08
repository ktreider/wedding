import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Gallery from './components/pages/Gallery';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path='/details' element={<Details/>} />
        <Route exact path='/gallery' element={<Gallery/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;