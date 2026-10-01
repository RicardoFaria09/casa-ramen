import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Formulario principal para recolher os dados de uma reserva.
//
// Usa validacao nativa do HTML ("required" e tipos como "email", "date" e
// "time") e, no submit, envia os dados por email atraves do EmailJS - um
// servico que entrega o email diretamente do browser, sem precisarmos de
// montar um backend proprio. As chaves da conta EmailJS vêm de variaveis
// de ambiente (ver .env.example) para nao ficarem escritas no codigo.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ReservationForm() {
  // Referencia ao <form> - o EmailJS le os campos diretamente a partir dela
  // (pelo atributo "name" de cada input), por isso nao precisamos de um
  // estado React separado para cada campo.
  const formRef = useRef(null);

  // Guarda o resultado do ultimo envio para mostrar feedback ao utilizador:
  // "idle" (nada ainda), "sending", "success" ou "error".
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    // Impede o comportamento nativo do form (recarregar a pagina), porque
    // quem trata o envio e o EmailJS via JavaScript.
    event.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  }

  return (
    <form className="reservation-form" ref={formRef} onSubmit={handleSubmit}>
      {/* Nome de quem faz a reserva. */}
      <label htmlFor="name">Nome</label>
      <input id="name" name="name" type="text" placeholder="O seu nome" required />

      {/* Email de contacto, usado tambem para confirmar a reserva. */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="exemplo@email.com"
        required
      />

      {/* Telefone e opcional, por isso nao tem o atributo "required". */}
      <label htmlFor="phone">Telefone</label>
      <input id="phone" name="phone" type="tel" placeholder="912 345 678" />

      {/* Data e hora da reserva, lado a lado com "form-row" (ver CSS). */}
      <div className="form-row">
        <div>
          <label htmlFor="date">Data</label>
          <input id="date" name="date" type="date" required />
        </div>

        <div>
          <label htmlFor="time">Hora</label>
          <input id="time" name="time" type="time" required />
        </div>
      </div>

      {/* Numero de pessoas, com um valor por defeito razoavel (2). */}
      <label htmlFor="people">Numero de pessoas</label>
      <select id="people" name="people" defaultValue="2">
        <option value="1">1 pessoa</option>
        <option value="2">2 pessoas</option>
        <option value="3">3 pessoas</option>
        <option value="4">4 pessoas</option>
        <option value="5">5 pessoas</option>
        <option value="6+">6 ou mais pessoas</option>
      </select>

      {/* Campo livre para pedidos especiais, alergias ou duvidas sobre
          o menu de grupo. */}
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Indique alergias, pedidos especiais ou menu de grupo."
      />

      {/* O texto do botao muda durante o envio para o utilizador perceber
          que o pedido esta a ser processado, evitando cliques repetidos. */}
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "A enviar..." : "Enviar pedido de reserva"}
      </button>

      {/* Mensagem de feedback, so aparece depois de uma tentativa de envio. */}
      {status === "success" && (
        <p className="form-status form-status-success">
          Pedido enviado com sucesso! Entraremos em contacto para confirmar a
          reserva.
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error">
          Nao foi possivel enviar o pedido. Tente novamente ou contacte-nos
          por telefone.
        </p>
      )}
    </form>
  );
}

export default ReservationForm;
