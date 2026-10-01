import ReservationForm from "../components/ReservationForm";

// Pagina "Reservas": reune o formulario de reserva com informacao util
// sobre o restaurante (localizacao, horario e contactos), tal como
// pedido na proposta do projeto.
function Reservations() {
  return (
    <main className="reservations-page">
      <section className="page-header">
        <h1>Reservas</h1>
        <p>
          Reserve a sua mesa na Casa Ramen. Para grupos, recomendamos fazer o
          pedido com antecedencia.
        </p>
      </section>

      <section className="reservations-content">
        {/* Coluna esquerda: formulario de reserva, isolado no componente
            ReservationForm para manter esta pagina mais legivel. */}
        <div className="reservation-form-box">
          <h2>Pedido de reserva</h2>
          <ReservationForm />
        </div>

        {/* Coluna direita: informacao de apoio (localizacao, horario e
            contactos), agrupada em blocos "info-block" para facilitar o
            estilo e a leitura. */}
        <aside className="reservation-info">
          <h2>Informacao util</h2>

          <div className="info-block">
            <h3>Localizacao</h3>
            <p>Rua do Caldo, 24</p>
            <p>Lisboa, Portugal</p>

            {/* Mapa incorporado (extra sugerido na proposta: "ver a
                localizacao"). Usa o modo de incorporacao publico do
                Google Maps, que nao precisa de chave de API. */}
            <iframe
              className="location-map"
              title="Localizacao da Casa Ramen no mapa"
              src="https://www.google.com/maps?q=Rua+do+Caldo+24+Lisboa+Portugal&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="info-block">
            <h3>Horario</h3>
            <p>Terca a sexta: 12h00 - 15h00 / 19h00 - 23h00</p>
            <p>Sabado e domingo: 12h00 - 23h00</p>
          </div>

          <div className="info-block">
            <h3>Contactos</h3>
            <p>Email: casaramem@gmail.com</p>
            <p>Telefone: 912 345 678</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Reservations;
