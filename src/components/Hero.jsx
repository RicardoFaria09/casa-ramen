// Secao de destaque no topo da pagina inicial (Home).
// E um componente separado, em vez de estar direto em Home.jsx, para
// manter essa pagina mais curta e organizada por blocos.
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Pequeno rotulo acima do titulo, a identificar o tipo de restaurante. */}
        <p className="hero-label">Restaurante japones especializado em ramen</p>

        {/* Titulo principal da pagina (unico <h1> do site, aqui na Home). */}
        <h1>Casa Ramen</h1>

        <p>
          Bowls de ramen quentes, caldos preparados lentamente e ingredientes
          frescos para uma experiencia simples, confortavel e cheia de sabor.
        </p>
      </div>
    </section>
  );
}

export default Hero;
