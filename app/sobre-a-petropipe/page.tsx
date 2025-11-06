"use client";

import ParticlesBackground from "@/components/ParticlesBackground";
import MapaLocalizacao from "@/components/MapaLocalizacao";
import Image from "next/image";

export default function SobreAPetropipe() {
  return (
    <main className="relative min-h-screen py-16">
      

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative text-gray-900 py-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Sobre a Petropipe
            </h1>
            <p className="mt-6 text-xl text-gray-900 max-w-3xl mx-auto">
              Líder no fornecimento de soluções em aço inox para a indústria, com compromisso
              com qualidade e excelência em atendimento desde 01/01/2020.
            </p>
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

        {/* Seção Liderança */}
        <section className="py-16 bg-gray-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Nossa Liderança
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card Gestores */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className={`w-32 h-32 mx-auto mb-4 rounded-full ${i === 3 ? 'overflow-hidden border-2 border-blue-600 shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-400' : 'bg-gray-200'}`}>
                      {i === 3 && (
                        <Image
                          src="/images/gestor3.PNG"
                          alt="Foto do Gestor"
                          width={128}
                          height={128}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">[Nome do Gestor]</h3>
                    <p className="text-blue-600 text-center mb-4">[Cargo]</p>
                    <p className="text-gray-600 text-center">[Breve descrição da experiência]</p>
                  </div>
                </div>
              ))}
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
              { name: "D HONDT THERMAL SOLUTIONS", logo: "/images/dhondt2-logo.png", description: "Fabricante líder mundial de trocadores de calor." }
            ].map((partner, idx) => (
              <div key={idx} className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                  </div>
                  <div className="bg-white p-8 flex items-center justify-center">
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

        {/* Seção Localização */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Nossa Localização
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sede Petropipe</h3>
                <p className="text-gray-600 mb-6">[Endereço completo da empresa]</p>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.143 1.072a11.042 11.042 0 005.516 5.516l1.072-2.143a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"/>
                    </svg>
                    Telefone <br></br>
                    (11) 4526-4528
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m0 8l-4-4"/>
                    </svg>
                    Email  <br></br>
                    vendas@petropipe.com.br
                  </p>
                </div>
              </div>
              <div>
                <MapaLocalizacao />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
