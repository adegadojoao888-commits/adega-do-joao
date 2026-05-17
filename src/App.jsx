import './index.css'

const whatsapp = '5511998923563'

const produtos = {
  cervejas: [
    { nome: 'Amstel 269ml', preco: '3,49', imagem: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Brahma Duplo Malte 350ml', preco: '4,98', imagem: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Corona 330ml', preco: '9,99', imagem: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Heineken 269ml', preco: '4,69', imagem: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Heineken 350ml', preco: '5,98', imagem: 'https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Original 269ml', preco: '3,99', imagem: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Skol 350ml', preco: '3,99', imagem: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Skol 269ml', preco: '2,99', imagem: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Spaten 269ml', preco: '3,89', imagem: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop' },
  ],

  refrigerantes: [
    { nome: 'Coca-Cola 2L', preco: '13,99', imagem: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Coca-Cola Lata', preco: '5,49', imagem: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Guaraná Antarctica 2L', preco: '10,99', imagem: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=800&auto=format&fit=crop' },
  ],

  energeticos: [
    { nome: 'Monster Energy', preco: '11,99', imagem: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Red Bull', preco: '11,99', imagem: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=800&auto=format&fit=crop' },
  ],

  ices: [
    { nome: '51 Ice Limão Long Neck', preco: '8,99', imagem: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Corote Ice Sex On The Beach', preco: '6,99', imagem: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop' },
    { nome: 'Smirnoff Ice', preco: '9,99', imagem: 'https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=800&auto=format&fit=crop' },
  ],

  gelo: [
    { nome: 'Gelo 2,5kg', preco: '7,00', imagem: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop' },
  ]
}

function pedirProduto(nome, preco) {
  const mensagem = `Olá Adega do João! Quero pedir:%0A%0A${nome} - R$ ${preco}`
  window.open(`https://wa.me/${whatsapp}?text=${mensagem}`, '_blank')
}

function adicionarCombo(nome, preco) {
  const atual = JSON.parse(localStorage.getItem('combo')) || []
  atual.push({ nome, preco })
  localStorage.setItem('combo', JSON.stringify(atual))
  alert(`${nome} adicionado ao combo!`)
}

function finalizarCombo() {
  const combo = JSON.parse(localStorage.getItem('combo')) || []

  if (combo.length === 0) {
    alert('Adicione produtos ao combo!')
    return
  }

  let total = 0

  const itens = combo.map(item => {
    total += parseFloat(item.preco.replace(',', '.'))
    return `• ${item.nome} - R$ ${item.preco}`
  }).join('%0A')

  const mensagem = `Olá Adega do João!%0A%0AMontei meu combo:%0A%0A${itens}%0A%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}`

  window.open(`https://wa.me/${whatsapp}?text=${mensagem}`, '_blank')
}

function Categoria({ titulo, itens }) {
  return (
    <section className="categoria">
      <h2>{titulo}</h2>

      <div className="grid">
        {itens.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imagem} alt={item.nome} />

            <h3>{item.nome}</h3>

            <span>R$ {item.preco}</span>

            <button onClick={() => pedirProduto(item.nome, item.preco)}>
              Pedir Agora
            </button>

            <button
              className="comboBtn"
              onClick={() => adicionarCombo(item.nome, item.preco)}
            >
              Adicionar ao Combo
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="overlay">
          <h1>ADEGA DO JOÃO</h1>

          <p>
            Bebidas geladas • Delivery rápido • Qualidade e confiança
          </p>

          <div className="botoesHero">
            <a
              href="https://wa.me/5511998923563"
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
      </header>
    </div>
  )
}
