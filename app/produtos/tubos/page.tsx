import ProductCard from '@/components/ProductCard';

const tubosProdutos = [
  {
    name: 'Tubo Aço Inox 304',
    description: 'Tubo em aço inox 304 para aplicações industriais e alimentícias',
    specifications: [
      'Diâmetro: 1/2" a 6"',
      'Schedule: 5S a 40S',
      'Acabamento: Polido/Escovado',
      'Norma: ASTM A270'
    ],
    imageUrl: '/images/produtos/tubo-304.jpg'
  },
  {
    name: 'Tubo Aço Inox 316L',
    description: 'Tubo em aço inox 316L ideal para indústria química e farmacêutica',
    specifications: [
      'Diâmetro: 1/2" a 4"',
      'Schedule: 10S a 40S',
      'Acabamento: Polido Sanitário',
      'Norma: ASTM A269'
    ],
    imageUrl: '/images/produtos/tubo-316l.jpg'
  },
  {
    name: 'Tubo Aço Inox 321',
    description: 'Tubo em aço inox 321 para altas temperaturas',
    specifications: [
      'Diâmetro: 1" a 8"',
      'Schedule: 10S a 80S',
      'Acabamento: Natural',
      'Norma: ASTM A312'
    ],
    imageUrl: '/images/produtos/tubo-321.jpg'
  }
];

export default function TubosPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tubosProdutos.map((produto, index) => (
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