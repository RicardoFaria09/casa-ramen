import { Routes, Route } from "react-router-dom";

// Navbar e Footer aparecem em todas as paginas, por isso ficam fora das <Routes>.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Banner de cookies (extra da proposta) - decide sozinho quando se
// mostrar ou esconder, por isso basta coloca-lo aqui uma vez.
import CookieBanner from "./components/CookieBanner";

// As 5 paginas principais pedidas na proposta do projeto.
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Specialties from "./pages/Specialties";
import Groups from "./pages/Groups";
import Reservations from "./pages/Reservations";

// Paginas legais (extra da proposta): Privacidade, Cookies e Aviso Legal.
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import LegalNotice from "./pages/LegalNotice";

// Pagina apresentada para qualquer endereco que nao corresponda a
// nenhuma das rotas acima (ver Route path="*" mais abaixo).
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Navbar e Footer ficam fora das rotas para aparecerem em todas as paginas. */}
      <Navbar />

      {/* Cada Route associa um endereco (path) do site a uma pagina React.
          O React Router troca apenas o conteudo entre Navbar e Footer,
          sem recarregar a pagina no browser. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/legal" element={<LegalNotice />} />

        {/* Rota "apanha-tudo": qualquer endereco nao listado acima cai
            aqui, em vez de mostrar uma pagina em branco. */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* Fica por cima de tudo (ver "position: fixed" no CSS) e decide
          sozinho, internamente, se deve ou nao aparecer. */}
      <CookieBanner />
    </>
  );
}

export default App;
