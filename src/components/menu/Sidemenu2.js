import { useState, useEffect } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Menú que nos deja añadir listas, se ajusten al contenedor, y nos deje borrarlas si es necesaria, ademas de mantenerse entre sesiones.
const SideMenu2 = () => {
  const [lists, setLists] = useState(() => {
    // Recuperar las listas de localStorage al cargar
    const savedLists = localStorage.getItem("userLists");
    return savedLists ? JSON.parse(savedLists) : [];
  });

  const [newListName, setNewListName] = useState("");

  useEffect(() => {
    // Guardar las listas en localStorage cada vez que cambien
    localStorage.setItem("userLists", JSON.stringify(lists));
  }, [lists]);

  const handleInputChange = (e) => {
    setNewListName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newListName.trim() !== "") {
      setLists([...lists, newListName]); // Añadir la nueva lista
      setNewListName(""); // Limpiar el input
    }
  };

  const handleDelete = (index) => {
    const updatedLists = lists.filter((_, i) => i !== index); // Eliminar la lista por índice
    setLists(updatedLists);
  };

  const styles = {
    container: {
      width: "250px",
      backgroundColor: "#ADD8E6", // Color celeste
      color: "black",
      padding: "10px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      wordBreak: "break-word", // Ajusta el texto al contenedor
      whiteSpace: "normal", // Permite que el texto ocupe varias líneas si es necesario
    },
    deleteButton: {
      marginLeft: "10px",
      backgroundColor: "#FF4136", // Rojo para el botón de borrar
      color: "#fff",
      border: "none",
      borderRadius: "3px",
      padding: "5px",
      cursor: "pointer",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "14px",
      marginTop: "10px", // Asegura que esté separado de las listas
      boxSizing: "border-box", // Garantiza que el ancho del input no se salga del contenedor
    },
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: styles.container,
    children: [
      /*#__PURE__*/ _jsx("h3", {
        style: styles.title,
        children: "Tus Listas",
      }),
      lists.length > 0
        ? lists.map((list, index) =>
            /*#__PURE__*/ _jsxs(
              "div",
              {
                style: styles.item,
                children: [
                  /*#__PURE__*/ _jsx("span", {
                    children: list,
                  }),
                  /*#__PURE__*/ _jsx("button", {
                    onClick: () => handleDelete(index),
                    style: styles.deleteButton,
                    children: "X",
                  }),
                ],
              },
              index
            )
          )
        : /*#__PURE__*/ _jsx("p", {
            style: { fontStyle: "italic", color: "gray" },
            children: "No tienes listas aún.",
          }),
      /*#__PURE__*/ _jsx("input", {
        type: "text",
        value: newListName,
        onChange: handleInputChange,
        onKeyPress: handleKeyPress,
        placeholder: "Añadir nueva lista",
        style: styles.input,
      }),
    ],
  });
};

export default SideMenu2;
