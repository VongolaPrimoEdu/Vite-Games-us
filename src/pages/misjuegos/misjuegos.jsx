import { Link } from "react-router-dom"; // Importamos Link para hacer que el título sea clicable
import SideMenu2 from "../../components/menu/Sidemenu2"; // Asegúrate de que la ruta sea correcta
import FavoritesGrid from "../../components/Section/favoritesgrid"; // Ruta al componente de favoritos
import SearchBar from "../../components/searchbar/searchbar"; // Importa el componente de búsqueda
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//La lista personalizada de juegos que están en favoritos
const MisJuegos = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center", // Centra los elementos horizontalmente
      alignItems: "flex-start", // Alinea los elementos al principio del contenedor
      padding: "20px",
      gap: "20px",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh", // Ocupa toda la altura de la pantalla
    },
    pageTitle: {
      position: "absolute", // Posicionamos el título de forma absoluta
      top: "20px",
      left: "20px",
      fontSize: "30px",
      fontWeight: "bold",
      color: "#333",
      textDecoration: "none", // Sin subrayado
    },
    mainContent: {
      flex: 1,
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      width: "80%", // Ajustamos el ancho del contenido principal para centrarlo
      maxWidth: "1200px", // Limitar el ancho máximo
    },
    sideMenuContainer: {
      marginTop: "80px", // Añadimos un margen superior para desplazar el menú hacia abajo
      marginRight: "30px", // Añadimos margen derecho para desplazamiento
      top: 0,
      left: 0,
      width: "200px", // Ancho del menú lateral
    },
    titleContainer: {
      marginBottom: "20px", // Espacio entre el título y la barra de búsqueda
      color: "black",
      textAlign: "center", // Centrar el texto del título
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  const handleSearch = (query) => {
    console.log("Buscando juegos con el término:", query);
    // Aquí puedes agregar la lógica para filtrar los juegos según la búsqueda
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: styles.container,
    children: [
      /*#__PURE__*/ _jsx("div", {
        style: styles.sideMenuContainer,
        children: /*#__PURE__*/ _jsx(SideMenu2, {}), // Menú lateral celeste
      }),
      /*#__PURE__*/ _jsx(Link, {
        to: "/", // Ruta de la página de inicio
        style: styles.pageTitle,
        children: "Game & US", // Título que enlaza a la página de inicio
      }),
      /*#__PURE__*/ _jsxs("div", {
        style: styles.mainContent,
        children: [
          /*#__PURE__*/ _jsx("div", {
            style: styles.titleContainer,
            children: /*#__PURE__*/ _jsx("h1", {
              style: styles.title,
              children: "Mis Juegos", // Título de la página
            }),
          }),
          /*#__PURE__*/ _jsx(SearchBar, { onSearch: handleSearch }), // Agregar SearchBar abajo del título
          /*#__PURE__*/ _jsx("h1", {
            style: { fontSize: "24px", fontWeight: "bold" },
          }),
          /*#__PURE__*/ _jsx("p", {}),
          /*#__PURE__*/ _jsx(FavoritesGrid, {}), // Agregar el grid de favoritos
        ],
      }),
    ],
  });
};

export default MisJuegos;
