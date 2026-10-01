import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Banner de aceitacao de cookies (extra sugerido na proposta).
//
// Como funciona, explicado passo a passo:
//
// 1. "useState" guarda um valor que pode mudar (aqui, "visible": o
//    banner esta visivel ou nao). Comecamos com "false" (escondido).
//
// 2. "useEffect" corre codigo automaticamente depois da pagina
//    aparecer no ecra. O array vazio "[]" no final quer dizer "corre
//    isto so uma vez", como se fosse um "assim que a pagina abrir, faz
//    isto".
//
// 3. Dentro desse useEffect, verificamos o localStorage do browser -
//    uma especie de "caderno" onde o browser guarda pequenas notas que
//    nao desaparecem quando a pagina e fechada. Se ainda nao houver
//    nenhuma nota a dizer que o utilizador aceitou os cookies, mostramos
//    o banner (setVisible(true)).
//
// 4. Quando o utilizador clica em "Aceitar", escrevemos essa nota no
//    localStorage e escondemos o banner. Da proxima vez que a pessoa
//    visitar o site (no mesmo browser), a nota ja la esta e o banner
//    nao volta a aparecer.
function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // getItem devolve o valor guardado, ou "null" se nunca tiver sido guardado.
    const alreadyAccepted = localStorage.getItem("cookieConsent");

    if (!alreadyAccepted) {
      setVisible(true);
    }
  }, []);

  // Funcao chamada quando o utilizador clica no botao "Aceitar".
  function handleAccept() {
    // Guardamos a escolha do utilizador, para o browser se lembrar dela.
    localStorage.setItem("cookieConsent", "accepted");

    // Escondemos o banner.
    setVisible(false);
  }

  // Se "visible" for false, o componente nao mostra nada (React aceita
  // "null" como resultado de um componente quando nao ha nada a desenhar).
  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Este site utiliza cookies para melhorar a sua experiencia. Ao
        continuar a navegar, aceita a nossa{" "}
        <Link to="/cookies">Politica de Cookies</Link>.
      </p>

      <button type="button" onClick={handleAccept}>
        Aceitar
      </button>
    </div>
  );
}

export default CookieBanner;
