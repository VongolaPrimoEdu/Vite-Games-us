import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Menu lateral que tiene los generos del juego, consolas etc
const SideMenu = () => {
  const styles = {
    container: {
      width: "250px",
      // Ancho del menú
      backgroundColor: "#FFA500",
      // Color naranja
      color: "black",
      // Color del texto
      padding: "10px",
      height: "100%", // Ajuste dinámico según el contenido
    },
    section: {
      marginBottom: "20px",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "10px",
      fontSize: "18px",
    },
    item: {
      padding: "10px 0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      // Línea divisoria
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    arrow: {
      marginLeft: "10px",
      fontWeight: "bold",
    },
  };
  return /*#__PURE__*/ _jsxs("div", {
    style: styles.container,
    children: [
      /*#__PURE__*/ _jsxs("div", {
        style: styles.section,
        children: [
          /*#__PURE__*/ _jsx("div", {
            style: styles.title,
            children: "Consola",
          }),
          /*#__PURE__*/ _jsxs("div", {
            style: styles.item,
            children: [
              "Nintendo Switch ",
              /*#__PURE__*/ _jsx("span", {
                style: styles.arrow,
                children: ">",
              }),
            ],
          }),
          /*#__PURE__*/ _jsxs("div", {
            style: styles.item,
            children: [
              "PlayStation5 ",
              /*#__PURE__*/ _jsx("span", {
                style: styles.arrow,
                children: ">",
              }),
            ],
          }),
          /*#__PURE__*/ _jsxs("div", {
            style: styles.item,
            children: [
              "PC ",
              /*#__PURE__*/ _jsx("span", {
                style: styles.arrow,
                children: ">",
              }),
            ],
          }),
        ],
      }),
      /*#__PURE__*/ _jsxs("div", {
        style: styles.section,
        children: [
          /*#__PURE__*/ _jsx("div", {
            style: styles.title,
            children: "G\xE9nero",
          }),
          /*#__PURE__*/ _jsx("div", {
            style: styles.item,
            children: "Acci\xF3n",
          }),
          /*#__PURE__*/ _jsx("div", {
            style: styles.item,
            children: "Plataformas",
          }),
        ],
      }),
      /*#__PURE__*/ _jsxs("div", {
        style: styles.section,
        children: [
          /*#__PURE__*/ _jsx("div", {
            style: styles.title,
            children: "Tipo",
          }),
          /*#__PURE__*/ _jsxs("div", {
            style: styles.item,
            children: [
              "Remake ",
              /*#__PURE__*/ _jsx("span", {
                style: styles.arrow,
                children: ">",
              }),
            ],
          }),
          /*#__PURE__*/ _jsxs("div", {
            style: styles.item,
            children: [
              "DLC ",
              /*#__PURE__*/ _jsx("span", {
                style: styles.arrow,
                children: ">",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export default SideMenu;
