import { Shield, Leaf, DollarSign, Wrench, Award, Clock } from "lucide-react";
import Image from "next/image";

import imageSeguridad from "../images/image_seguridad.jpg";
import imageSostenibilidad from "../images/image_sostenibilidad.jpg";
import imageAhorro from "../images/image_ahorro.jpg";
import imageMantenimiento from "../images/image_mantenimiento.jpg";
import imageGarantia from "../images/image_garantia.png";
import imageInstalacion from "../images/image_instalacion.jpg";

const benefits = [
    {
        icon: Shield,
        title: "Seguridad Garantizada",
        description: "Cerraduras multipunto y vidrio de seguridad. Protección total para tu hogar.",
        // image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        image: imageSeguridad
    },
    {
        icon: Leaf,
        title: "Sostenibilidad",
        description: "Materiales reciclables y procesos eco-friendly. Reducción de huella de carbono.",
        // image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
        image: imageSostenibilidad
    },
    {
        icon: DollarSign,
        title: "Ahorro Energético",
        description: "Hasta 40% menos en costos de climatización. Inversión que se paga sola.",
        // image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        image: imageAhorro
    },
    {
        icon: Wrench,
        title: "Fácil Mantenimiento",
        description: "Materiales resistentes que no requieren pintura ni mantenimiento frecuente.",
        // image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
        image: imageMantenimiento
    },
    {
        icon: Award,
        title: "Garantía 10 Años",
        description: "Respaldamos la calidad de nuestros productos con garantía extendida.",
        // image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
        image: imageGarantia
    },
    {
        icon: Clock,
        title: "Instalación Rápida",
        description: "Equipo profesional certificado. Instalación en menos de 24 horas.",
        // image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
        image: imageInstalacion
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
                                    {/* <img
                                        src={benefit.image || "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"}
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-300"
                                    /> */}
                                    <Image
                                        src={benefit.image}
                                        alt=""
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
