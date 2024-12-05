import PropTypes from "prop-types";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Lista de precios de cuanto vale un juego en cada tienda para ver las distintas ofertas
const PriceList = ({ prices }) => {
  return /*#__PURE__*/ _jsxs("div", {
    style: {
      width: "200px",
      padding: "10px",
      backgroundColor: "#7EFDF7",
      borderRadius: "8px",
    },
    children: [
      /*#__PURE__*/ _jsx("h3", {
        style: {
          textAlign: "center",
          color: "black", // Cambiado a negro
        },
        children: "Precios",
      }),
      prices.map((price) =>
        /*#__PURE__*/ _jsxs(
          "div",
          {
            style: {
              marginBottom: "10px",
              color: "black", // Cambiado a negro
            },
            children: [
              /*#__PURE__*/ _jsxs("strong", {
                children: [price.platform, ":"],
              }),
              " ",
              price.amount,
              "\u20AC",
            ],
          },
          price.platform
        )
      ),
    ],
  });
};
PriceList.propTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default PriceList;
