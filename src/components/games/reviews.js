import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Permite escribir reseñas, que se ajusten al contenedor, mantengan entre sesiones, y poder reescribirlas si no nos gustan
const Reviews = ({ onAddReview }) => {
  const [reviewInput, setReviewInput] = useState("");
  const [currentReview, setCurrentReview] = useState(
    () => localStorage.getItem("latestReview") || ""
  );

  useEffect(() => {
    if (currentReview) {
      localStorage.setItem("latestReview", currentReview);
    }
  }, [currentReview]);

  const handleInputChange = (e) => {
    setReviewInput(e.target.value);
  };

  const handleSubmit = () => {
    setCurrentReview(reviewInput);
    onAddReview(reviewInput); // Notificar al componente padre
    setReviewInput("");
  };

  const handleRewriteReview = () => {
    setCurrentReview(""); // Elimina la reseña actual
    setReviewInput(""); // Limpia el cuadro de texto
    localStorage.removeItem("latestReview"); // Limpia el almacenamiento local
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: {
      width: "600px",
      backgroundColor: "#7EFDF7",
      padding: "20px",
      borderRadius: "8px",
    },
    children: [
      /*#__PURE__*/ _jsx("h3", {
        style: {
          textAlign: "center",
        },
        children: "TUS RESEÑAS:",
      }),
      currentReview
        ? /*#__PURE__*/ _jsxs("div", {
            children: [
              /*#__PURE__*/ _jsx("div", {
                style: {
                  marginBottom: "10px",
                  color: "black",
                  whiteSpace: "pre-wrap", // Permite los saltos de línea automáticamente
                  wordWrap: "break-word", // Permite que las palabras largas se rompan si es necesario
                  overflowWrap: "break-word", // Otra forma de asegurar que las palabras largas se rompan
                },
                children: /*#__PURE__*/ _jsx("p", {
                  children: currentReview,
                }),
              }),
              /*#__PURE__*/ _jsx("button", {
                onClick: handleRewriteReview,
                style: {
                  padding: "10px",
                  backgroundColor: "#005f73", // Azul oscuro para mejor contraste
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                },
                children: "Reescribir Reseña",
              }),
            ],
          })
        : /*#__PURE__*/ _jsxs("div", {
            children: [
              /*#__PURE__*/ _jsx("textarea", {
                value: reviewInput,
                onChange: handleInputChange,
                placeholder: "Escribe tu reseña...",
                style: {
                  width: "100%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  marginTop: "10px",
                  resize: "vertical",
                },
              }),
              /*#__PURE__*/ _jsx("button", {
                onClick: handleSubmit,
                style: {
                  marginTop: "10px",
                  padding: "10px",
                  backgroundColor: "#333", // Un color oscuro para el botón de enviar
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                },
                children: "Enviar",
              }),
            ],
          }),
    ],
  });
};

Reviews.propTypes = {
  onAddReview: PropTypes.func.isRequired,
};

export default Reviews;
