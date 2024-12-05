import { useState } from "react";
import PropTypes from "prop-types";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Seccion de imagenes en el de proximo lanzamiento que nos deja saber cuando salen los juegos, en que periodo etc
const ImageSection = ({ title, images }) => {
  const [reviews, setReviews] = useState(
    images.map((img) => ({
      id: img.id,
      rating: img.rating,
    }))
  );
  const handleFavoriteClick = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? {
              ...review,
              favorite: !review.favorite,
            }
          : review
      )
    );
  };
  const styles = {
    container: {
      padding: "20px",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "black",
    },
    grid: {
      display: "flex",
      gap: "10px", // Reduce el espacio entre las tarjetas
      justifyContent: "center",
      flexWrap: "wrap", // Permite que las tarjetas se ajusten automáticamente si no caben
      maxWidth: "1200px", // Limita el ancho total del grid
      margin: "0 auto", // Centra el grid en la pantalla
    },
    card: {
      position: "relative",
      width: "150px", // Ajusta el ancho de la tarjeta para que quepan más
      height: "200px", // Ajusta la altura de la tarjeta
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundSize: "cover", // Asegura que la imagen ocupe todo el espacio
      backgroundPosition: "center",
    },
    favorite: {
      position: "absolute",
      top: "10px",
      left: "10px",
      cursor: "pointer",
    },
    rating: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "12px",
      fontSize: "12px",
    },
    description: {
      position: "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "4px",
      fontSize: "14px",
      textAlign: "center",
    },
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: styles.container,
    children: [
      /*#__PURE__*/ _jsx("h2", {
        style: styles.title,
        children: title,
      }),
      /*#__PURE__*/ _jsx("div", {
        style: styles.grid,
        children: images.map((image) => {
          const currentReview = reviews.find((r) => r.id === image.id);
          return /*#__PURE__*/ _jsxs(
            "div",
            {
              style: {
                ...styles.card,
                backgroundImage: `url(${image.url})`, // Usamos la imagen como fondo
              },
              children: [
                /*#__PURE__*/ _jsx("div", {
                  style: {
                    ...styles.favorite,
                    color:
                      currentReview !== null &&
                      currentReview !== void 0 &&
                      currentReview.favorite
                        ? "gold"
                        : "#333",
                  },
                  onClick: () => handleFavoriteClick(image.id),
                  children: "\u2605",
                }),
                /*#__PURE__*/ _jsx("div", {
                  style: styles.rating,
                  children:
                    currentReview === null || currentReview === void 0
                      ? void 0
                      : currentReview.rating,
                }),
                /*#__PURE__*/ _jsx("div", {
                  style: styles.description,
                  children: image.title,
                }),
              ],
            },
            image.id
          );
        }),
      }),
    ],
  });
};
ImageSection.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ImageSection;
