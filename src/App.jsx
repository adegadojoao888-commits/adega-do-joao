export default function App() {
  const whatsapp =
    "https://wa.me/5511998923563?text=Olá%20Adega%20do%20João,%20quero%20fazer%20um%20pedido";

  const combos = [
    {
      nome: "Combo Econômico",
      itens: "6 Skol 269ml + Gelo 2,5kg",
      preco: "R$ 23,99",
    },
    {
      nome: "Combo Resenha",
      itens: "6 Brahma Duplo Malte 350ml + 1 Guaraná Antarctica 2L + Gelo 2,5kg",
      preco: "R$ 39,99",
    },
    {
      nome: "Combo Premium",
      itens: "6 Heineken 350ml + 1 Monster 473ml + Gelo 2,5kg",
      preco: "R$ 49,99",
    },
    {
      nome: "Combo Casal",
      itens: "2 Heineken 350ml + 2 Red Bull 250ml + Gelo 2,5kg",
      preco: "R$ 36,99",
    },
    {
      nome: "Combo Ice",
      itens: "4 Corote Ice 275ml + Gelo 2,5kg",
      preco: "R$ 24,99",
    },
  ];

  const cervejas = [
    ["Heineken 269ml", "R$ 5,99"],
    ["Heineken 350ml", "R$ 7,49"],
    ["Corona 330ml", "R$ 9,99"],
    ["Original 269ml", "R$ 5,49"],
    ["Brahma Duplo Malte 350ml", "R$ 5,99"],
    ["Amstel 269ml", "R$ 4,99"],
    ["Skol 269ml", "R$ 4,49"],
    ["Spaten 269ml", "R$ 4,99"],
  ];

  const energeticos = [
    ["Monster 473ml", "R$ 11,99"],
    ["Red Bull 250ml", "R$ 11,99"],
  ];

  return (
    <div className="app">
      <header className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <span className="badge">🍻 ENTREGA RÁPIDA</span>

          <h1>ADEGA DO JOÃO</h1>

          <p>
            Cerveja gelada, combos especiais e entrega rápida direto na sua
            casa.
          </p>

          <div className="buttons">
            <a href={whatsapp} target="_blank">
              PEDIR NO WHATSAPP
            </a>

            <a
              href="https://instagram.com/adegadojoaooficial"
              target="_blank"
              className="instagram"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <h2>🔥 COMBOS EM DESTAQUE</h2>

        <div className="grid">
          {combos.map((combo, index) => (
            <div className="card combo-card" key={index}>
              <h3>{combo.nome}</h3>

              <p>{combo.itens}</p>

              <span>{combo.preco}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>🍺 CERVEJAS</h2>

        <div className="products">
          {cervejas.map((item, index) => (
            <div className="product" key={index}>
              <strong>{item[0]}</strong>
              <span>{item[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>⚡ ENERGÉTICOS</h2>

        <div className="products">
          {energeticos.map((item, index) => (
            <div className="product" key={index}>
              <strong>{item[0]}</strong>
              <span>{item[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="info">
        <div className="info-card">
          <h3>📍 ENDEREÇO</h3>

          <p>
            Rua General Frederico Sólon Portão 10
            <br />
            Chora Menino - SP
            <br />
            CEP: 02462-040
          </p>
        </div>

        <div className="info-card">
          <h3>🕒 HORÁRIO</h3>

          <p>
            Segunda a Quinta: 13h às 22h
            <br />
            Sexta e Sábado: 13h às 00h
            <br />
            Domingo: 12h às 19h
          </p>
        </div>
      </section>

      <a className="floating" href={whatsapp} target="_blank">
        💬
      </a>
    </div>
  );
}
