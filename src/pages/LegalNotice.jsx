// Pagina "Aviso Legal" (extra sugerido na proposta).
//
// A Casa Ramen e um restaurante fictício, criado para o projeto final do
// curso, por isso o NIF abaixo e um numero de exemplo, nao um numero de
// contribuinte real.

// Creditos das fotos dos pratos (Menu, Especialidades e galeria da Home),
// todas obtidas no Wikimedia Commons com licenca Creative Commons. As
// licencas CC-BY e CC-BY-SA exigem atribuicao ao autor original - por
// isso listamos aqui o autor, a licenca e a pagina de origem de cada
// foto, tal como pedido na proposta do projeto ("ter em conta o
// licenciamento das imagens").
const imageCredits = [
  {
    dish: "Tonkotsu Ramen",
    author: "Syced",
    license: "CC0 1.0 (dominio publico)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tonkotsu_ramen_in_Tokyo.jpg",
  },
  {
    dish: "Gyozas de Frango",
    author: "Wesoree",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:10pc_Gyoza_plate.jpg",
  },
  {
    dish: "Edamame",
    author: "yomi955",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Edamame_on_a_bamboo_bowl_by_yomi955.jpg",
  },
  {
    dish: "Miso Ramen",
    author: "Tail furry",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Miso_Ramen,_Misa,_Joetsu,_Niigata,_Japan,_October_2020.jpg",
  },
  {
    dish: "Shoyu Ramen",
    author: "Guilhem Vellut",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shoyu_Ramen.jpg",
  },
  {
    dish: "Mochi de Matcha",
    author: "Fumikas Sagisavas",
    license: "CC0 1.0 (dominio publico)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Matcha_flavored_mochi.jpg",
  },
  {
    dish: "Dorayaki",
    author: "Ocdp",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dorayaki_001.jpg",
  },
  {
    dish: "Tonkotsu Especial",
    author: "Andy Li",
    license: "CC0 1.0 (dominio publico)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Char_Siu_Tonkotsu_Ramen_-_Shogun_Ramen_2023-10-11.jpg",
  },
  {
    dish: "Spicy Miso Ramen",
    author: "~delta",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Takeout_spicy_miso_ramen.jpg",
  },
  {
    dish: "Veggie Shoyu Ramen",
    author: "ノボホショコロトソ",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vegetable_ramen_in_Sapporo.jpg",
  },
];

function LegalNotice() {
  return (
    <main className="legal-page">
      <h1>Aviso Legal</h1>
      <p>Ultima atualizacao: 06/07/2026</p>

      <section>
        <h2>1. Identificacao</h2>
        <p>
          Este website e propriedade da Casa Ramen, com sede na Rua do
          Caldo, 24, Lisboa, Portugal (NIF de exemplo: 000 000 000).
          Contacto: <a href="mailto:casaramem@gmail.com">casaramem@gmail.com</a>{" "}
          / 912 345 678.
        </p>
      </section>

      <section>
        <h2>2. Objeto do site</h2>
        <p>
          O website tem como finalidade apresentar o restaurante Casa
          Ramen, o seu menu, especialidades e menus de grupo, e permitir
          aos utilizadores efetuar pedidos de reserva de mesa.
        </p>
      </section>

      <section>
        <h2>3. Propriedade intelectual</h2>
        <p>
          Os textos, imagens e restantes conteudos deste website sao
          propriedade da Casa Ramen ou dos respetivos autores, nao sendo
          permitida a sua reproducao sem autorizacao previa. As fotografias
          dos pratos sao imagens de terceiros com licenca Creative Commons -
          ver creditos na seccao seguinte.
        </p>
      </section>

      <section>
        <h2>4. Creditos de imagens</h2>
        <p>
          As fotografias dos pratos usadas no Menu, nas Especialidades e na
          galeria da pagina inicial foram obtidas no{" "}
          <a href="https://commons.wikimedia.org/" target="_blank" rel="noreferrer">
            Wikimedia Commons
          </a>{" "}
          e sao publicadas sob licenca Creative Commons. Em cumprimento das
          licencas CC BY e CC BY-SA, que exigem atribuicao ao autor
          original, seguem os creditos de cada foto:
        </p>

        <ul className="image-credits-list">
          {imageCredits.map((credit) => (
            <li key={credit.dish}>
              <strong>{credit.dish}</strong> - foto de {credit.author},{" "}
              <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                {credit.license}
              </a>
              ,{" "}
              <a href={credit.sourceUrl} target="_blank" rel="noreferrer">
                ver original
              </a>
              .
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>5. Limitacao de responsabilidade</h2>
        <p>
          A Casa Ramen procura manter a informacao deste site atualizada e
          correta, mas nao garante a ausencia de erros ou omissoes. Os
          precos e disponibilidade dos pratos podem ser alterados sem aviso
          previo.
        </p>
      </section>

      <section>
        <h2>6. Legislacao aplicavel</h2>
        <p>
          Este aviso legal rege-se pela legislacao portuguesa, sendo
          competente o foro da comarca de Lisboa para a resolucao de
          qualquer litigio.
        </p>
      </section>
    </main>
  );
}

export default LegalNotice;
