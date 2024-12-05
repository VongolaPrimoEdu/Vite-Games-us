import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Componente que coge una página que no existe en las rutas, y da error
const ErrorPage = () => {
  const navigate = useNavigate(); // Usamos el hook useNavigate

  const handleGoHome = () => {
    navigate("/"); // Navega a la página principal
  };
  return /*#__PURE__*/ _jsxs("div", {
    style: {
      textAlign: "center",
      padding: "50px",
    },
    children: [
      /*#__PURE__*/ _jsx("h1", {
        children: "404 - P\xE1gina no encontrada",
      }),
      /*#__PURE__*/ _jsx("p", {
        children: "La p\xE1gina que buscas no existe.",
      }),
      /*#__PURE__*/ _jsx("button", {
        onClick: handleGoHome,
        style: {
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        },
        children: "Volver al inicio",
      }),
    ],
  });
};
export default ErrorPage;
