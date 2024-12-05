import { jsx as _jsx } from "react/jsx-runtime";
const BotonRegistro = () => {
  const handleRegister = () => {
    window.location.href = "/registro"; // Redirige a la página de registro, no implementada debido a la complejidad de crear sesion con correo, etc.
  };
  return /*#__PURE__*/ _jsx("button", {
    onClick: handleRegister,
    style: styles.button,
    children: "Registro",
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
export default BotonRegistro;
