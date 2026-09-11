import { useState } from 'react';
import Latinhas from '@/images/Latinhas.jpeg'
import ImagemAluminios from "@/images/ImagemAluminios.jpeg"
import ImagemFerro from '@/images/ImagemMista.jpeg'
import ImagemBateria from '@/images/ImagemBaterias.jpeg'
import ImagemEletronicos from '@/images/ImagemSucataEletronicos.jpeg'
import imagemMista from '@/images/ImagemMistaComGarra.jpeg'

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

const materials: Material[] = [
  {
    id: 'eletronicos',
    name: 'Eletrônicos',
    description: 'Computadores, celulares, tablets, placas eletrônicas e componentes diversos.',
    image: `${ImagemEletronicos}`,
    color: 'from-slate-400 to-slate-500',
  },
  {
    id: 'ferro',
    name: 'Ferro',
    description: 'Ferro estrutural, chapas, tubos, sucata de ferro e aço de qualidade.',
    image: `${ImagemFerro}`,
    color: 'from-slate-400 to-slate-500',
  },
  {
    id: 'aluminio',
    name: 'Alumínio',
    description: 'Alumínio em pó, sucata de alumínio, perfis e chapas de primeira qualidade.',
    image: `${ImagemAluminios}`,
    color: 'from-slate-400 to-slate-500',
  },
  {
    id: 'latinha',
    name: 'Latinha',
    description: 'Latas de alumínio, sucata de alumínio e materiais similares.',
    image: `${Latinhas}`,
    color: 'from-slate-400 to-slate-500',
  },
  {
    id: 'baterias',
    name: 'Baterias',
    description: 'Baterias automotivas, baterias recarregáveis e componentes eletrônicos.',
    image: `${ImagemBateria}`,
    color: 'from-slate-400 to-slate-500',
  },
  {
    id: 'Ferro Misto',
    name: 'Ferro Misto',
    description: 'Materiais ferrosos, como geladeiras, micro-ondas, chapas, grades e outros itens metálicos.',
    image: `${imagemMista}`,
    color: 'from-slate-400 to-slate-500',
  },
];

export default function MaterialsGallery() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  return (
    <section id="materiais" className="py-20 bg-black">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-orange-600 mb-4">
            Nossos Materiais
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6"></div>
          <p className="font-roboto text-lg text-white max-w-2xl mx-auto">
            Trabalhamos com sucatas ferrosas e não ferrosas. Entre em contato e saiba mais sobre nossos serviços de coleta e comercialização.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material) => (
            <div
              key={material.id}
              onClick={() => setSelectedMaterial(selectedMaterial === material.id ? null : material.id)}
              className="industrial-card cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200 bg-black">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${material.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-black">
                <h3 className="font-montserrat font-bold text-2xl text-orange-600 mb-2">
                  {material.name}
                </h3>
                <p className="font-roboto text-white text-sm leading-relaxed">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="font-roboto text-white mb-6">
            Tem material para vender? Entre em contato conosco!
          </p>
          <a href="#contato" className="btn-primary">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
