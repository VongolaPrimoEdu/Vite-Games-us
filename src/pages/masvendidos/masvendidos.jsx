import { Link } from "react-router-dom"; // Asegúrate de que la ruta del Link esté correctamente importada
import Sales from "../../components/sales/sales"; // Asegúrate de que la ruta sea correcta
import SearchBar from "../../components/searchbar/searchbar"; // Asegúrate de que la ruta del SearchBar sea correcta
//La clasificacion de los mas vendidos
const MasVendidos = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Contenedor flexible para los títulos "Games & Us" y "Los más vendidos" */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        {/* Título "Games & Us" que es un enlace a la página de inicio */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "black",
              marginRight: "50px",
            }}
          >
            Games & Us
          </h2>
        </Link>

        {/* Título "Los más vendidos" centrado al lado de "Games & Us" */}
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "black" }}>
          Los Más Vendidos
        </h1>
      </div>

      {/* SearchBar debajo de los títulos */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <SearchBar />{" "}
        {/* Asegúrate de que el componente SearchBar esté importado correctamente */}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {/* Contenedor de la tabla Sales */}
        <div style={{ flex: 1 }}>
          {/* Llamada al componente Sales que contiene la estructura de imágenes y tabla */}
          <Sales />
        </div>
      </div>
    </div>
  );
};

export default MasVendidos;
