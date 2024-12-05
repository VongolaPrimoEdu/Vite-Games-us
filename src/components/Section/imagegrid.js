import { useState } from "react";
import PropTypes from "prop-types";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
//Image grid original al que puedes añadir juegos a favoritos, o ir a su descripcion
const ImageGrid = () => {
  const images = [
    { title: "Persona 5", imageUrl: "/public/images/Trending1.jpg", rating: 8 },
    { title: "Persona 4", imageUrl: "/public/images/Trending1.jpg", rating: 6 },
    {
      title: "Smash Bros Melee",
      imageUrl: "/public/images/Trending1.jpg",
      rating: 3,
    },
    {
      title: "Rivals of Aether 2",
      imageUrl: "/public/images/Trending1.jpg",
      rating: 5,
    },
    { title: "Deadlock", imageUrl: "/public/images/Trending1.jpg", rating: 5 },
    {
      title: "Smash Bros Ultimate",
      imageUrl: "/public/images/Trending1.jpg",
      rating: 5,
    },
  ];

  return /*#__PURE__*/ _jsx("div", {
    style: styles.grid,
    children: images.map((image, index) =>
      /*#__PURE__*/ _jsx(
        ImageCard,
        {
          title: image.title,
          imageUrl: image.imageUrl,
          rating: image.rating,
        },
        index
      )
    ),
  });
};

const ImageCard = ({ title, imageUrl, rating }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((fav) => fav.title === title);
  });

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      // Eliminar de favoritos
      const updatedFavorites = favorites.filter((fav) => fav.title !== title);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Añadir a favoritos
      favorites.push({ title, imageUrl, rating });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: styles.card,
    children: [
      /*#__PURE__*/ _jsxs("div", {
        style: styles.imageContainer,
        children: [
          /*#__PURE__*/ _jsx("div", {
            style: {
              ...styles.favoriteIcon,
              color: isFavorite ? "gold" : "#ccc",
            },
            onClick: toggleFavorite,
            children: "\u2605",
          }),
          /*#__PURE__*/ _jsxs("div", {
            style: styles.rating,
            children: [rating, "/10"],
          }),
          // Envolvemos la imagen con el enlace a la página del juego
          /*#__PURE__*/ _jsx(Link, {
            to: `/juego`, // Redirige a la página del juego usando el título
            children: /*#__PURE__*/ _jsx("img", {
              src: imageUrl,
              alt: title,
              style: styles.image,
            }),
          }),
        ],
      }),
      /*#__PURE__*/ _jsx("div", {
        style: styles.title,
        children: title,
      }),
    ],
  });
};

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px",
    flex: 1,
    height: "100%",
    overflowY: "auto",
    boxSizing: "border-box",
  },
  card: {
    position: "relative",
    backgroundColor: "#402080",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imageContainer: {
    position: "relative",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  favoriteIcon: {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "20px",
    cursor: "pointer",
    userSelect: "none",
  },
  rating: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "5px 8px",
    borderRadius: "4px",
  },
  title: {
    padding: "10px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default ImageGrid;
