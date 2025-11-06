import Banner from '../components/Banner';
import ParticlesBackground from "@/components/ParticlesBackground";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />

      {/* Seção de Categorias */}
      <section className="py-16 bg-white-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            <span className="inline-block bg-white-100 text-gray-900 px-4 py-3 rounded-md shadow-sm">
              Nossas categorias de Produtos
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Tubos */}
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105 npm">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/tubos/tubos.jpg"
                  alt="Tubos&Tubing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  TUBOS & TUBING
                </h3>
                <p className="text-gray-600">
                  Diâmetros conforme solicitação do projeto e
                  normas especificadas, com e sem costura,
                  espessuras e diâmetros tradicionais como
                  também especiais.
                </p>
                <a
                  href="/produtos/Tubos&Tubing"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Ver produtos
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card Conexões */}
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105 npm">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/conexões/conexões.jpg"
                  alt="Conexões"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CONEXÕES
                </h3>
                <p className="text-gray-600">
                  Curvas, Tes, Reduções Concêntricas e Excêntricas, Tampões e Peças Especiais, com e sem
                  costura, espessuras e diâmetros tradicionais
                  como também especiais.
                </p>
                <a
                  href="/produtos/Conexoes"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Ver produtos
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Card Flanges */}
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105 npm">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/flanges/flange1.PNG"
                  alt="Flanges"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  FLANGES
                </h3>
                <p className="text-gray-600">
                  Flanges Pescoço, Cego, Roscado, Sobreposto,
                  Encaixe e conforme desenho. Peças em
                  dimensões e libragem tradicionais ou
                  especiais.
                </p>
                <a
                  href="/produtos/Flanges"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Ver produtos
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Card Forjados */}
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105 npm">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/forjados/forjados.PNG"
                  alt="Forjados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  FORJADOS
                </h3>
                <p className="text-gray-600">
                  Cotovelos, Tes, Luvas, Meia Luva, Sockolets e
                  Forjados conforme desenho, espessuras e
                  diâmetros tradicionais como também especiais.
                </p>
                <a
                  href="/produtos/Forjados"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Ver produtos
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Card Multitubos */}
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow hover:bg-gray-100 transition-transform duration-300 hover:scale-105 npm">
              <div className="w-full h-48 relative">
                <Image
                  src="/images/multitubos/multitubos.jpg"
                  alt="Multitubos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  MULTITUBOS
                </h3>
                <p className="text-gray-600">
                  Aplicação básica para a Indústria Naval.
                  Acionamento (remoto) hidráulico / pneumático
                  de válvulas. Economia substancial de montagem,
                  evita soldas e repetitivos testes de linha e
                  proteção contra corrosão por água do mar.
                </p>
                <a
                  href="/produtos/Multitubos"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Ver produtos
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre a Empresa */}
      <section className="py-16 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Nossa História
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Petropipe foi criada com objetivo de ser a melhor empresa de “Project Management” do mercado brasileiro, fornecendo
                materiais de fabricantes de qualidade comprovada e reconhecida sem perder o foco nos custos competitivos.
                O rigor crescente exigido pelos usuários finais nos projetos off-shore e on-shore reforça a necessidade de um parceiro confiável.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Estoque no Brasil e exterior de SuperDuplex, Duplex, aço inoxidável, Aço liga, Monel, Inconel, Hastelloy, Alloy, Carbono de alta resistência mecânica e Ligas especiais resistentes a corrosão, somos Fabricantes e distribuidores de tubos, conexões, flanges, tubing, forjados e peças especiais conforme desenho.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Com anos de experiência no mercado, nos especializamos no fornecimento de produtos
                que atendem aos mais rigorosos padrões de qualidade e segurança.
              </p>
              <p className="text-lg text-gray-600">
                Nossa equipe altamente capacitada está sempre pronta para oferecer o melhor
                atendimento e soluções personalizadas para cada cliente.
              </p>
            </div>

            <div className="lg:ml-auto">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Números</h3>
                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-lg font-medium text-gray-500">Anos no Mercado</dt>
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">20 Anos</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-500">Clientes Atendidos</dt>
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">1.000</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-500">Produtos</dt>
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">NPS ½ até 48</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-500">Colaboradores</dt>
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">10</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Seção Por que nos escolher */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Por que nos escolher?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Qualidade */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Produtos certificados e com garantia de qualidade</p>
            </div>

            {/* Experiência */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Experiência</h3>
              <p className="text-gray-600">Anos de experiência no mercado</p>
            </div>

            {/* Entrega Rápida */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Logística eficiente para todo o Brasil</p>
            </div>

            {/* Suporte */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-gray-600">Equipe especializada à sua disposição</p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Parceiros */}
      <section className="py-16 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Nossos parceiros oficiais
          </h2>

          {[
            { name: "Stainalloy", logo: "/images/stainalloy-logo2.PNG", description: "Distribuidora especializada com ampla gama de produtos." },
            { name: "CUNOVA", logo: "/images/cunova-logo.PNG", description: "Foco no cliente e soluções personalizadas." },
            { name: "D’HONDT THERMAL SOLUTIONS", logo: "/images/dhondt2-logo.png", description: "Fabricante líder mundial de trocadores de calor." }
          ].map((partner, idx) => (
            <div key={idx} className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                </div>
                <div className="bg-white p-8 flex items-center justify-center transition-transform duration-300 hover:scale-105 npm">
                  <div className="relative w-[200px] h-[100px]">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
