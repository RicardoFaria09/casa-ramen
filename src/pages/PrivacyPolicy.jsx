// Pagina "Politica de Privacidade" (extra sugerido na proposta).
//
// A proposta permite usar um modelo gratuito e adaptar aos dados do
// projeto, ja que a Casa Ramen e um restaurante fictício criado para o
// curso. Por isso os dados de contacto abaixo (email, telefone, morada)
// sao os mesmos ja usados na pagina de Reservas, e nao dados reais de
// uma empresa.
function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <h1>Politica de Privacidade</h1>
      <p>Ultima atualizacao: 06/07/2026</p>

      <section>
        <h2>1. Quem trata os seus dados</h2>
        <p>
          A Casa Ramen, com sede na Rua do Caldo, 24, Lisboa, Portugal, e a
          responsavel pelo tratamento dos dados pessoais recolhidos atraves
          deste website.
        </p>
      </section>

      <section>
        <h2>2. Que dados recolhemos</h2>
        <p>
          Atraves do formulario de reservas, recolhemos nome, email,
          telefone, data e hora pretendidas, numero de pessoas e, quando
          preenchida, a mensagem enviada pelo utilizador.
        </p>
      </section>

      <section>
        <h2>3. Para que usamos os seus dados</h2>
        <p>
          Os dados sao usados exclusivamente para gerir o pedido de reserva
          e para entrar em contacto consigo a esse respeito. Nao vendemos
          nem partilhamos os seus dados com terceiros para fins de
          marketing.
        </p>
      </section>

      <section>
        <h2>4. Durante quanto tempo guardamos os dados</h2>
        <p>
          Os dados sao conservados apenas durante o tempo necessario para
          gerir a reserva e responder a eventuais pedidos relacionados,
          apos o que sao eliminados.
        </p>
      </section>

      <section>
        <h2>5. Os seus direitos</h2>
        <p>
          Pode, a qualquer momento, pedir acesso, retificacao ou eliminacao
          dos seus dados pessoais, contactando-nos atraves do email{" "}
          <a href="mailto:casaramem@gmail.com">casaramem@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>6. Alteracoes a esta politica</h2>
        <p>
          Esta politica pode ser atualizada periodicamente. Recomendamos a
          consulta desta pagina de tempos a tempos.
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
