import ImagePopup from "./ImagePopup";

// Cartao reutilizavel para apresentar um prato do menu.
//
// E usado tanto na pagina "Menu" (lista de pratos com preco) como na
// pagina "Especialidades" (cartoes maiores, com layout diferente definido
// em App.css atraves das classes ".specialties-list .dish-card").
//
// Props:
// - image: caminho da foto do prato (opcional). Se nao for passada, o
//   cartao simplesmente nao mostra imagem, em vez de ficar com um espaco
//   vazio ou uma imagem partida.
// - title: nome do prato.
// - description: breve descricao do prato.
// - price: preco a mostrar (ja formatado como texto, ex: "12,90 EUR").
// - titleAs: permite escolher o nivel do titulo ("h2" ou "h3"), para
//   manter a hierarquia de titulos correta em cada pagina onde o
//   componente e usado.
function DishCard({ image, title, description, price, titleAs = "h3" }) {
  // Cria dinamicamente o elemento de titulo (<h2> ou <h3>) a partir da prop.
  const TitleTag = titleAs;

  return (
    <article className="dish-card">
      {/* A imagem so aparece quando existe uma imagem definida para o
          prato. Usamos o ImagePopup (extra da proposta) em vez de um
          <img> simples, para a imagem abrir ampliada num pop-up ao clique. */}
      {image && (
        <ImagePopup src={image} alt={title} thumbClassName="dish-card-image" />
      )}

      <div className="dish-card-content">
        {/* Nome do prato e preco ficam agrupados no cabecalho do cartao. */}
        <div className="dish-card-header">
          <TitleTag>{title}</TitleTag>
          <span className="dish-card-price">{price}</span>
        </div>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default DishCard;
