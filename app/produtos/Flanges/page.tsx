import ProductCard from '@/components/ProductCard';

const valvulasProdutos = [
  {
    name: 'Válvula Borboleta ',
    description: 'Válvula borboleta  em aço inox para controle de fluxo',
    specifications: [
      'Material: Aço Inox 316L',
      'Diâmetro: 1" a 4"',
      'Vedação: EPDM/PTFE',
      'Acionamento: Manual/Pneumático'
    ],
    imageUrl: '/images/produtos/valvula-borboleta.jpg'
  },
  {
    name: 'Válvula Esfera Tripartida',
    description: 'Válvula esfera tripartida em aço inox para isolamento',
    specifications: [
      'Material: Aço Inox 304/316',
      'Diâmetro: 1/2" a 4"',
      'Pressão: Até 1000 PSI',
      'Conexão: BSP/NPT'
    ],
    imageUrl: '/images/produtos/valvula-esfera.jpg'
  },
  {
    name: 'Válvula Retenção',
    description: 'Válvula de retenção em aço inox para prevenir retorno de fluxo',
    specifications: [
      'Material: Aço Inox 316',
      'Diâmetro: 1/2" a 3"',
      'Tipo: Portinhola/Pistão',
      'Pressão: Até 200 PSI'
    ],
    imageUrl: '/images/produtos/valvula-retencao.jpg'
  }
];

export default function ValvulasPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valvulasProdutos.map((produto, index) => (
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