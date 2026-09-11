import { useEffect, useState } from "react";
import Latinhas from "@/images/Latinhas.jpeg";
import ImagemAluminios from "@/images/ImagemAluminios.jpeg";
import ImagemFerro from "@/images/ImagemMista.jpeg";
import ImagemBateria from "@/images/ImagemBaterias.jpeg";
import ImagemEletronicos from "@/images/ImagemSucataEletronicos.jpeg";
import imagemMista from "@/images/ImagemMistaComGarra.jpeg";
import FerroFundido from "@/images/ImagemFerroFundido.jpg";
import AluminioBloco from "@/images/ImagemSucataAluminio.jpg";
import Perfil from "@/images/ImagemPerfil.jpg";
import SucataArCondicionado from "@/images/Sucata Arcondicionado.jpg";
import Motores_Geladeira from "@/images/ImagemMotoresGeladeira.jpg";
import Motores from "@/images/ImagemMotores.jpg";

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  carouselImages?: string[];
  color: string;
}

const materials: Material[] = [
  {
    id: "eletronicos",
    name: "Eletrônicos",
    description:
      "Compra e processamento de computadores, celulares, tablets, placas e componentes eletrônicos.",
    image: `${ImagemEletronicos}`,
    color: "from-slate-400 to-slate-500",
  },
  {
    id: "ferro",
    name: "Ferro",
    description:
      "Compra e processamento de ferro e materiais leves/pesados, oferecendo coleta rápida e destinação adequada.",
    image: `${ImagemFerro}`,
    carouselImages: [ImagemFerro, imagemMista, FerroFundido],
    color: "from-slate-400 to-slate-500",
  },
  {
    id: "aluminio",
    name: "Alumínio",
    description:
      "Compra de metais como alumínio, bronze e inox, garantindo avaliação justa para valorizar seu resíduo.",
    image: `${ImagemAluminios}`,
    carouselImages: [ImagemAluminios, AluminioBloco, Perfil],
    color: "from-slate-400 to-slate-500",
  },
  {
    id: "latinha",
    name: "Latinha",
    description:
      "Reciclagem de latas, retalhos de alumínio e materiais metálicos similares.",
    image: `${Latinhas}`,
    color: "from-slate-400 to-slate-500",
  },
  {
    id: "baterias",
    name: "Baterias",
    description:
      "Coleta e descarte adequado de baterias automotivas, recarregáveis e componentes diversos.",
    image: `${ImagemBateria}`,
    color: "from-slate-400 to-slate-500",
  },
  {
    id: "Motores",
    name: "Motores",
    description:
      "Especializada na compra e reciclagem industrial de motores, focando no reaproveitamento máximo e descarte responsável.",
    image: `${imagemMista}`,
    carouselImages: [Motores_Geladeira, SucataArCondicionado, Motores],
    color: "from-slate-400 to-slate-500",
  },
];

export default function MaterialsGallery() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCarouselImageIndex(currentIndex => currentIndex + 1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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
            Trabalhamos com sucatas ferrosas e não ferrosas. Entre em contato e
            saiba mais sobre nossos serviços de coleta e comercialização.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map(material => (
            <div
              key={material.id}
              onClick={() =>
                setSelectedMaterial(
                  selectedMaterial === material.id ? null : material.id
                )
              }
              className="industrial-card cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200 bg-black">
                {(material.carouselImages ?? [material.image]).map(
                  (image, imageIndex) => {
                    const isCurrentImage =
                      imageIndex ===
                      carouselImageIndex %
                        (material.carouselImages?.length ?? 1);

                    return (
                      <img
                        key={image}
                        src={image}
                        alt={isCurrentImage ? material.name : ""}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                          isCurrentImage ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    );
                  }
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${material.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
