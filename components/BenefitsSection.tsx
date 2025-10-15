"use client";
import { Shield, Leaf, DollarSign, Wrench, Award, Clock } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
    const [loadedMap, setLoadedMap] = useState<Record<number, { image: boolean }>>(() => {
        try {
            return benefits.reduce((acc, _b, i) => {
                const key = `bs:${i}:image`;
                acc[i] = { image: typeof window !== "undefined" && sessionStorage.getItem(key) === "1" };
                return acc;
            }, {} as Record<number, { image: boolean }>);
        } catch (e) {
            return benefits.reduce((acc, _b, i) => {
                acc[i] = { image: false };
                return acc;
            }, {} as Record<number, { image: boolean }>);
        }
    });

    const [minTimePassed, setMinTimePassed] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setMinTimePassed(true), 2000);
        return () => clearTimeout(t);
    }, []);

    function markLoaded(i: number) {
        const key = `bs:${i}:image`;
        try {
            sessionStorage.setItem(key, "1");
        } catch (e) {
        }
        setLoadedMap((prev) => ({ ...prev, [i]: { image: true } }));
    }

    function benefitIsReady(i: number) {
        const s = loadedMap[i];
        return !!s && s.image;
    }

    const isLoading = !minTimePassed || Object.values(loadedMap).some((s) => !s.image);

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white" aria-busy={isLoading}>
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
                        const ready = benefitIsReady(index);
                        const showContent = ready && minTimePassed;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Contenido principal */}
                                <div className="relative z-10 p-8">
                                    <div className="bg-white/70 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-[#0b72ba]/40 shadow-sm transition-colors duration-200">
                                        {!showContent ? (
                                            <Skeleton className="w-8 h-8 rounded-full" />
                                        ) : (
                                            <Icon className="h-8 w-8 text-[#0b72ba] transition-colors duration-200" />
                                        )}
                                    </div>

                                    {!showContent ? (
                                        <>
                                            <Skeleton className="h-6 w-48 mb-3" />
                                            <Skeleton className="h-4 w-full" />
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-bold mb-3 text-[#4a4a49]">{benefit.title}</h3>
                                            <p className="leading-relaxed text-[#7b7a7d]">{benefit.description}</p>
                                        </>
                                    )}
                                </div>

                                <div className="absolute top-0 right-0 w-2/3 h-full">
                                    <Image
                                        src={benefit.image}
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        onLoadingComplete={() => markLoaded(index)}
                                        loading="lazy"
                                        quality={60}
                                        className={`w-full h-full object-cover opacity-50 transition-opacity duration-200 group-hover:opacity-30 ${
                                            showContent ? "opacity-50" : "opacity-0"
                                        }`}
                                    />

                                    {!showContent && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Skeleton className="w-full h-full rounded-md" />
                                        </div>
                                    )}

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
