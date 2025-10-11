import { Shield, Leaf, DollarSign, Wrench, Award, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Cerraduras multipunto y vidrio de seguridad. Protección total para tu hogar.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Materiales reciclables y procesos eco-friendly. Reducción de huella de carbono.",
  },
  {
    icon: DollarSign,
    title: "Ahorro Energético",
    description: "Hasta 40% menos en costos de climatización. Inversión que se paga sola.",
  },
  {
    icon: Wrench,
    title: "Fácil Mantenimiento",
    description: "Materiales resistentes que no requieren pintura ni mantenimiento frecuente.",
  },
  {
    icon: Award,
    title: "Garantía 10 Años",
    description: "Respaldamos la calidad de nuestros productos con garantía extendida.",
  },
  {
    icon: Clock,
    title: "Instalación Rápida",
    description: "Equipo profesional certificado. Instalación en menos de 24 horas.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            ¿Por Qué Elegir Nuestras Ventanas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de vanguardia, diseño elegante y beneficios reales para tu hogar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
