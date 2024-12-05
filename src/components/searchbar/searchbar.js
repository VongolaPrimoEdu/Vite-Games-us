import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Barra de busqueda simulada.

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Búsqueda:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Buscando: ${searchTerm}`);
  };

  return /*#__PURE__*/ _jsxs("form", {
    onSubmit: handleSubmit,
    style: styles.form,
    children: [
      /*#__PURE__*/ _jsx("input", {
        type: "text",
        placeholder: "Buscar...",
        value: searchTerm,
        onChange: handleChange,
        style: styles.input,
      }),
      /*#__PURE__*/ _jsx("button", {
        type: "submit",
        style: styles.button,
        children: "Buscar",
      }),
    ],
  });
};

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px auto",
    width: "100%",
    padding: "20px 0",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "250px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    form: {
      flexDirection: "column", // Apilar los elementos en pantallas pequeñas
    },
    input: {
      width: "80%", // Hacer el input más grande en pantallas pequeñas
      marginBottom: "10px",
    },
    button: {
      width: "80%", // El botón ocupará todo el ancho
    },
  },
};

export default SearchBar;
