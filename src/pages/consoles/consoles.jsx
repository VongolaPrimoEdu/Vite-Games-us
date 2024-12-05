import { Link } from "react-router-dom"; // Asegúrate de que la ruta del Link esté correctamente importada
import SideMenu from "../../components/menu/sidemenu";
import SearchBar from "../../components/searchbar/searchbar";
import ImageGrid from "../../components/Section/imagegrid";
//Página de consolas donde se añaden juegos a favoritos o se buscarian segun su tipo
const containerStyle = {
  display: "flex",
  flexDirection: "row", // Coloca los elementos (menu y grid) en fila
  height: "100vh", // Altura completa de la ventana
  padding: "20px",
};

const titleStyle = {
  fontSize: "28px", // Tamaño de fuente del título
  fontWeight: "bold", // Negrita
  color: "black", // Color negro
  marginBottom: "20px", // Espaciado entre el título y el contenido
};

const Consoles = () => {
  return (
    <>
      {/* Título Game & Us en la parte superior izquierda */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 style={titleStyle}>Game & Us</h2>
      </Link>

      {/* Componente de búsqueda */}
      <SearchBar />

      {/* Título Consolas ubicado donde estaba originalmente */}
      <h1 style={titleStyle}>Consolas</h1>

      {/* Contenedor de la barra lateral y la cuadrícula de imágenes */}
      <div style={containerStyle}>
        <SideMenu />
        <ImageGrid />
      </div>
    </>
  );
};

export default Consoles;
