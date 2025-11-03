import Link from 'next/link';

export default function ProdutosPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Categorias de Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link href="/produtos/Tubos&Tubing" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">TUBOS & TUBING</h3>
            <p className="mt-2 text-sm text-gray-600">Diâmetros conforme solicitação do projeto e
              normas especificadas, com e sem costura,
              espessuras e diâmetros tradicionais como
              também especiais</p>
          </Link>

          <Link href="/produtos/Conexoes" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Conexões</h3>
            <p className="mt-2 text-sm text-gray-600">Curvas, Tes, Reduções Concêntricas e Excêntricas, Tampões e Peças Especiais, com e sem
              costura, espessuras e diâmetros tradicionais
              como também especiais.</p>
          </Link>

          <Link href="/produtos/Flanges" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Flanges</h3>
            <p className="mt-2 text-sm text-gray-600">Flanges Pescoço, Cego, Roscado, Sobreposto,
              Encaixe e conforme desenho. Peças em
              dimensões e libragem tradicionais ou
              especiais.</p>
          </Link>
          <Link href="//Forjados" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Forjados</h3>
            <p className="mt-2 text-sm text-gray-600">Cotovelos, Tes, Luvas, Meia Luva, Sockolets e
              Forjados conforme desenho, espessuras e
              diâmetros tradicionais como também especiais.</p>
          </Link>
          <Link href="/produtos/Multitubos" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Multitubos</h3>
            <p className="mt-2 text-sm text-gray-600">Aplicação básica para a Indústria Naval.
              Acionamento (remoto) hidráulico / pneumático
              de válvulas. Economia substancial de montagem,
              evita soldas e repetitivos testes de linha e
              proteção contra corrosão por água do mar.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
