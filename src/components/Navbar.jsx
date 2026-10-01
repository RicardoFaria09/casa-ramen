import { Link } from "react-router-dom";

// Menu de navegacao principal, visivel em todas as paginas (e importado
// diretamente no App.jsx, fora das <Routes>, por essa razao).
export default function Navbar() {
  return (
    <nav>
      {/* O componente <Link> do react-router-dom substitui a tag <a>: faz
          a navegacao entre paginas sem recarregar o site no browser. */}
      <Link to="/">Restaurante</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/specialties">Especialidades</Link>
      <Link to="/groups">Grupos</Link>
      <Link to="/reservations">Reservas</Link>
    </nav>
  );
}
