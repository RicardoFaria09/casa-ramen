import Hero from "../components/Hero";
import ImagePopup from "../components/ImagePopup";

// Fotos usadas na galeria da Home (extra sugerido na proposta). Sao as
// mesmas fotos (licenca Creative Commons) usadas no Menu e nas
// Especialidades - ver creditos em Aviso Legal. Aqui escolhemos so uma
// amostra (nao o menu completo) para dar uma ideia visual rapida do
// restaurante.
const galleryImages = [
  { src: "/images/dishes/tonkotsu-especial.jpg", alt: "Tonkotsu Especial" },
  { src: "/images/dishes/spicy-miso-ramen.jpg", alt: "Spicy Miso Ramen" },
  { src: "/images/dishes/veggie-shoyu-ramen.jpg", alt: "Veggie Shoyu Ramen" },
  { src: "/images/dishes/gyozas-de-frango.jpg", alt: "Gyozas de Frango" },
  { src: "/images/dishes/mochi-de-matcha.jpg", alt: "Mochi de Matcha" },
  { src: "/images/dishes/tonkotsu-ramen.jpg", alt: "Tonkotsu Ramen" },
];

// Pagina "Restaurante": e a pagina inicial (rota "/"), onde damos as
// boas-vindas ao utilizador e mostramos um resumo dos servicos.
function Home() {
  return (
    // main identifica o conteudo principal desta pagina.
    <main className="home-page">
      {/* Componente separado para manter a pagina Home mais organizada. */}
      <Hero />

      {/* Apresentacao curta do restaurante e da sua proposta. */}
      <section className="intro-section">
        <h2>Ramen artesanal no centro da cidade</h2>
        <p>
          Na Casa Ramen preparamos caldos ricos, noodles no ponto certo e
          toppings frescos. O nosso objetivo e criar uma refeicao quente,
          equilibrada e memoravel, inspirada na cozinha japonesa.
        </p>
      </section>

      {/* Destaques que encaminham o utilizador para as areas principais
          do site (menu, especialidades, reservas/grupos). Sao apenas
          texto informativo por agora; podem vir a ser transformados em
          <Link> para essas paginas. */}
      <section className="highlights-section">
        <article className="highlight-card">
          <h3>Ramen de assinatura</h3>
          <p>
            Bowls com caldos de miso, shoyu e tonkotsu, preparados com tempo e
            cuidado.
          </p>
        </article>

        <article className="highlight-card">
          <h3>Entradas japonesas</h3>
          <p>
            Gyozas, edamame e bao buns para acompanhar a refeicao principal.
          </p>
        </article>

        <article className="highlight-card">
          <h3>Reservas e grupos</h3>
          <p>
            Reserve mesa para jantar, almoco ou menus de grupo com opcoes de
            ramen para todos.
          </p>
        </article>
      </section>

      {/* Galeria de imagens (extra sugerido na proposta). Cada foto usa o
          ImagePopup para abrir ampliada ao clicar, tal como as imagens dos
          pratos no Menu. */}
      <section className="gallery-section">
        <h2>Galeria</h2>
        <div className="gallery-grid">
          {galleryImages.map((photo) => (
            <ImagePopup
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              thumbClassName="gallery-image"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
