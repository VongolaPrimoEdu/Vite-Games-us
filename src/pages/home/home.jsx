import "../../App.css";
import { useState, useEffect } from "react";
import BotonIniciarSesion from "../../components/button/login";
import BotonRegistro from "../../components/button/register";
import SearchBar from "../../components/searchbar/searchbar";
import Trending from "../../components/trending/trending";
import Section from "../../components/Section/section";
import GameOMonth from "../../components/trending/GameOMonth";
//Pagina principal que se carga primero desde la que se accede a todo el resto
function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Si el tamaño de la ventana es menor o igual a 768px, es móvil
      } else {
        setIsMobile(false); // De lo contrario, es desktop
      }
    };

    window.addEventListener("resize", handleResize); // Detectar cambios en el tamaño de la ventana
    handleResize(); // Verificar el tamaño inicial al cargar el componente

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento cuando el componente se desmonta
    };
  }, []);

  // Componente HeaderMobile (menú móvil)
  const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para manejar el estado del menú
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div style={styles.header}>
        {/* Ícono de menú en pantallas pequeñas */}
        <div style={styles.menuIconContainer} onClick={toggleMenu}>
          <div style={styles.menuIcon}></div>
          <div style={styles.menuIcon}></div>
          <div style={styles.menuIcon}></div>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        <div
          style={{
            ...styles.menu,
            display: isMenuOpen ? "block" : "none", // Mostrar u ocultar menú
          }}
        >
          <div style={styles.item}>
            <a href="/consoles" style={styles.link}>
              Consolas
            </a>
          </div>
          <div style={styles.item}>
            <a href="/lanzamientos" style={styles.link}>
              Próximos Lanzamientos
            </a>
          </div>
          <div style={styles.item}>
            <a href="/masvendidos" style={styles.link}>
              Los Más Vendidos
            </a>
          </div>
          <div style={styles.item}>
            <a href="/misjuegos" style={styles.link}>
              Mis Juegos
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Componente Header2 (menú tradicional)
  const Header2 = () => {
    return (
      <div style={styles.header}>
        <div style={styles.item}>
          <a href="/consoles" style={styles.link}>
            Consolas
          </a>
        </div>
        <div style={styles.item}>
          <a href="/lanzamientos" style={styles.link}>
            Próximos Lanzamientos
          </a>
        </div>
        <div style={styles.item}>
          <a href="/masvendidos" style={styles.link}>
            Los Más Vendidos
          </a>
        </div>
        <div style={styles.item}>
          <a href="/misjuegos" style={styles.link}>
            Mis Juegos
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={styles.mainContainer}>
        <h1 style={styles.title}>GAMES & US</h1>
        <div style={styles.buttonContainer}>
          <BotonIniciarSesion />
          <BotonRegistro />
        </div>
        <SearchBar />
      </div>

      {/* Mostrar HeaderMobile si es un dispositivo pequeño */}
      {isMobile ? <HeaderMobile /> : <Header2 />}

      <Trending />
      <Section
        title="CONSOLAS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sollicitudin massa quis placerat. Pellentesque laoreet eros ut mi interdum condimentum."
        imageUrl="/public/images/Trending1.jpg"
        isImageLeft={true}
        backgroundColor="#a2f0f0"
      />
      <Section
        title="PRÓXIMOS LANZAMIENTOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sollicitudin massa quis placerat. Pellentesque laoreet eros ut mi interdum condimentum."
        imageUrl="/public/images/Trending1.jpg"
        isImageLeft={false}
        backgroundColor="#ff62ef"
      />
      <Section
        title="LOS MÁS VENDIDOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sollicitudin massa quis placerat. Pellentesque laoreet eros ut mi interdum condimentum."
        imageUrl="/public/images/Trending1.jpg"
        isImageLeft={true}
        backgroundColor="#7EFD91"
      />
      <Section
        title="MIS JUEGOS"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt sollicitudin massa quis placerat. Pellentesque laoreet eros ut mi interdum condimentum."
        imageUrl="/public/images/Trending1.jpg"
        isImageLeft={false}
        backgroundColor="#F66161"
      />
      <GameOMonth
        title="Juego del mes"
        imageUrl="/public/images/Trending1.jpg"
        backgroundColor="#EAFF76"
      />
    </>
  );
}

// Estilos combinados para HeaderMobile y Header2
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#00FFFF",
    height: "100px",
    color: "#000",
    padding: "0 10px",
    position: "relative", // Necesario para posicionar el menú desplegable
  },
  menuIconContainer: {
    display: "flex", // Muestra el ícono de menú en pantallas pequeñas
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
  },
  menuIcon: {
    width: "25px",
    height: "3px",
    backgroundColor: "#000",
  },
  menu: {
    backgroundColor: "#00FFFF",
    position: "fixed", // Menú fijo en la parte superior izquierda
    top: "0", // Alineado en la parte superior
    left: "0", // Alineado a la izquierda
    zIndex: 1,
    padding: "10px 0",
    textAlign: "center",
    width: "200px", // Establecer un ancho fijo
    height: "100vh", // Extiende el menú por toda la altura de la pantalla
  },
  item: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 20px",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  mainContainer: {
    textAlign: "center",
    marginTop: "30px",
    padding: "20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "black",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
};

export default Home;
