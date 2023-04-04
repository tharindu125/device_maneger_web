import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Location from './pages/location';
import Devices from './pages/Devices';
import Home from './pages/Home';
import ShowDetails from './pages/showDetails';
import Navbar from './components/navbar';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/Device" element={<Devices/>}/>
                <Route path ="/showdetails" element={<ShowDetails/>}/>
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
