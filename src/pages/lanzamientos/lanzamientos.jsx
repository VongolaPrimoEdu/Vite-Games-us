import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import ImageSection from "../../components/Section/imagesection";
//Proximos juegos que saldran
const Lanzamientos = () => {
  // Aquí definimos los datos de ejemplo para las imágenes
  const images = [
    {
      id: 1,
      url: "/public/images/Trending1.jpg",
      rating: "7/10",
    },
    {
      id: 2,
      url: "/public/images/Trending1.jpg",
      rating: "5/10",
    },
    {
      id: 3,
      url: "/public/images/Trending1.jpg",
      rating: "9/10",
    },
    {
      id: 4,
      url: "/public/images/Trending1.jpg",
      rating: "8/10",
    },
    {
      id: 5,
      url: "/public/images/Trending1.jpg",
      rating: "6/10",
    },
    {
      id: 6,
      url: "/public/images/Trending1.jpg",
      rating: "3/10",
    },
  ];
  const images2 = [
    {
      id: 13,
      url: "/public/images/Trending1.jpg",
      rating: "N/a",
    },
    {
      id: 14,
      url: "/public/images/Trending1.jpg",
      rating: "N/a",
    },
    {
      id: 15,
      url: "/public/images/Trending1.jpg",
      rating: "N/a",
    },
    {
      id: 16,
      url: "/public/images/Trending1.jpg",
      rating: "N/a",
    },
    {
      id: 17,
      url: "/public/images/Trending1.jpg",
      rating: "N/a",
    },
    {
      id: 18,
      url: "/public/images/Trending1.jpg",
      rating: "N/a",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Enlace de "Games & Us" a la esquina superior izquierda */}
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "black",
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Games & Us
      </Link>

      <h1 style={{ color: "black", textAlign: "center", marginBottom: "40px" }}>
        Lanzamientos de Este Mes
      </h1>

      {/* Implementamos el componente ImageSection con el título y las imágenes */}
      <ImageSection title="Este Mes" images={images} />

      <ImageSection title="Seis meses o +" images={images} />

      <ImageSection title="Sin fecha" images={images2} />
    </div>
  );
};

export default Lanzamientos;
