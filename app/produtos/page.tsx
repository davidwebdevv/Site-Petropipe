import Link from 'next/link';

export default function ProdutosPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Categorias de Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link href="/produtos/Tubos&Tubing" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Tubos</h3>
            <p className="mt-2 text-sm text-gray-600">Tubo Aço Inox 304, 316L, 321 e outros</p>
          </Link>

          <Link href="/produtos/Conexoes" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Conexões</h3>
            <p className="mt-2 text-sm text-gray-600">Cotovelo, Tê, União, Flanges e mais</p>
          </Link>

          <Link href="/produtos/Flanges" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg">
            <h3 className="text-lg font-semibold">Flanges</h3>
            <p className="mt-2 text-sm text-gray-600">Válvulas borboleta, esfera, retenção e outras</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
