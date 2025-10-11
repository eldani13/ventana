import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const products = [
  {
    id: "abatibles",
    name: "Ventanas Abatibles",
    description: "Apertura clásica con excelente hermeticidad y aislamiento. Ideales para espacios que requieren ventilación controlada.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Apertura hacia interior o exterior",
      "Excelente sellado hermético",
      "Fácil limpieza desde el interior",
      "Mayor seguridad",
    ],
    priceFrom: "5,000",
  },
  {
    id: "correderas",
    name: "Ventanas Correderas",
    description: "Sistema de deslizamiento que ahorra espacio. Perfectas para balcones y áreas reducidas con acceso a terrazas.",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Ahorro de espacio",
      "Deslizamiento suave",
      "Ideal para áreas amplias",
      "Fácil operación",
    ],
    priceFrom: "4,500",
  },
  {
    id: "panoramicas",
    name: "Ventanas Panorámicas",
    description: "Amplias superficies de vidrio para máxima entrada de luz natural. Transforman espacios con vistas espectaculares.",
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Vista sin obstáculos",
      "Máxima luminosidad",
      "Diseño minimalista",
      "Integración arquitectónica",
    ],
    priceFrom: "8,000",
  },
  {
    id: "aislantes",
    name: "Ventanas Aislantes",
    description: "Triple acristalamiento y perfiles reforzados. Máximo aislamiento térmico y acústico para confort superior.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Triple acristalamiento",
      "Reducción de ruido hasta 45 dB",
      "Ahorro energético hasta 40%",
      "Vidrio bajo emisivo",
    ],
    priceFrom: "7,500",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nuestras Soluciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ventanas diseñadas con tecnología de última generación para cada necesidad.
            Calidad, diseño y eficiencia energética garantizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  Desde ${product.priceFrom}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 group">
                  <a href="#configurador" className="flex items-center gap-2">
                    Configurar Ahora
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">¿No encuentras lo que buscas?</p>
          <Button variant="outline" size="lg">
            <a href="#cotizacion">Solicita una Asesoría Personalizada</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
