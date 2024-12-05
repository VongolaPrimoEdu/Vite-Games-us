import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Tres juegos que irian cambiando segun su posicion en la base de datos hipotetica
const Trending = () => {
  const images = [
    "/public/images/Trending1.jpg",
    "/public/images/Trending2.jpg",
    "/public/images/Trending3.jpg",
  ];

  return /*#__PURE__*/ _jsxs("div", {
    style: styles.container,
    children: [
      /*#__PURE__*/ _jsx("h2", {
        style: styles.title,
        children: "TRENDING",
      }),
      /*#__PURE__*/ _jsx("div", {
        style: styles.imageContainer,
        children: images.map((image, index) =>
          /*#__PURE__*/ _jsx(
            "img",
            {
              src: image,
              alt: `Trending ${index + 1}`,
              style: styles.image,
            },
            index
          )
        ),
      }),
    ],
  });
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px 0",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "black",
    marginBottom: "20px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap", // Permite que las imágenes se acomoden en fila en pantallas pequeñas
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  "@media (max-width: 768px)": {
    image: {
      width: "100%", // Las imágenes ocuparán todo el ancho
      height: "auto", // Ajusta la altura automáticamente
    },
  },
};

export default Trending;
