import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/home/home"; // Ajusta la ruta según tu estructura
import Consoles from "./src/pages/consoles/consoles";
import Lanzamientos from "./src/pages/lanzamientos/lanzamientos";
import Juego from "./src/pages/juego/juego";
import MisJuegos from "./src/pages/misjuegos/misjuegos";
import MasVendidos from "./src/pages/masvendidos/masvendidos";
import Login from "./src/components/login/loginpage";
import ErrorPage from "./src/components/errorpage/errorpage";
//La app que renderiza home primero, y almacena todas las rutas a cada página
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consoles" element={<Consoles />} />
      <Route path="/lanzamientos" element={<Lanzamientos />} />
      <Route path="/juego" element={<Juego />} />
      <Route path="/misjuegos" element={<MisJuegos />} />
      <Route path="/masvendidos" element={<MasVendidos />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
