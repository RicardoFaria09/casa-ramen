import { Link } from "react-router-dom";

// Rodape comum a todas as paginas do site (tal como a Navbar, e importado
// diretamente no App.jsx, fora das <Routes>, para aparecer sempre).
//
// Agora inclui tambem links para redes sociais e para as paginas legais
// (extras sugeridos na proposta). As paginas legais so eram acessiveis
// pelo link dentro do CookieBanner - aqui ficam visiveis em todas as
// paginas, que e o sitio habitual para este tipo de link.
export default function Footer() {
  return (
    <footer>
      <p>(c) 2026 Casa Ramen</p>

      {/* Links para as paginas legais, com Link do React Router para nao
          recarregar o site (tal como o resto da navegacao). */}
      <nav className="footer-legal" aria-label="Paginas legais">
        <Link to="/privacy">Politica de Privacidade</Link>
        <Link to="/cookies">Politica de Cookies</Link>
        <Link to="/legal">Aviso Legal</Link>
      </nav>

      {/* Lista de redes sociais. Cada link:
          - abre numa nova aba, com target="_blank", para o utilizador
            nao perder a pagina do restaurante;
          - usa rel="noreferrer" por seguranca: impede que a pagina que
            se abre saiba de que site (o nosso) o utilizador veio. */}
      <nav className="footer-social" aria-label="Redes sociais">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
          TikTok
        </a>
      </nav>
    </footer>
  );
}
