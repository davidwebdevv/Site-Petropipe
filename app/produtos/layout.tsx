export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Nossos Produtos</h1>
          <p className="mt-2 text-gray-600">
            Conheça nossa linha completa de produtos em aço inox
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}