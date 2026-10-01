import DishCard from "../components/DishCard";

// Dados dos pratos, organizados por categoria.
// Manter os pratos num array de objetos (em vez de escrever cada
// <article> a mao) torna mais facil adicionar, remover ou editar pratos
// no futuro, e evita repetir a mesma estrutura de HTML varias vezes.
//
// NOTA sobre as imagens: fotos com licenca Creative Commons (CC0,
// CC-BY ou CC-BY-SA) do Wikimedia Commons - ver creditos e licencas em
// Aviso Legal (src/pages/LegalNotice.jsx).
const menuCategories = [
  {
    title: "Entradas",
    dishes: [
      {
        title: "Gyozas de Frango",
        description: "Pasteis japoneses grelhados, servidos com molho de soja.",
        price: "6,50 EUR",
        image: "/images/dishes/gyozas-de-frango.jpg",
      },
      {
        title: "Edamame",
        description: "Vagens de soja com sal marinho e toque de lima.",
        price: "4,80 EUR",
        image: "/images/dishes/edamame.jpg",
      },
    ],
  },
  {
    title: "Ramen",
    dishes: [
      {
        title: "Tonkotsu Ramen",
        description: "Caldo cremoso de porco, noodles, ovo marinado e chashu.",
        price: "14,90 EUR",
        image: "/images/dishes/tonkotsu-ramen.jpg",
      },
      {
        title: "Miso Ramen",
        description: "Caldo de miso, milho, cogumelos, ovo e legumes frescos.",
        price: "13,90 EUR",
        image: "/images/dishes/miso-ramen.jpg",
      },
      {
        title: "Shoyu Ramen",
        description: "Caldo leve com soja, frango, cebolinho e rebentos de bambu.",
        price: "12,90 EUR",
        image: "/images/dishes/shoyu-ramen.jpg",
      },
    ],
  },
  {
    title: "Sobremesas",
    dishes: [
      {
        title: "Mochi de Matcha",
        description: "Doce japones de arroz com recheio suave de matcha.",
        price: "5,50 EUR",
        image: "/images/dishes/mochi-de-matcha.jpg",
      },
      {
        title: "Dorayaki",
        description: "Panquecas japonesas recheadas com creme doce de feijao azuki.",
        price: "4,90 EUR",
        image: "/images/dishes/dorayaki.jpg",
      },
    ],
  },
];

function Menu() {
  return (
    // Pagina dedicada ao menu completo do restaurante.
    <main className="menu-page">
      {/* Cabecalho da pagina com titulo e pequena introducao. */}
      <section className="page-header">
        <h1>Menu</h1>
        <p>
          Conheca a nossa selecao de ramen, entradas japonesas e sobremesas
          simples para terminar a refeicao.
        </p>
      </section>

      {/* Percorremos as categorias definidas em "menuCategories" e, dentro de
          cada uma, os respetivos pratos, para gerar o HTML automaticamente. */}
      {menuCategories.map((category) => (
        <section className="menu-section" key={category.title}>
          <h2>{category.title}</h2>

          {category.dishes.map((dish) => (
            <DishCard
              key={dish.title}
              title={dish.title}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </section>
      ))}

      {/* Area pedida na proposta para indicar opcoes de takeaway. */}
      <section className="takeaway-section">
        <h2>Ramen Takeaway</h2>
        <p>
          Os nossos ramens tambem estao disponiveis para takeaway. O caldo e os
          noodles sao embalados separadamente para manter a textura ideal.
        </p>
      </section>
    </main>
  );
}

export default Menu;
