"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

// Images are served from `public/` — reference them by path strings
const imgEurofine = "/images-productsSection/image_eurofine58.webp";
const imgKommerling = "/images-productsSection/image_kommerling76_1.webp";
const imgPremidoor = "/images-productsSection/image_premidoor76.webp";
const imgPremiline = "/images-productsSection/image_premiline58.webp";

const productEurofine = "/images-productsSection/image_productEurofine.webp";
const productKommerling = "/images-productsSection/image_productKommerling.webp";
const productPremidoor = "/images-productsSection/image_productPremidoor.webp";
const productPremiline = "/images-productsSection/image_productPremiline.webp";

const products = [
    {
        id: "EuroFine58",
        name: "Ventanas EuroFine58",
        description: "Sistema de ventana de 58 mm versátil y eficiente, diseñado para alto aislamiento, evacuación de agua optimizada, compatibilidad con múltiples tipos de vidrio y herrajes, y disponible en acabados ecológicos y decorativos.",
        image: productEurofine,
        features: [
            "Aislamiento térmico eficiente",
            "Apertura interior y exterior",
            "Opciones decorativas en colores foliados",
            "Material ecológico y reciclable",
        ],
        model: imgEurofine,
    },
    {
        id: "Kömmerling 76",
        name: "Ventanas Kömmerling 76 AD Xtrem",
        description: "Sistema de ventana moderno de 76 mm, con buen aislamiento, estructura robusta, diseño funcional y materiales sostenibles.",
        image: productKommerling,
        features: [
            "Diseño moderno y estético",
            "Estructura robusta con refuerzo interno",
            "Ideal para zonas con alta exigencia térmica y acústica.",
            "Fácil mantenimiento gracias a sus acabados coextrusionados.",
        ],
        model: imgKommerling,
    },
    {
        id: "PREMIDOOR76",
        name: "Ventanas PREMIDOOR76",
        description: "Sistema de puerta corredera de alto rendimiento de 179 mm, con excelente aislamiento térmico, estructura robusta, gran capacidad de acristalamiento, protección antirrobo y opciones sostenibles y decorativas.",
        image: productPremidoor,
        features: [
            "Marco de gran dimensión con 5 cámaras de aire",
            "Protección antirrobo hasta clase RC2",
            "Conveniente en espacios que requieren accesibilidad universal.",
            "Accesibilidad para personas con movilidad reducida",
        ],
        model: imgPremidoor,
    },
    {
        id: "PremiLine58",
        name: "Ventanas PremiLine58",
        description: "Sistema de ventana corredera de 58 mm, con diseño esbelto, buena entrada de luz, aislamiento básico, estructura funcional y opciones sostenibles y decorativas.",
        image: productPremiline,
        features: [
            "Ideal para espacios que requieren buena entrada de luz natural.",
            "Rodamientos de alta calidad para deslizamiento suave",
            "Compatibilidad con vidrios de 4–6 mm y 18–20 mm",
            "Apto para puertas correderas de uso residencial.",
        ],
        model: imgPremiline,
    },
];

export default function ProductsSection() {
    const [loadedMap, setLoadedMap] = useState<Record<string, { image: boolean; model: boolean }>>(() => {
        try {
            return products.reduce((acc, p) => {
                const imgKey = `ps:${p.id}:image`;
                const modelKey = `ps:${p.id}:model`;
                acc[p.id] = {
                    image: typeof window !== "undefined" && sessionStorage.getItem(imgKey) === "1",
                    model: typeof window !== "undefined" && sessionStorage.getItem(modelKey) === "1",
                };
                return acc;
            }, {} as Record<string, { image: boolean; model: boolean }>);
        } catch (e) {
            return products.reduce((acc, p) => {
                acc[p.id] = { image: false, model: false };
                return acc;
            }, {} as Record<string, { image: boolean; model: boolean }>);
        }
    });

    const [minTimePassed, setMinTimePassed] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setMinTimePassed(true), 2000);
        return () => clearTimeout(t);
    }, []);

    function markLoaded(id: string, type: "image" | "model") {
        const key = `ps:${id}:${type}`;
        try {
            sessionStorage.setItem(key, "1");
        } catch (e) {
            // ignore
        }

        setLoadedMap((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [type]: true,
            },
        }));
    }

    function productIsReady(id: string) {
        const s = loadedMap[id];
        return !!s && s.image && s.model;
    }

    const isLoading = !minTimePassed ||
        Object.values(loadedMap).some((s) => !(s.image && s.model));

    return (
    <section className="py-16 md:py-24 bg-white" aria-busy={isLoading}>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4a4a49] mb-4">
                        Nuestras Soluciones
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Ventanas diseñadas con tecnología de última generación para cada necesidad.
                        Calidad, diseño y eficiencia energética garantizada.
                    </p>
                </div>

                {/* Products */}
                <div className="space-y-12 md:space-y-20">
                    {products.map((product, index) => {
                        const isEven = index % 2 === 0;
                        const ready = productIsReady(product.id);
                        const showContent = ready && minTimePassed;

                        return (
                            <div
                                key={product.id}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } gap-0 md:gap-8 lg:gap-12 items-center`}
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/2 relative overflow-hidden group">
                                        <div className="aspect-[4/3] md:aspect-[3/2] relative">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                onLoadingComplete={() => markLoaded(product.id, "image")}
                                                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                                                    showContent ? "opacity-100" : "opacity-0"
                                                }`}
                                            />

                                            {!showContent && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Skeleton className="w-full h-full rounded-md" />
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    {/* Model */}
                                    <div className="absolute top-6 right-6 w-20 h-20 bg-white rounded shadow-md flex items-center justify-center">
                                        <Image
                                            src={product.model}
                                            alt="Etiqueta decorativa de producto"
                                            width={80}
                                            height={80}
                                            onLoadingComplete={() => markLoaded(product.id, "model")}
                                            className={`w-full h-full object-contain transition-opacity duration-300 ${
                                                showContent ? "opacity-100" : "opacity-0"
                                            }`}
                                        />

                                        {!showContent && <Skeleton className="absolute w-12 h-12 rounded-md" />}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 px-4 md:px-0 py-8 md:py-0">
                                    {!showContent ? (
                                        <div className="space-y-4">
                                            <Skeleton className="h-8 w-3/4" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-4 w-full" />
                                                <Skeleton className="h-4 w-5/6" />
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4a4a49] mb-4">
                                                {product.name}
                                            </h3>

                                            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                                                {product.description}
                                            </p>
                                        </>
                                    )}

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {!showContent ? (
                                            Array.from({ length: 4 }).map((_, i) => (
                                                <Skeleton key={i} className="h-4 w-full rounded-md" />
                                            ))
                                        ) : (
                                            product.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className="bg-[#e0f0fb] rounded-full p-1 mt-0.5 flex-shrink-0">
                                                        <Check className="h-4 w-4 text-[#0b72ba]" />
                                                    </div>

                                                    <span className="text-gray-700 text-sm md:text-base">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))
                                        )}
                                    </div>

                                    {/* Button or skeleton for it */}
                                    {!showContent ? (
                                        <Skeleton className="h-12 w-40 rounded-md" />
                                    ) : (
                                        <Button
                                            className="bg-[#f25d21] hover:bg-[#d94d18] text-white px-8 py-6 text-base font-semibold group transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            <a
                                                href="#configurador"
                                                className="flex items-center gap-2"
                                            >
                                                Ver Más
                                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-200">
                    <p className="text-gray-600 text-lg mb-6">
                        ¿No encuentras lo que buscas?
                    </p>

                    {/* Botones en línea */}
                    <div className="flex justify-center gap-4 flex-wrap">
                        {/* Botón existente */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-gray-300 hover:border-[#f25d21] hover:text-[#f25d21] text-gray-700 px-8 py-6 text-base font-semibold transition-all duration-300"
                        >
                            <a href="#cotizacion">Solicita una Asesoría Personalizada</a>
                        </Button>

                        {/* Nuevo botón */}
                        <Button
                            size="lg"
                            className="bg-[#f25d21] hover:bg-[#d94d18] text-white px-8 py-6 text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <a href="#recursos">Ver Más Recursos</a>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}