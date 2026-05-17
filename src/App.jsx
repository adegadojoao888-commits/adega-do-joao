import "./index.css";
import { useState } from "react";

export default function App() {

  const whatsapp = "5511998923563";

  const produtos = [
    {
      categoria: "Cervejas",
      nome: "Amstel 269ml",
      preco: 3.49,
      imagem: "https://i.imgur.com/eY8G6Bl.png"
    },
    {
      categoria: "Cervejas",
      nome: "Brahma Duplo Malte 350ml",
      preco: 4.98,
      imagem: "https://i.imgur.com/HN6xV8T.png"
    },
    {
      categoria: "Cervejas",
      nome: "Corona 330ml",
      preco: 9.99,
      imagem: "https://i.imgur.com/1v6M7xB.png"
    },
    {
      categoria: "Cervejas",
      nome: "Heineken 269ml",
      preco: 4.69,
      imagem: "https://i.imgur.com/jM0Z8YB.png"
    },
    {
      categoria: "Cervejas",
      nome: "Heineken 350ml",
      preco: 5.98,
      imagem: "https://i.imgur.com/7LQ0n2R.png"
    },
    {
      categoria: "Cervejas",
      nome: "Original 269ml",
      preco: 3.99,
      imagem: "https://i.imgur.com/q6vP5qV.png"
    },
    {
      categoria: "Cervejas",
      nome: "Skol 350ml",
      preco: 3.99,
      imagem: "https://i.imgur.com/B8gR4kL.png"
    },
    {
      categoria: "Cervejas",
      nome: "Skol 269ml",
      preco: 2.99,
      imagem: "https://i.imgur.com/Yk7hX3w.png"
    },
    {
      categoria: "Cervejas",
      nome: "Spaten 269ml",
      preco: 3.89,
      imagem: "https://i.imgur.com/Kk1rD1N.png"
    },

    {
      categoria: "Refrigerantes",
      nome: "Coca-Cola 2L",
      preco: 13.99,
      imagem: "https://i.imgur.com/yvG7M4M.png"
    },
    {
      categoria: "Refrigerantes",
      nome: "Coca-Cola Lata",
      preco: 5.49,
      imagem: "https://i.imgur.com/eM9yN2L.png"
    },
    {
      categoria: "Refrigerantes",
      nome: "Guaraná Antarctica 2L",
      preco: 10.99,
      imagem: "https://i.imgur.com/3T6PqQK.png"
    },

    {
      categoria: "Energéticos",
      nome: "Monster Energy",
      preco: 11.99,
      imagem: "https://i.imgur.com/r7uM6n8.png"
    },
    {
      categoria: "Energéticos",
      nome: "Red Bull",
      preco: 11.99,
      imagem: "https://i.imgur.com/q9n7LkR.png"
    },

    {
      categoria: "Ices",
      nome: "51 Ice Limão",
      preco: 8.99,
      imagem: "https://i.imgur.com/3m1gN4R.png"
    },
    {
      categoria: "Ices",
      nome: "Corote Ice",
      preco: 6.99,
      imagem: "https://i.imgur.com/Lm8rN7M.png"
    },
    {
      categoria: "Ices",
      nome: "Smirnoff Ice",
      preco: 9.99,
      imagem: "https://i.imgur.com/X3lN9Qm.png"
    },

    {
      categoria: "Extras",
      nome: "Gelo 2,5kg",
      preco: 7.00,
      imagem: "https://i.imgur.com/UPv6w8P.png"
    }
  ];

  const [pedido, setPedido] = useState([]);

  function adicionar(produto) {
    setPedido([...pedido, produto]);
  }

  const total = pedido.reduce((acc, item) => acc + item.preco, 0);

  function finalizarPedido() {

    if (pedido.length === 0) {
      alert("Adicione itens ao pedido");
      return;
    }

    const mensagem =
      "🍺 *NOVO PEDIDO - ADEGA DO JOÃO* %0A%0A" +
      pedido.map(item => `• ${item.nome} - R$ ${item.preco.toFixed(2)}`).join("%0A") +
      `%0A%0A💰 *Total:* R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/${whatsapp}?text=${mensagem}`);
  }

  const categorias = [...new Set(produtos.map(p => p.categoria))];

  return (
    <div className="app">

      <section className="hero">

        <div className="overlay">

          <h1>ADEGA DO JOÃO</h1>

          <p>
            Bebidas geladas • Delivery rápido • Qualidade e confiança
          </p>

          <div className="buttons">

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
            >
              Pedir no WhatsApp
            </a>

            <a
              href="https://instagram.com/adegadojoaooficial"
              target="_blank"
              className="insta"
            >
              Instagram
            </a>

          </div>

        </div>

      </section>

      {categorias.map(categoria => (

        <section key={categoria} className="categoria">

          <h2>{categoria}</h2>

          <div className="grid">

            {produtos
              .filter(p => p.categoria === categoria)
              .map((produto, index) => (

                <div className="card" key={index}>

                  <img src={produto.imagem} alt={produto.nome} />

                  <h3>{produto.nome}</h3>

                  <p>R$ {produto.preco.toFixed(2)}</p>

                  <button onClick={() => adicionar(produto)}>
                    + Adicionar ao Pedido
                  </button>

                </div>
              ))
            }

          </div>

        </section>
      ))}

      <div className="pedido">

        <h3>🛒 Meu Pedido</h3>

        {pedido.length === 0 ? (
          <p>Nenhum item.</p>
        ) : (
          pedido.map((item, index) => (
            <div key={index} className="itemPedido">
              {item.nome}
            </div>
          ))
        )}

        <h2>Total: R$ {total.toFixed(2)}</h2>

        <button className="finalizar" onClick={finalizarPedido}>
          FINALIZAR NO WHATSAPP
        </button>

      </div>

      <footer>

        <h3>📍 Informações</h3>

        <p>Rua General Frederico Sólon portão 10</p>

        <p>CEP: 02462040 - Chora Menino - SP</p>

        <p>WhatsApp: (11) 99892-3563</p>

        <p>Instagram: @adegadojoaooficial</p>

        <br />

        <h3>⏰ Horário</h3>

        <p>Segunda a Quinta: 13h às 22h</p>

        <p>Sexta e Sábado: 13h às 00h</p>

        <p>Domingo: 12h às 19h</p>

      </footer>

    </div>
  );
}
