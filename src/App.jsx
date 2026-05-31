import { useState } from "react";

export default function SustainableWebsite() {
  const [showProjects, setShowProjects] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [recycleCount, setRecycleCount] = useState(0);

  const projects = [
    {
      title: "Horta Escolar Inteligente",
      description:
        "Projeto de cultivo sustentável dentro das escolas com reaproveitamento de água.",
      icon: "🌱",
    },
    {
      title: "Reciclagem Comunitária",
      description:
        "Coleta seletiva e transformação de resíduos em novos produtos úteis.",
      icon: "♻️",
    },
    {
      title: "Cidade Verde",
      description:
        "Criação de parques urbanos e ciclovias para reduzir a poluição.",
      icon: "🏙️",
    },
  ];
  return (
    <div className={`${darkMode ? "bg-gray-950 text-white" : "bg-gradient-to-b from-green-100 via-white to-green-50 text-gray-800"} min-h-screen overflow-hidden transition-all duration-500`}>
      {/* NAVBAR */}
      <nav className={`${darkMode ? "bg-black/70" : "bg-white/70"} backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-green-600">
            EcoFuture
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-5 py-2 rounded-full bg-green-600 text-white font-bold hover:scale-105 transition-all duration-300"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-36 bg-gradient-to-r from-green-700 to-emerald-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
            Futuro Sustentável
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Construindo um mundo melhor através da educação de qualidade,
            consumo consciente e cidades sustentáveis.
          </p>

          <button
            onClick={() => setShowProjects(!showProjects)}
            className="mt-8 px-8 py-4 bg-white text-green-700 font-bold rounded-full shadow-2xl hover:scale-110 hover:bg-green-100 transition-all duration-300"
          >
            {showProjects ? "Fechar Projetos" : "Explorar Projetos"}
          </button>
        </div>
      </section>

      {/* PROJETOS FUNCIONAIS */}
      {showProjects && (
        <section className="py-20 px-6 md:px-16 bg-white animate-slideDown">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-14">
            Projetos Sustentáveis
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-500 to-emerald-400 text-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className="text-6xl mb-6 animate-bounceSlow">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="leading-relaxed text-green-50">
                  {project.description}
                </p>

                <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-100 transition-all duration-300">
                  Participar
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CARDS */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-16">
          Objetivos Sustentáveis
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                alt="Escolas sustentáveis"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Melhores Escolas
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Educação sustentável com tecnologia, energia limpa e espaços
                verdes para formar cidadãos conscientes.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Consumo responsável"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Consumo Responsável
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Incentivando reciclagem, reutilização de materiais e consumo
                consciente para reduzir impactos ambientais.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">
            <div className="h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop"
                alt="Cidade sustentável"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Cidades Sustentáveis
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Comunidades inteligentes com áreas verdes, energia renovável e
                mobilidade urbana eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INFO */}
      <section className="py-24 bg-green-700 text-white relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Juntos pelo planeta 🌎
            </h2>

            <p className="text-lg leading-relaxed text-green-100">
              Pequenas ações podem transformar o mundo. Educação de qualidade,
              produção sustentável e cidades planejadas ajudam a proteger o
              meio ambiente para as futuras gerações.
            </p>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="mt-8 px-8 py-4 rounded-full bg-white text-green-700 font-bold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {showInfo ? "Ocultar Informações" : "Saiba Mais"}
            </button>

            {showInfo && (
              <div className="mt-8 bg-white/20 backdrop-blur-md p-6 rounded-3xl animate-slideDown border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Como ajudar o planeta?
                </h3>

                <ul className="space-y-4 text-green-50 text-lg">
                  <li>🌿 Economize água e energia.</li>
                  <li>♻️ Faça reciclagem sempre que possível.</li>
                  <li>🚲 Utilize bicicletas ou transporte público.</li>
                  <li>🌳 Plante árvores e preserve áreas verdes.</li>
                  <li>📚 Incentive a educação sustentável.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Natureza"
              className="rounded-3xl shadow-2xl w-full max-w-lg animate-float"
            />
          </div>
        </div>
      </section>

      {/* CONTADOR */}
      <section className={`${darkMode ? "bg-gray-900" : "bg-green-100"} py-20 px-6 transition-all duration-500`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-6">
            Impacto Sustentável
          </h2>

          <p className="text-lg mb-8">
            Clique para simular quantos materiais foram reciclados pela comunidade.
          </p>

          <div className="text-7xl font-extrabold text-green-500 mb-8 animate-bounceSlow">
            {recycleCount}
          </div>

          <button
            onClick={() => setRecycleCount(recycleCount + 1)}
            className="px-8 py-4 bg-green-600 text-white rounded-full font-bold shadow-2xl hover:scale-110 transition-all duration-300"
          >
            ♻️ Reciclar Material
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          EcoFuture
        </h3>

        <p>
          Desenvolvido para inspirar um futuro mais sustentável 💚
        </p>
      </footer>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-15px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease;
        }

        .animate-bounceSlow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
