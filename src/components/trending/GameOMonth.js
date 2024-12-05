/* eslint-disable no-unused-vars */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Igual que un section pero mas centrado y sin texto
const GameOMonth = ({ title, imageUrl, backgroundColor = "#a2f0f0" }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor,
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "300px",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "black",
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: containerStyle,
    children: [
      /*#__PURE__*/ _jsx("h2", {
        style: titleStyle,
        children: title,
      }),
      /*#__PURE__*/ _jsx("img", {
        src: imageUrl,
        alt: title,
        style: imageStyle,
      }),
    ],
  });
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  image: {
    width: "300px",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "20px",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "10px", // Ajustar el padding en pantallas pequeñas
    },
    image: {
      width: "100%",
      height: "auto", // Ajuste automático de altura
    },
  },
};

export default GameOMonth;
