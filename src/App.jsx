import "./index.css";
import cardapio from "../Cardapio novo Venda.png";
import combos from "../CARDAPIO COMBO WHTS.png";

function App() {
  const whatsapp = "5511998923563";

  return (
    <div className="app">

      <section className="hero">

        <div className="overlay">

          <h1>ADEGA DO JOÃO</h1>

          <p>
  Bebidas geladas • Delivery rápido • Qualidade e confiança
</p>

<div className="promo-banner">
  🔥 CARVÃO 2KG APENAS R$ 13,99
</div>
          <div className="buttons">

            <a
              href={`https://wa.me/${whatsapp}?text=Olá,%20vim%20pelo%20site%20da%20Adega%20do%20João`}
              target="_blank"
              rel="noreferrer"
            >
              Pedir no WhatsApp
            </a>

            <a
              href="#cardapio"
              className="cardapio-btn"
            >
              🍺 Ver Cardápio
            </a>

            <a
              href="https://instagram.com/adegadojoaooficial"
              target="_blank"
              rel="noreferrer"
              className="insta"
            >
              Instagram
            </a>

          </div>

        </div>

      </section>

      <section id="cardapio" className="cardapio-section">

        <h2>CARDÁPIO</h2>

        <img
          src={cardapio}
          alt="Cardápio Adega do João"
          className="cardapio-img"
        />

      </section>

      <section className="cardapio-section">

        <h2>COMBOS ESPECIAIS</h2>

        <img
          src={combos}
          alt="Combos Adega do João"
          className="cardapio-img"
        />

      </section>

      <section className="infos">

        <div className="info-box">

          <h3>📍 Endereço</h3>

          <p>Rua General Frederico Sólon 244</p>
          <p>Chora Menino - SP</p>
          <p>CEP: 02462040</p>

        </div>

        <div className="info-box">

          <h3>🕒 Horário</h3>

          <p>Seg a Quinta: 13h às 22h</p>
          <p>Sexta e Sábado: 13h às 00h</p>
          <p>Domingo: 12h às 19h</p>

        </div>

        <div className="info-box">

          <h3>📲 Contato</h3>

          <p>(11) 99892-3563</p>

          <a
            className="whats-button"
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            CHAMAR NO WHATSAPP
          </a>

        </div>

      </section>

    </div>
  );
}

export default App;
