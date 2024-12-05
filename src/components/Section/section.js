/* eslint-disable no-unused-vars */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Seccion en la pagina principal que nos describe que hace cada pagina, pero con un lore ipsum como prototipo
const Section = ({
  title,
  text,
  imageUrl,
  isImageLeft = true,
  backgroundColor = "#a2f0f0",
  marginVertical = "40px",
}) => {
  const containerStyle = {
    display: "flex",
    flexDirection: isImageLeft ? "row" : "row-reverse",
    alignItems: "center",
    backgroundColor: backgroundColor,
    padding: "20px",
    borderRadius: "10px",
    margin: `${marginVertical} 0`,
  };

  const imageStyle = {
    width: "300px",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
    margin: "0 20px",
  };

  const textStyle = {
    maxWidth: "500px",
    color: "black",
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: containerStyle,
    children: [
      /*#__PURE__*/ _jsx("img", {
        src: imageUrl,
        alt: title,
        style: imageStyle,
      }),
      /*#__PURE__*/ _jsxs("div", {
        children: [
          /*#__PURE__*/ _jsx("h2", {
            style: {
              fontWeight: "bold",
              fontSize: "1.8rem",
              marginBottom: "10px",
            },
            children: title,
          }),
          /*#__PURE__*/ _jsx("p", {
            style: textStyle,
            children: text,
          }),
        ],
      }),
    ],
  });
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    margin: "0 20px",
  },
  text: {
    maxWidth: "500px",
    color: "black",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // Cambiar la dirección de la flexbox a columna
    },
    image: {
      width: "100%",
      height: "auto", // Hacer que las imágenes sean responsivas
    },
  },
};

export default Section;
