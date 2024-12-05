import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Grid al que son añadidos las imagenes que pones en favorito en el image grid, y va a la página del juego en cuestión
const FavoritesGrid = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // Usamos el hook useNavigate para la redirección

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleClick = (image) => {
    // Redirige a la página Juego.jsx, pasando los datos del juego como estado
    navigate("/juego", { state: { ...image } });
  };

  return /*#__PURE__*/ _jsx("div", {
    style: styles.grid,
    children: favorites.map((image, index) =>
      /*#__PURE__*/ _jsxs(
        "div",
        {
          style: styles.card,
          children: [
            /*#__PURE__*/ _jsx("img", {
              src: image.imageUrl,
              alt: image.title,
              style: styles.image,
              onClick: () => handleClick(image), // Llamada a handleClick al hacer clic en la imagen
            }),
            /*#__PURE__*/ _jsx("div", {
              style: styles.title,
              children: image.title,
            }),
            /*#__PURE__*/ _jsx("div", {
              style: styles.favoriteIcon,
              onClick: () => handleRemoveFavorite(index),
              children: "★",
            }),
          ],
        },
        index
      )
    ),
  });
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#333",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    cursor: "pointer", // Indicamos que la imagen es clickeable
  },
  title: {
    padding: "10px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  },
  favoriteIcon: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    color: "gold",
    cursor: "pointer",
  },
};

export default FavoritesGrid;
