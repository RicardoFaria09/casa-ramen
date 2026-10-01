import DishCard from "../components/DishCard";

// Pratos em destaque, apresentados como cartoes independentes.
// Tal como em Menu.jsx, guardamos os dados num array para reutilizar o
// componente DishCard em vez de repetir a mesma estrutura tres vezes.
//
// NOTA sobre as imagens: ver comentario identico em Menu.jsx sobre a
// origem e licenca das fotos.
const specialties = [
  {
    title: "Tonkotsu Especial",
    description:
      "Caldo cremoso cozinhado lentamente, chashu, ovo marinado, cebolinho e oleo aromatico.",
    price: "15,90 EUR",
    image: "/images/dishes/tonkotsu-especial.jpg",
  },
  {
    title: "Spicy Miso Ramen",
    description:
      "Miso picante, noodles firmes, milho, cogumelos, rebentos de bambu e ovo marinado.",
    price: "14,50 EUR",
    image: "/images/dishes/spicy-miso-ramen.jpg",
  },
  {
    title: "Veggie Shoyu Ramen",
    description:
      "Caldo vegetal com soja, tofu grelhado, legumes frescos e sementes de sesamo.",
    price: "13,50 EUR",
    image: "/images/dishes/veggie-shoyu-ramen.jpg",
  },
];

function Specialties() {
  return (
    <main className="specialties-page">
      <section className="page-header">
        <h1>Especialidades</h1>
        <p>
          Conheca os bowls mais apreciados da Casa Ramen, preparados com caldos
          ricos, noodles frescos e toppings selecionados.
        </p>
      </section>

      <section className="specialties-list">
        {/* Aqui usamos titleAs="h2" porque, nesta pagina, cada prato e
            um bloco principal de conteudo (nao ha um h2 de categoria como
            acontece na pagina Menu). */}
        {specialties.map((dish) => (
          <DishCard
            key={dish.title}
            title={dish.title}
            description={dish.description}
            price={dish.price}
            image={dish.image}
            titleAs="h2"
          />
        ))}
      </section>
    </main>
  );
}

export default Specialties;
