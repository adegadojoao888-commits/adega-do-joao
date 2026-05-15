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
          </div>
        </div>
      </section>
    </div>
  )
}
