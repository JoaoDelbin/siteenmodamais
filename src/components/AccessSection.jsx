
function Check() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 mt-1 shrink-0" viewBox="0 0 20 20" fill="#C2F738">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0z"/>
    </svg>
  );
}

export default function AccessSection() {
  return (
    <section className="max-w-[1440px] bg-[#0D0A0B] mx-auto px-6 pt-6 pb-12 text-center mt-10">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-extrabold">O que você terá acesso</h2>
        <p className="mt-2 text-lg md:text-xl text-gray-200">
          tudo dentro do ecossistema <span className="font-extrabold">enmoda+</span>
        </p>

        
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-10">
          
          <div className="rounded-xl bg-[#110E0F] border-l-2 p-6 md:p-7 shadow max-w-[440px] w-full">
            <h3 className="text-xl font-extrabold mb-4">Benefícios imediatos</h3>
            <ul className="space-y-3 text-[15px] md:text-base">
              {[
                'Mais de 300 aulas',
                'Aulas semanais ao vivo',
                'Plataforma de vagas',
                'Comunidade exclusiva',
                'Suporte pedagógico personalizado',
              ].map(item => (
                <li key={item} className="flex gap-2">
                  <Check /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="rounded-xl bg-[#110E0F] border-l-2 p-6 md:p-7 shadow max-w-[440px] w-full">
            <h3 className="text-xl font-extrabold mb-4">
              Cursos com os principais especialistas do mercado:
            </h3>
            <ul className="space-y-3 text-[15px] md:text-base">
              {['Competências', 'Fundamentos', 'Soft Skills', 'Ferramentas'].map(item => (
                <li key={item} className="flex gap-2">
                  <Check /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
        <button
          className="mt-7 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A3F11E] text-[#0B0B15] font-semibold shadow hover:brightness-95 active:translate-y-[1px]"
        >
          QUERO COMEÇAR AGORA
        </button>
      </div>
    </section>
  );
}
