"use client";
import { Shield, Leaf, DollarSign, Wrench, Award, Clock } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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

const colors = {
    primary: "#0b72ba",
    text: "#4a4a49",
    textSecondary: "#7b7a7d",
};

export default function BenefitsSection() {
    const [isvisible, setisvisible] = useState(false);
    const [activeindex, setactiveindex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setisvisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const handledotclick = (index: any) => {
        setactiveindex(index);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: colors.text }}
                    >
                        ¿Por qué elegir nuestras ventanas?
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto"
                        style={{ color: colors.primary }}
                    >
                        Tecnología de vanguardia, diseño elegante y beneficios reales para tu hogar
                    </p>
                </div>
                <div className="flex items-center justify-center mb-6 text-sm text-gray-500 animate-pulse">
                    <span className="flex items-center gap-2">
                        <span className="inline-block">Desliza para ver más</span>
                        <span className="inline-block text-blue-500">&rarr;</span>
                    </span>
                </div>
                <div className="w-full">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full relative select-none cursor-grab active:cursor-grabbing"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <CarouselItem
                                        key={`${benefit.title}-${index}`}
                                        className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                    >
                                        <div
                                            className={`flex flex-col items-center justify-center p-6 rounded-lg bg-white border transition-all duration-300 h-full transform ${isvisible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-4"
                                                }`}
                                            style={{
                                                transitionDelay: isvisible ? `${index * 100}ms` : "0ms",
                                                borderColor: `${colors.primary}33`,
                                                minHeight: "300px",
                                            }}
                                        >
                                            <div
                                                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border"
                                                style={{
                                                    backgroundColor: `${colors.primary}19`,
                                                    borderColor: `${colors.primary}33`,
                                                }}
                                            >
                                                <Icon
                                                    className="h-10 w-10"
                                                    style={{ color: colors.primary }}
                                                />
                                            </div>

                                            <div className="text-center w-full">
                                                <h3
                                                    className="text-lg font-bold mb-3"
                                                    style={{ color: colors.text }}
                                                >
                                                    {benefit.title}
                                                </h3>
                                                <p
                                                    className="text-sm leading-relaxed"
                                                    style={{ color: colors.textSecondary }}
                                                >
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
