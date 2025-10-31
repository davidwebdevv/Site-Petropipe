import ProductCard from '@/components/ProductCard';

const conexoesProdutos = [
  {
    name: 'Cotovelo 90° Aço Inox',
    description: 'Cotovelo 90° em aço inox para sistemas de tubulação industrial',
    specifications: [
      'Material: Aço Inox 304/316L',
      'Diâmetro: 1/2" a 4"',
      'Acabamento: Polido',
      'Tipo: Industrial'
    ],
    imageUrl: '/images/produtos/cotovelo-90.jpg'
  },
  {
    name: 'Tê ',
    description: 'Tê  em aço inox para indústria Petrolifera',
    specifications: [
      'Material: Aço Inox 316L',
      'Diâmetro: 1" a 4"',
      'Acabamento: Polido Sanitário',
      'Norma: 3A'
    ],
    imageUrl: '/images/produtos/te.jpg'
  },
  {
    name: 'União SMS',
    description: 'União tipo SMS para conexão de tubulações',
    specifications: [
      'Material: Aço Inox 304/316L',
      'Diâmetro: 1" a 4"',
      'Vedação: EPDM/NBR',
      'Pressão: Até 10 bar'
    ],
    imageUrl: '/images/produtos/uniao-sms.jpg'
  }
];

export default function ConexoesPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conexoesProdutos.map((produto, index) => (
            <ProductCard
              key={index}
              name={produto.name}
              description={produto.description}
              specifications={produto.specifications}
              imageUrl={produto.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}