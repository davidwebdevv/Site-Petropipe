"use client";
import ParticlesBackground from "@/components/ParticlesBackground";

import MapaLocalizacao from "../../components/MapaLocalizacao";
import Image from "next/image";

export default function SobreAPetropipe() {
  return (
    <main className="min-h-screen py-16 bg-white">
      {/* Hero Section com informações principais da empresa */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        {/* EFEITO DE PARTÍCULAS */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground />
        </div>

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Sobre a Petropipe
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Líder no fornecimento de soluções em aço inox para a indústria, com compromisso
              com qualidade e excelência em atendimento desde 01/01/2020.
            </p>
          </div>
        </div>
      </section>
      {/* Seção Sobre a Empresa */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Nossa História
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Petropipe foi criada com objetivo de ser a melhor empresa de “Project Management” do mercado brasileiro, fornecendo
                materiais de fabricantes de qualidade comprovada e reconhecida sem perder o foco nos custos competitivos.
                O rigor crescente exigido pelos usuários finais nos projetos off-shore e on-shore (refinarias, plataformas, embarcações marítimas, plantas químicas e petroquímicas) reforça a necessidade de um parceiro confiável, com grande capacidade financeira e
                técnica de executar os contratos no prazo acordado e sem sobressaltos.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Estoque no Brasil e exterior de SuperDuplex, Duplex, aço inoxidável, Aço liga, Monel, Inconel, Hastelloy, Alloy, Carbono de alta resistência mecânica e Ligas especiais resistentes a corrosão, somos Fabricantes e distribuidores de tubos, conexões, flanges, tubing, forjados e peças especiais conforme desenho nas ligas mencionadas. Com CRC Petrobras, fornecimento a plataformas, navios, refinarias, petroquímicas e papel e celulose, fornecendo soluções muito competitivas.
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
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">[X]k+</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-500">Produtos</dt>
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">[X]k+</dd>
                  </div>
                  <div>
                    <dt className="text-lg font-medium text-gray-500">Colaboradores</dt>
                    <dd className="mt-2 text-3xl font-extrabold text-blue-600">[X]+</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Gestores e Líderes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Nossa Liderança
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Gestor 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  [Nome do Gestor]
                </h3>
                <p className="text-blue-600 text-center mb-4">[Cargo]</p>
                <p className="text-gray-600 text-center">
                  [Breve descrição da experiência e área de atuação]
                </p>
              </div>
            </div>

            {/* Card Gestor 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  [Nome do Gestor]
                </h3>
                <p className="text-blue-600 text-center mb-4">[Cargo]</p>
                <p className="text-gray-600 text-center">
                  [Breve descrição da experiência e área de atuação]
                </p>
              </div>
            </div>

            {/* Card Gestor 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-600 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-400">
                  <Image
                    src="/images/gestor3.png" // substitua pelo nome real da imagem
                    alt="Foto do Gestor"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  [Nome do Gestor]
                </h3>
                <p className="text-blue-600 text-center mb-4">[Cargo]</p>
                <p className="text-gray-600 text-center">
                  [Breve descrição da experiência e área de atuação]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Fabricante Parceira */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            <u>Nossos parceiros officiais</u>
          </h2>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stainalloy</h3>
                <div className="text-gray-600 mb-6">
                  <h1>Ao longo de várias décadas, a Stainalloy se consolidou como uma distribuidora e empresa de gerenciamento de projetos estabelecida nos setores de produção e processamento de petróleo e gás, geração de energia e dessalinização.</h1>
                  <h2>Além disso, como distribuidor especializado, oferecemos uma gama de produtos única e extensa em estoque, que inclui conjuntos de tubos de aço de alta liga e componentes relacionados, como conexões, flanges, peças forjadas e chapas.</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Gestão de projetos globais
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Área de estoque de 10.000 m² no armazém.
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Garantia de qualidade, testes e relatórios
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Entrega garantida no prazo
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Serviços de logística globais para o seu local.
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 flex items-center justify-center">
                <div className="relative w-[200px] h-[100px]">
                  <Image
                    src="/images/stainalloy-logo2.png"
                    alt="Logo da Stainalloy"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CUNOVA</h3>
                <div className="text-gray-600 mb-6">
                  <h1>Foco no cliente</h1>
                  <h2>Estamos comprometidos em atender às necessidades de nossos clientes e oferecer soluções personalizadas. Por meio de uma comunicação intensa, criamos parcerias de longo prazo baseadas na confiança. </h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Tecnologias de Fusão e Fundição
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Divisão de Serviços
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aplicações Marítimas
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aplicações industriais
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 flex items-center justify-center">
                <div className="relative w-[200px] h-[100px]">
                  <Image
                    src="/images/cunova-logo.png"
                    alt="Logo da Stainalloy"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">D’HONDT THERMAL SOLUTIONS</h3>
                <div className="text-gray-600 mb-6">
                  <h1>Instalações de Produção</h1>
                  <h2>A D&apos;THERMAL SOLUTIONS é uma fabricante líder mundial de trocadores de calor resfriados a ar, com duas fábricas principais:
                    Uma na área industrial de Jubail, na Arábia Saudita , para atender mais especificamente os mercados do Oriente Médio, e uma na Coreia do Sul para o mercado coreano e asiático, e mais globalmente para atender o resto do mundo.
                  </h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fabrica Industrial com area de +12.000 m²
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fabricação de cabeçotes
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Aletas de tubos
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Montagem de feixes tubulares
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Teste hidrostático
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 flex items-center justify-center">
                <div className="relative w-[200px] h-[100px]">
                  <Image
                    src="/images/dhondt2-logo.png"
                    alt="Logo da Stainalloy"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Localização */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Nossa Localização
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sede Petropipe</h3>
              <h1 className="text-gray-600 mb-6">
                [Endereço completo da empresa]
              </h1>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  [Telefone]
                </p>
                <p className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  [Email]
                </p>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <MapaLocalizacao />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}