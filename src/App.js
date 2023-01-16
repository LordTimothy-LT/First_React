// import logo from './logo.svg';
import { Router } from 'react-router-dom';
import './App.css';
import Home from './pages/home/components/Home';
import { Routes, Route} from 'react-router-dom';
import Footer from './pages/home/components/Footer';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
  );
}

export default App;
