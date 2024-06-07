import './App.css';

import NavBar from './navbar';
import Body from './bodyContainer';
import Album from './album';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <NavBar />
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Body/>}/>
              <Route path='/album' element={<Album />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
