import { Shield, Leaf, DollarSign, Wrench, Award, Clock } from "lucide-react";
import Image from "next/image";

const benefits = [
    {
        icon: Shield,
        title: "Seguridad Garantizada",
        description: "Cerraduras multipunto y vidrio de seguridad. Protección total para tu hogar.",
        image: "/images-benefitsSection/image_seguridad.webp"
    },
    {
        icon: Leaf,
        title: "Sostenibilidad",
        description: "Materiales reciclables y procesos eco-friendly. Reducción de huella de carbono.",
        image: "/images-benefitsSection/image_sostenibilidad.webp"
    },
    {
        icon: DollarSign,
        title: "Ahorro Energético",
        description: "Hasta 40% menos en costos de climatización. Inversión que se paga sola.",
        image: "/images-benefitsSection/image_ahorro.webp"
    },
    {
        icon: Wrench,
        title: "Fácil Mantenimiento",
        description: "Materiales resistentes que no requieren pintura ni mantenimiento frecuente.",
        image: "/images-benefitsSection/image_mantenimiento.webp"
    },
    {
        icon: Award,
        title: "Garantía 10 Años",
        description: "Respaldamos la calidad de nuestros productos con garantía extendida.",
        image: "/images-benefitsSection/image_garantia.webp"
    },
    {
        icon: Clock,
        title: "Instalación Rápida",
        description: "Equipo profesional certificado. Instalación en menos de 24 horas.",
        image: "/images-benefitsSection/image_instalacion.webp"
    },
];

export default function BenefitsSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4a4a49]">
                        ¿Por Qué Elegir Nuestras Ventanas?
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-[#0b72ba]">
                        Tecnología de vanguardia, diseño elegante y beneficios reales para tu hogar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Contenido principal */}
                                <div className="relative z-10 p-8">
                                    <div className="bg-white/70 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-[#0b72ba]/50 shadow-lg group-hover:bg-[#0b72ba]/20 group-hover:border-[#0b72ba] transition-all duration-300">
                                        <Icon className="h-8 w-8 text-[#0b72ba] transform group-hover:scale-110 transition-all duration-500" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-[#4a4a49]">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-[#7b7a7d]">{benefit.description}</p>
                                </div>

                                {/* Imagen de fondo con degradado */}
                                <div className="absolute top-0 right-0 w-2/3 h-full">
                                    <Image
                                        src={benefit.image} alt="" width={0} height={0}
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                                    />
                                    {/* Degradado de izquierda a derecha */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
