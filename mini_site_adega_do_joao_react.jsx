// =============================
// PROJETO COMPLETO - ADEGA DO JOÃO
// PRONTO PARA SUBIR NA VERCEL
// =============================

// =========================================
// 1. package.json
// =========================================

{
  "name": "adega-do-joao",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}

// =========================================
// 2. vite.config.js
// =========================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// =========================================
// 3. tailwind.config.js
// =========================================

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// =========================================
// 4. postcss.config.js
// =========================================

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// =========================================
// 5. src/main.jsx
// =========================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// =========================================
// 6. src/index.css
// =========================================

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  background: black;
  font-family: Arial, Helvetica, sans-serif;
}

// =========================================
// 7. src/App.jsx
// =========================================

export default function AdegaDoJoao() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section
        className="relative bg-cover bg-center min-h-[85vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            ADEGA DO JOÃO
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-zinc-200 leading-relaxed">
            Cerveja gelada, combos especiais e entrega rápida direto na sua casa.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
            >
              Pedir no WhatsApp
            </a>

            <a
              href="#combos"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-bold"
            >
              Ver Combos
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Entrega Rápida',
              desc: 'Receba sua bebida gelada sem sair de casa.',
            },
            {
              title: 'Combos Econômicos',
              desc: 'Ofertas especiais para resenha, casal e esquenta.',
            },
            {
              title: 'Bebidas Sempre Geladas',
              desc: 'Qualidade e temperatura perfeita para sua noite.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="combos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold">Combos Mais Pedidos</h2>
            <p className="text-zinc-400 mt-4 text-lg">
              Aproveite as promoções mais pedidas da Adega do João.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nome: 'Combo Amigos',
                itens: '4 Heineken + gelo',
                preco: 'R$ 32,99',
              },
              {
                nome: 'Combo Vira Noite',
                itens: '6 Skol + 2 Corote Ice + gelo',
                preco: 'R$ 41,90',
              },
              {
                nome: 'Combo Balada Casal',
                itens: '2 Heineken + 2 Red Bull',
                preco: 'R$ 39,90',
              },
            ].map((combo, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl"
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold">{combo.nome}</h3>
                  <p className="text-zinc-400 mt-4 text-lg">{combo.itens}</p>

                  <div className="mt-8 text-4xl font-extrabold text-green-400">
                    {combo.preco}
                  </div>

                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    className="block mt-8 bg-green-500 hover:bg-green-600 transition text-center py-4 rounded-2xl font-bold text-lg"
                  >
                    Quero Pedir
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-green-500 text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold">
            Sua resenha começa aqui.
          </h2>

          <p className="mt-6 text-xl font-medium leading-relaxed">
            Chama no WhatsApp e peça agora suas bebidas geladas.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="inline-block mt-10 bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            Fazer Pedido
          </a>
        </div>
      </section>

      <footer className="bg-black border-t border-zinc-800 py-10 text-center text-zinc-400 px-6">
        <p className="text-lg">Adega do João © 2026</p>
        <p className="mt-2">Atendimento via WhatsApp • Delivery</p>
      </footer>
    </div>
  )
}
