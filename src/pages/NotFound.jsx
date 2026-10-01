import { Link } from "react-router-dom";

// Pagina apresentada quando o utilizador visita um endereco que nao
// corresponde a nenhuma rota definida em App.jsx (ex: erro de digitacao
// no URL). Sem esta rota "apanha-tudo", o site mostrava uma pagina em
// branco (so com Navbar e Footer), o que parece um site com defeito.
function NotFound() {
  return (
    <main className="not-found-page">
      <h1>Pagina nao encontrada</h1>
      <p>O endereco que procura nao existe ou foi movido.</p>
      <Link className="reservation-link" to="/">
        Voltar ao inicio
      </Link>
    </main>
  );
}

export default NotFound;
