import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//pagina de inicio de sesión con datos de prueba para simular un inicio de sesión, que lleva al home de nuevo
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación simple
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Simular inicio de sesión exitoso
    if (email === "usuario@example.com" && password === "password123") {
      setError("");
      alert("Inicio de sesión exitoso");
      navigate("/"); // Redirige al usuario a la página principal
    } else {
      setError("Credenciales incorrectas.");
    }
  };
  return /*#__PURE__*/ _jsx("div", {
    style: styles.pageContainer,
    children: /*#__PURE__*/ _jsxs("div", {
      style: styles.container,
      children: [
        /*#__PURE__*/ _jsx("h2", {
          style: styles.title,
          children: "Iniciar Sesi\xF3n",
        }),
        error &&
          /*#__PURE__*/ _jsx("p", {
            style: styles.error,
            children: error,
          }),
        /*#__PURE__*/ _jsxs("form", {
          onSubmit: handleSubmit,
          style: styles.form,
          children: [
            /*#__PURE__*/ _jsxs("div", {
              style: styles.formGroup,
              children: [
                /*#__PURE__*/ _jsx("label", {
                  htmlFor: "email",
                  style: styles.label,
                  children: "Correo Electr\xF3nico:",
                }),
                /*#__PURE__*/ _jsx("input", {
                  type: "email",
                  id: "email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  style: styles.input,
                  placeholder: "usuario@example.com",
                }),
              ],
            }),
            /*#__PURE__*/ _jsxs("div", {
              style: styles.formGroup,
              children: [
                /*#__PURE__*/ _jsx("label", {
                  htmlFor: "password",
                  style: styles.label,
                  children: "Contrase\xF1a:",
                }),
                /*#__PURE__*/ _jsx("input", {
                  type: "password",
                  id: "password",
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  style: styles.input,
                  placeholder: "********",
                }),
              ],
            }),
            /*#__PURE__*/ _jsx("button", {
              type: "submit",
              style: styles.button,
              children: "Iniciar Sesi\xF3n",
            }),
          ],
        }),
      ],
    }),
  });
};
const styles = {
  pageContainer: {
    width: "100vw",
    // Ancho completo
    height: "100vh",
    // Alto completo
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b3e5fc", // Fondo celeste
  },
  container: {
    width: "80vw",
    maxWidth: "500px",
    // Límite para pantallas grandes
    height: "auto",
    // Ajusta automáticamente según el contenido
    padding: "30px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    // Fondo semi-transparente para legibilidad
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra para el contenedor
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "28px",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
    width: "100%",
    maxWidth: "400px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
    fontWeight: "bold",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "15px",
  },
  // Media queries para dispositivos pequeños (por debajo de 600px)
  "@media (max-width: 600px)": {
    container: {
      width: "90vw",
      // Más ancho en dispositivos pequeños
      padding: "20px", // Reducir padding
    },
    title: {
      fontSize: "22px", // Fuente más pequeña
    },
    formGroup: {
      maxWidth: "100%", // Asegura que el formulario se adapte al ancho del contenedor
    },
    button: {
      fontSize: "14px", // Botón más compacto
    },
  },
  // Media queries para dispositivos grandes (más de 1200px)
  "@media (min-width: 1200px)": {
    container: {
      width: "40vw",
      // Reducir el ancho en pantallas muy grandes
      padding: "40px", // Aumentar espacio para un diseño más espacioso
    },
    title: {
      fontSize: "32px", // Fuente más grande
    },
  },
};
export default Login;
