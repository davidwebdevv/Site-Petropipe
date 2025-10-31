import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  specifications: string[];
  imageUrl: string;
}

export default function ProductCard({ name, description, specifications, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden group card-lift">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {/* overlay for better contrast on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Especificações:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <button className="mt-6 w-full inline-flex items-center justify-center btn-primary py-2 px-4 rounded-md text-base font-medium transition-colors">
          Solicitar Orçamento
        </button>
      </div>
    </div>
  );
}