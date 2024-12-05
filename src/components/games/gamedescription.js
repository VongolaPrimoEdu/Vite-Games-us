import PropTypes from "prop-types";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Descripción del juego en cuestión. Hecho con proptypes para modificarlo a gusto
const GameDescription = ({ gameDetails }) => {
  return /*#__PURE__*/ _jsxs("div", {
    style: {
      width: "400px",
      backgroundColor: "#7EFDF7",
      padding: "20px",
      borderRadius: "8px",
    },
    children: [
      /*#__PURE__*/ _jsx("h3", {
        style: {
          textAlign: "center",
        },
        children: gameDetails.title,
      }),
      /*#__PURE__*/ _jsxs("div", {
        style: {
          marginBottom: "10px",
        },
        children: [
          /*#__PURE__*/ _jsx("strong", {
            children: "Rating:",
          }),
          " ",
          gameDetails.rating,
          /*#__PURE__*/ _jsx("span", {
            style: {
              color: "gold",
              marginLeft: "10px",
            },
            children: "\u2605", // Este es el ícono de la estrella
          }),
        ],
      }),
      /*#__PURE__*/ _jsx("p", {
        children: gameDetails.description,
      }),
      /*#__PURE__*/ _jsxs("div", {
        children: [
          /*#__PURE__*/ _jsx("strong", {
            children: "Géneros: ",
          }),
          gameDetails.genres.join(", "),
        ],
      }),
      /*#__PURE__*/ _jsxs("div", {
        children: [
          /*#__PURE__*/ _jsx("strong", {
            children: "Desarrollador:",
          }),
          " ",
          gameDetails.developer,
        ],
      }),
      /*#__PURE__*/ _jsxs("div", {
        children: [
          /*#__PURE__*/ _jsx("strong", {
            children: "Editor:",
          }),
          " ",
          gameDetails.publisher,
        ],
      }),
    ],
  });
};

GameDescription.propTypes = {
  gameDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    developer: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameDescription;
