import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Location from './pages/location';
import Devices from './pages/Devices';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/Device" element={<Devices/>}/>
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
