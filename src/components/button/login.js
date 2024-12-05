import { jsx as _jsx } from "react/jsx-runtime";
const BotonIniciarSesion = () => {
  const handleLogin = () => {
    window.location.href = "/login"; // Redirige a la página de inicio de sesión
  };
  return /*#__PURE__*/ _jsx("button", {
    onClick: handleLogin,
    style: styles.button,
    children: "Iniciar Sesion",
  });
};
const styles = {
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};
export default BotonIniciarSesion;
