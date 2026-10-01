import { Link } from "react-router-dom";
import GroupMenu from "../components/GroupMenu";

// Dados dos menus de grupo disponiveis. Manter isto num array separado do
// JSX facilita adicionar, remover ou editar um menu de grupo sem tocar na
// estrutura da pagina.
const groupMenus = [
  {
    title: "Menu Shoyu",
    price: "22 EUR por pessoa",
    description:
      "Opcao equilibrada para grupos pequenos que procuram uma refeicao simples e completa.",
    items: [
      "Gyozas de frango para partilhar",
      "Shoyu ramen com frango",
      "Mochi de matcha",
      "Cha verde ou agua",
    ],
  },
  {
    title: "Menu Tonkotsu",
    price: "28 EUR por pessoa",
    description:
      "Menu mais completo, pensado para jantares de grupo e celebracoes informais.",
    items: [
      "Edamame e gyozas para partilhar",
      "Tonkotsu ramen com chashu",
      "Dorayaki",
      "Bebida incluida",
    ],
  },
  {
    title: "Menu Veggie",
    price: "24 EUR por pessoa",
    description: "Opcao vegetariana com caldo vegetal, tofu e toppings frescos.",
    items: [
      "Edamame com sal marinho",
      "Veggie shoyu ramen",
      "Mochi de matcha",
      "Cha frio ou agua",
    ],
  },
];

// Pagina "Menu para Grupos": explica a logica dos menus de grupo e
// redireciona o utilizador para a pagina de Reservas, como pedido na
// proposta do projeto.
function Groups() {
  return (
    <main className="groups-page">
      <section className="page-header">
        <h1>Menus de Grupo</h1>
        <p>
          Temos opcoes especiais para almocos, jantares e celebracoes em grupo.
          Escolha um menu e faca a sua reserva com antecedencia.
        </p>
      </section>

      {/* Cada menu de grupo e apresentado com o componente GroupMenu,
          que usa um <details> para funcionar como dropdown. */}
      <section className="group-menus-list">
        {groupMenus.map((menu) => (
          <GroupMenu
            key={menu.title}
            title={menu.title}
            price={menu.price}
            description={menu.description}
            items={menu.items}
          />
        ))}
      </section>

      {/* Bloco final que redireciona o utilizador para a pagina de
          Reservas, cumprindo o requisito da proposta. */}
      <section className="group-reservation-box">
        <h2>Pronto para reservar?</h2>
        <p>
          Para grupos, recomendamos reserva antecipada para garantir lugar e
          preparar o servico com calma.
        </p>
        <Link className="reservation-link" to="/reservations">
          Ir para reservas
        </Link>
      </section>
    </main>
  );
}

export default Groups;
