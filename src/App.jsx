import React, { useState } from "react";

export default function App() {
  const whatsapp = "5511998923563";

  const produtos = [
    { nome: "Amstel 269ml", preco: 3.49 },
    { nome: "Brahma Duplo Malte 350ml", preco: 4.98 },
    { nome: "Corona 330ml", preco: 9.99 },
    { nome: "Heineken 269ml", preco: 4.69 },
    { nome: "Heineken 350ml", preco: 5.98 },
    { nome: "Original 269ml", preco: 3.99 },
    { nome: "Skol 350ml", preco: 3.99 },
    { nome: "Skol 269ml", preco: 2.99 },
    { nome: "Spaten 269ml", preco: 3.89 },
    { nome: "Coca-Cola 2L", preco: 13.99 },
    { nome: "Coca-Cola Lata", preco: 5.49 },
    { nome: "Guaraná Antarctica 2L", preco: 10.99 },
    { nome: "Monster Energy", preco: 11.99 },
    { nome: "Red Bull", preco: 11.99 },
    { nome: "51 Ice Limão", preco: 8.99 },
    { nome: "Corote Ice", preco: 6.99 },
    { nome: "Smirnoff Ice", preco: 9.99 },
    { nome: "Gelo 2,5kg", preco: 7.0 },
  ];

  const [combo, setCombo] = useState([]);

  const adicionarProduto = (produto) => {
    setCombo([...combo, produto]);
  };

  const removerProduto = (index) => {
    const novo = [...combo];
    novo.splice(index, 1);
    setCombo(novo);
  };

  const total = combo.reduce((acc, item) => acc + item.preco, 0);

  const enviarPedido = () => {
    const mensagem = combo
      .map((item) => `• ${item.nome} - R$ ${item.preco.toFixed(2)}`)
      .join("%0A");

    const url = `https://wa.me/${whatsapp}?text=Olá! Quero pedir:%0A%0A${mensagem}%0A%0ATotal: R$ ${total.toFixed(
      2
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1400&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.7)",
            padding: "60px 20px",
            borderRadius: "20px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              color: "#ffb300",
              marginBottom: "20px",
            }}
          >
            ADEGA DO JOÃO
          </h1>

          <p style={{ fontSize: "22px", marginBottom: "30px" }}>
            Bebidas geladas • Delivery rápido • Qualidade e confiança
          </p>

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
            Pedir no WhatsApp
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
      </section>

      <section style={{ padding: "50px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#ffb300",
            fontSize: "40px",
            marginBottom: "40px",
          }}
        >
          CARDÁPIO
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {produtos.map((produto, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "15px",
                border: "1px solid #222",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{produto.nome}</h3>

              <p
                style={{
                  color: "#ffb300",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                R$ {produto.preco.toFixed(2)}
              </p>

              <button
                onClick={() => adicionarProduto(produto)}
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  background: "#25D366",
                  border: "none",
                  borderRadius: "10px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Adicionar ao Combo
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "50px 20px",
          background: "#111",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ffb300",
            fontSize: "40px",
            marginBottom: "40px",
          }}
        >
          Monte Seu Combo
        </h2>

        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#000",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          {combo.length === 0 ? (
            <p>Nenhum item adicionado.</p>
          ) : (
            combo.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px",
                }}
              >
                <span>
                  {item.nome} - R$ {item.preco.toFixed(2)}
                </span>

                <button
                  onClick={() => removerProduto(index)}
                  style={{
                    background: "red",
                    border: "none",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  X
                </button>
              </div>
            ))
          )}

          <h3
            style={{
              marginTop: "30px",
              color: "#ffb300",
              fontSize: "30px",
            }}
          >
            Total: R$ {total.toFixed(2)}
          </h3>

          {combo.length > 0 && (
            <button
              onClick={enviarPedido}
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "18px",
                background: "#25D366",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Pedir Combo no WhatsApp
            </button>
          )}
        </div>
      </section>

      <section
        style={{
          padding: "40px 20px",
          textAlign: "center",
          background: "#000",
          borderTop: "1px solid #222",
        }}
      >
        <h3 style={{ color: "#ffb300" }}>INFORMAÇÕES</h3>

        <p style={{ marginTop: "20px" }}>
          📍 Rua General Frederico Sólon portão 10
        </p>

        <p>📦 Chora Menino - SP - CEP 02462040</p>

        <p>📲 WhatsApp: (11) 99892-3563</p>

        <p>📸 Instagram: @adegadojoaooficial</p>

        <div style={{ marginTop: "30px" }}>
          <h4 style={{ color: "#ffb300" }}>Horário de Funcionamento</h4>

          <p>Segunda a Quinta: 13h às 22h</p>
          <p>Sexta e Sábado: 13h às 00h</p>
          <p>Domingo: 12h às 19h</p>
        </div>
      </section>
    </div>
  );
}
