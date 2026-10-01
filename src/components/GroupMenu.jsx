// Cartao de menu de grupo com um dropdown (usando a tag nativa <details>).
// Usar <details>/<summary> em vez de JavaScript e estado (useState) e uma
// forma simples de ter um "dropdown" totalmente acessivel e funcional,
// sem logica extra: o proprio browser trata do abrir/fechar.
//
// Props aceites:
// - title       (string)          -> nome do menu, ex: "Menu Shoyu"
// - price       (string)          -> preco, ex: "22 EUR por pessoa"
// - description (string)          -> breve descricao do menu
// - items       (array de string) -> lista de pratos/bebidas incluidos
function GroupMenu({ title, price, description, items }) {
  return (
    <details className="group-menu-card">
      {/* <summary> e o cabecalho sempre visivel, no qual se clica para
          abrir ou fechar o conteudo do <details>. */}
      <summary>
        <span>{title}</span>
        <strong>{price}</strong>
      </summary>

      <p>{description}</p>

      {/* Cada item da lista precisa de uma "key" unica para o React
          conseguir atualizar a lista de forma eficiente. Como os nomes
          dos itens sao unicos dentro de cada menu, usamo-los como key. */}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </details>
  );
}

export default GroupMenu;
