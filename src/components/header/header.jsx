import { Link } from "react-router-dom"; // Importamos Link para las rutas

const Header = () => {
  return (
    <div style={styles.header}>
      {/* Usamos Link para la navegación */}
      <div style={styles.item}>
        <Link to="/consoles">Consolas</Link> {/* Enlace a la ruta /consoles */}
      </div>
      <div style={styles.item}>
        <Link to="/lanzamientos"> Próximos Lanzamientos</Link>
      </div>
      <div style={styles.item}>Los Más Vendidos</div>
      <div style={styles.item}>Mis Juegos</div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#00FFFF", // Color azul claro
    height: "100px",
    color: "#000", // Texto negro
  },
  item: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "15px 100px", // Espaciado interno para cada elemento
  },
};

export default Header;
