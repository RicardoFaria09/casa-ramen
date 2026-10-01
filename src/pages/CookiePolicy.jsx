// Pagina "Politica de Cookies" (extra sugerido na proposta).
//
// O CookieBanner (src/components/CookieBanner.jsx) usa o localStorage do
// browser, e nao cookies HTTP tradicionais, para lembrar a escolha do
// utilizador. Explicamos isso aqui em vez de inventar cookies que o site
// nao usa de facto - mais correto do que copiar um modelo generico sem
// verificar se corresponde ao que a pagina realmente faz.
function CookiePolicy() {
  return (
    <main className="legal-page">
      <h1>Politica de Cookies</h1>
      <p>Ultima atualizacao: 06/07/2026</p>

      <section>
        <h2>1. O que sao cookies</h2>
        <p>
          Cookies sao pequenos ficheiros guardados no seu dispositivo pelo
          browser, usados para lembrar informacao entre visitas a um
          website.
        </p>
      </section>

      <section>
        <h2>2. O que usamos neste site</h2>
        <p>
          O website da Casa Ramen nao usa cookies de publicidade nem de
          terceiros. Usamos apenas o localStorage do seu browser para
          guardar uma unica informacao: se ja aceitou o aviso de cookies
          apresentado no banner no fundo da pagina. Esta informacao fica
          apenas no seu dispositivo e nao e enviada para nenhum servidor.
        </p>
      </section>

      <section>
        <h2>3. Como gerir esta preferencia</h2>
        <p>
          Pode limpar esta informacao a qualquer momento apagando os dados
          de navegacao (cookies e dados de sites) do seu browser para este
          site. Da proxima visita, o banner de aceitacao voltara a aparecer.
        </p>
      </section>

      <section>
        <h2>4. Mais informacao</h2>
        <p>
          Para questoes sobre esta politica, contacte-nos atraves do email{" "}
          <a href="mailto:casaramem@gmail.com">casaramem@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}

export default CookiePolicy;
