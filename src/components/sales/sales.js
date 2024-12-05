import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Componente que tiene una lista de juegos de prueba, y nos dice cuantas unidades se han vendido, su puesto en la clasificación, cuantas semanas ha estado en el top etc
const Sales = () => {
  // Datos para la tabla
  const data = [
    {
      nombre: "Juego 1",
      fechaSalida: "2022-01-01",
      consistencia: 3,
      subidaBajada: 1.5,
      ventas: 500000,
      imagen: "/public/images/Trending1.jpg", // Añadimos la ruta de la imagen para cada juego
      rating: 4.5, // Rating del juego
      favorito: true, // Icono de favorito (true o false)
    },
    {
      nombre: "Juego 2",
      fechaSalida: "2021-05-15",
      consistencia: 2,
      subidaBajada: -0.8,
      ventas: 800000,
      imagen: "/public/images/Trending1.jpg", // Añadimos la ruta de la imagen para cada juego
      rating: 3.8,
      favorito: false,
    },
    {
      nombre: "Juego 3",
      fechaSalida: "2020-08-20",
      consistencia: 4,
      subidaBajada: 0,
      ventas: 1200000,
      imagen: "/public/images/Trending1.jpg",
      rating: 4.2,
      favorito: true,
    },
    {
      nombre: "Juego 4",
      fechaSalida: "2019-03-10",
      consistencia: 5,
      subidaBajada: -1.2,
      ventas: 300000,
      imagen: "/public/images/Trending1.jpg",
      rating: 2.9,
      favorito: false,
    },
    {
      nombre: "Juego 5",
      fechaSalida: "2023-11-05",
      consistencia: 1,
      subidaBajada: 0.5,
      ventas: 2000000,
      imagen: "/public/images/Trending1.jpg",
      rating: 4.8,
      favorito: true,
    },
  ];

  // Estilos
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      height: "100vh", // Ocupa toda la altura de la pantalla
    },
    image: {
      width: "100px", // Imagen más grande
      height: "100px",
      objectFit: "cover",
      marginRight: "10px", // Espaciado entre la imagen y la tabla
      borderRadius: "8px",
    },
    imageContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    tableContainer: {
      flex: 1,
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#7EFDF7", // Fondo celeste
    },
    table: {
      width: "100%",
      borderCollapse: "separate", // Asegura que haya separación entre celdas
      borderSpacing: "10px", // Añade espacio entre celdas
    },
    tableTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    tableHeader: {
      color: "#fff",
      padding: "10px",
    },
    tableCell: {
      padding: "10px",
      color: "#333",
      textAlign: "center",
      border: "none", // Elimina las líneas de la tabla
    },
    subidaBajada: (value) => ({
      color: value > 0 ? "green" : value < 0 ? "red" : "black",
    }),
    rating: {
      color: "#ff9800", // Color dorado para el rating
    },
    favorito: {
      color: "red",
      fontSize: "20px", // Tamaño del icono de favorito
      marginLeft: "10px",
    },
  };

  return /*#__PURE__*/ _jsxs("div", {
    style: styles.container,
    children: [
      // Contenedor de la tabla
      /*#__PURE__*/ _jsxs("div", {
        style: styles.tableContainer,
        children: [
          // Título de la tabla fuera del contenedor
          /*#__PURE__*/ _jsx("div", {
            style: styles.tableTitle,
            children: "Tabla de Ventas",
          }),

          // Tabla con los datos
          /*#__PURE__*/ _jsxs("table", {
            style: styles.table,
            children: [
              /*#__PURE__*/ _jsx("thead", {
                children: /*#__PURE__*/ _jsxs("tr", {
                  style: styles.tableHeader,
                  children: [
                    /*#__PURE__*/ _jsx("th", {
                      style: styles.tableCell,
                      children: "Imagen",
                    }),
                    /*#__PURE__*/ _jsx("th", {
                      style: styles.tableCell,
                      children: "Nombre",
                    }),
                    /*#__PURE__*/ _jsx("th", {
                      style: styles.tableCell,
                      children: "Fecha de Salida",
                    }),
                    /*#__PURE__*/ _jsx("th", {
                      style: styles.tableCell,
                      children: "Consistencia (años)",
                    }),
                    /*#__PURE__*/ _jsx("th", {
                      style: styles.tableCell,
                      children: "Subida/Bajada",
                    }),
                    /*#__PURE__*/ _jsx("th", {
                      style: styles.tableCell,
                      children: "Ventas (x unidades)",
                    }),
                  ],
                }),
              }),
              /*#__PURE__*/ _jsx("tbody", {
                children: data.map((row, index) =>
                  /*#__PURE__*/ _jsxs(
                    "tr",
                    {
                      children: [
                        // Imagen con número de puesto
                        /*#__PURE__*/ _jsx("td", {
                          style: styles.tableCell,
                          children: /*#__PURE__*/ _jsxs("div", {
                            style: styles.imageContainer,
                            children: [
                              /*#__PURE__*/ _jsx("span", {
                                style: { fontWeight: "bold" },
                                children: index + 1, // Número de puesto
                              }),
                              /*#__PURE__*/ _jsx("img", {
                                src: row.imagen,
                                alt: row.nombre,
                                style: styles.image,
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ _jsx("td", {
                          style: styles.tableCell,
                          children: row.nombre,
                        }),
                        /*#__PURE__*/ _jsx("td", {
                          style: styles.tableCell,
                          children: row.fechaSalida,
                        }),
                        /*#__PURE__*/ _jsx("td", {
                          style: styles.tableCell,
                          children: row.consistencia,
                        }),
                        /*#__PURE__*/ _jsx("td", {
                          style: styles.tableCell,
                          children: /*#__PURE__*/ _jsx("span", {
                            style: styles.subidaBajada(row.subidaBajada),
                            children: row.subidaBajada,
                          }),
                        }),
                        /*#__PURE__*/ _jsx("td", {
                          style: styles.tableCell,
                          children: row.ventas.toLocaleString(),
                        }),
                      ],
                    },
                    index
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default Sales;
