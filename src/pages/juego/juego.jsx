import { useState } from "react";
import PriceList from "../../components/games/pricelist";
import GameDescription from "../../components/games/gamedescription";
import Reviews from "../../components/games/reviews";
//Pagina del juego con su review, su informacion, imagen y precios
const Juego = () => {
  const [reviews, setReviews] = useState([]);

  const prices = [
    { platform: "Amazon", amount: 59.99 },
    { platform: "Steam", amount: 47.1 },
    { platform: "Epic Games", amount: 59.99 },
    { platform: "Play Store", amount: 51.99 },
    { platform: "Nintendo", amount: 69.99 },
    { platform: "Xbox Live", amount: 59.99 },
  ];

  const gameDetails = {
    title: "Persona 5",
    rating: "8/10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sollicitudin massa quis placerat. Pellentesque eu laoreet eros ut mi interdum condimentum. Nulla vitae ultrices sem, a hendrerit neque. Morbi mattis facilisis nulla quis dictum.",
    genres: ["Acción", "Aventura", "Simulador"],
    developer: "ATLUS",
    publisher: "SEGA",
  };

  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div
      style={{
        color: "black",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column", // Aplica un layout de columna
        height: "100vh", // Hace que el contenedor ocupe toda la altura de la pantalla
        justifyContent: "space-between", // Alinea los elementos, dejando espacio entre ellos
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          GAMES & US
        </h1>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Persona 5</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Lista de precios en la izquierda */}
          <div style={{ flex: 1, maxWidth: "250px" }}>
            <PriceList prices={prices} />
          </div>

          {/* Imagen centrada entre los contenedores */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="/public/images/Trending1.jpg" // Asegúrate de tener la imagen en la ruta correcta
              alt="Juego"
              style={{
                maxWidth: "300px", // Ajusta el tamaño de la imagen
                maxHeight: "400px",
                objectFit: "cover", // Mantiene la proporción de la imagen sin deformarla
              }}
            />
          </div>

          {/* Descripción del juego a la derecha */}
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <GameDescription gameDetails={gameDetails} />
          </div>
        </div>
      </div>

      {/* Reseñas centradas y más grandes abajo */}
      <div
        style={{
          width: "80%", // Aumenta el tamaño del contenedor (80% del ancho)
          maxWidth: "900px", // Limita el ancho máximo a 900px
          margin: "40px auto", // Centra el contenedor y agrega un espacio superior
          padding: "20px",

          borderRadius: "8px", // Bordes redondeados
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra para el contenedor
        }}
      >
        <Reviews reviews={reviews} onAddReview={handleAddReview} />
      </div>
    </div>
  );
};

export default Juego;
