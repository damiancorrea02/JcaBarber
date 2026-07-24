import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/home';
import ReservarTurno from './pages/ReservarTurno';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path='/reservar' element = {<ReservarTurno />}/>

          <Route path='/admin' element = {<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;