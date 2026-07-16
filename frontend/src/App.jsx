import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ReservarTurno from './pages/ReservarTurno';
import Dashboard from './pages/Dashboard';
import Configuracion from './pages/Configuracion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/reservar" element={<ReservarTurno />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;