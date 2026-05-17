import React, { useState } from "react";

export default function App() {
  const whatsapp = "5511998923563";

  const produtos = {
    Cervejas: [
      { nome: "Amstel 269ml", preco: 3.49, imagem: "https://i.imgur.com/YpG8V9p.png" },
      { nome: "Brahma Duplo Malte 350ml", preco: 4.98, imagem: "https://i.imgur.com/M5kYh9S.png" },
      { nome: "Corona 330ml", preco: 9.99, imagem: "https://i.imgur.com/5W0X0qD.png" },
      { nome: "Heineken 269ml", preco: 4.69, imagem: "https://i.imgur.com/f1n4F6Y.png" },
      { nome: "Heineken 350ml", preco: 5.98, imagem: "https://i.imgur.com/f1n4F6Y.png" },
      { nome: "Original 269ml", preco: 3.99, imagem: "https://i.imgur.com/1z0KX7G.png" },
      { nome: "Skol 350ml", preco: 3.99, imagem: "https://i.imgur.com/jm9z4ZW.png" },
      { nome: "Spaten 269ml", preco: 3.89, imagem: "https://i.imgur.com/tQ0m7jP.png" },
    ],

    Refrigerantes: [
      { nome: "Coca-Cola 2L", preco: 13.99, imagem: "https://i.imgur.com/9sY6n3T.png" },
      { nome: "Coca-Cola Lata", preco: 5.49, imagem: "https://i.imgur.com/U5Jr8Y0.png" },
      { nome: "Guaraná Antarctica 2L", preco: 10.99, imagem: "https://i.imgur.com/Ikx5T6X.png" },
    ],

    Energéticos: [
      { nome: "Monster Energy", preco: 11.99, imagem: "https://i.imgur.com/J7v4m8Y.png" },
      { nome: "Red Bull", preco: 11.99, imagem: "https://i.imgur.com/h7sP7B5.png" },
    ],

    Ices: [
      { nome: "51 Ice Limão", preco: 8.99, imagem: "https://i.imgur.com/Fq0rK9n.png" },
      { nome: "Corote Ice", preco: 6.99, imagem: "https://i.imgur.com/tw7Qv7W.png" },
      { nome: "Smirnoff Ice", preco: 9.99, imagem: "https://i.imgur.com/3VQk2zI.png" },
    ],

    Extras: [
      { nome: "Gelo 2,5kg", preco: 7.0, imagem: "https://i.imgur.com/JL7R8mH.png" },
    ],
  };

  const [carrinho, setCarrinho] = useState([]);

  const adicionar = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const remover = (index) => {
    const novo = [...carrinho];
    novo.splice(index, 1);
    setCarrinho(novo);
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  const finalizarPedido = () => {
    const mensagem = carrinho
      .map((item) => `• ${item.nome} - R$ ${item.preco.toFixed(2)}`)
      .join("%0A");

    const url = `https://wa.me/${whatsapp}?text=🍻 Olá Adega do João! Quero pedir:%0A%0A${mensagem}%0A%0ATotal: R$ ${total.toFixed(
      2
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "Arial",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.75)",
            padding: "60px 20px",
            borderRadius: "20px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "70px",
              color: "#ffb300",
              marginBottom: "20px",
            }}
          >
            ADEGA DO JOÃO
          </h1>

          <p style={{ fontSize: "24px" }}>
            🍻 Bebidas Geladas • 🚚 Delivery Rápido • ⭐ Qualidade Premium
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://wa.me/5511998923563"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25D366",
                padding: "15px 35px",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Pedir Agora
            </a>

            <a
              href="https://instagram.com/adegadojoaooficial"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#E1306C",
                padding: "15px 35px",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Instagram
            </a>
          </div>

          <div
            style={{
              marginTop: "30px",
              color: "#00ff88",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            🟢 ABERTO AGORA
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      {Object.entries(produtos).map(([categoria, itens]) => (
        <section key={categoria} style={{ padding: "50px 20px" }}>
          <h2
            style={{
              color: "#ffb300",
              fontSize: "45px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            {categoria}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {itens.map((produto, index) => (
              <div
                key={index}
                style={{
                  background: "#111",
                  borderRadius: "20px",
                  padding: "20px",
                  border: "1px solid #222",
                  textAlign: "center",
                  boxShadow: "0 0 20px rgba(255,179,0,0.15)",
                }}
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    marginBottom: "15px",
                  }}
                />

                <h3 style={{ minHeight: "50px" }}>{produto.nome}</h3>

                <p
                  style={{
                    color: "#ffb300",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  R$ {produto.preco.toFixed(2)}
                </p>

                <button
                  onClick={() => adicionar(produto)}
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    padding: "14px",
                    background: "#25D366",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  + Adicionar ao Pedido
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CARRINHO */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          background: "#25D366",
          padding: "20px",
          borderRadius: "20px",
          width: "320px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>🛒 Meu Pedido</h3>

        <div style={{ maxHeight: "250px", overflowY: "auto" }}>
          {carrinho.length === 0 ? (
            <p>Nenhum item.</p>
          ) : (
            carrinho.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>
                    {item.nome}
                  </span>

                  <button
                    onClick={() => remover(index)}
                    style={{
                      background: "red",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "4px 8px",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <h2 style={{ marginTop: "15px" }}>
          Total: R$ {total.toFixed(2)}
        </h2>

        {carrinho.length > 0 && (
          <button
            onClick={finalizarPedido}
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "16px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Finalizar no WhatsApp
          </button>
        )}
      </div>

      {/* FOOTER */}
      <footer
        style={{
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #222",
          marginTop: "50px",
        }}
      >
        <h2 style={{ color: "#ffb300" }}>ADEGA DO JOÃO</h2>

        <p style={{ marginTop: "20px" }}>
          📍 Rua General Frederico Sólon portão 10
        </p>

        <p>📦 Chora Menino - SP - CEP 02462040</p>

        <p>📲 WhatsApp: (11) 99892-3563</p>

        <p>📸 Instagram: @adegadojoaooficial</p>

        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "#ffb300" }}>
            Horário de Funcionamento
          </h3>

          <p>Segunda a Quinta: 13h às 22h</p>
          <p>Sexta e Sábado: 13h às 00h</p>
          <p>Domingo: 12h às 19h</p>
        </div>
      </footer>
    </div>
  );
}
