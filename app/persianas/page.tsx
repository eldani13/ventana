"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";

export default function Persianas() {
    const tabs = {
        aislamiento: {
            title: "Aislamiento térmico",
            description:
                "El cajón RolaPlus, en función de su configuración, alcanza valores de transmitancia térmica (Usb) desde 0,79 W/m²K. Gracias a este nivel de aislamiento, la persiana contribuye a reforzar el rendimiento térmico de cualquier ventana, garantizando la eficiencia de los sistemas KÖMMERLING.",
        },
        seguridad: {
            title: "Aislamiento acústico",
            description:
                "Dependiendo del tipo de cerramiento, el sistema RolaPlus puede alcanzar una reducción acústica de hasta 43 dB. Esto es posible gracias a su alto nivel de hermeticidad, que impide la filtración de ondas sonoras transmitidas por el aire.",
        },
        durabilidad: {
            title: "Resistencia al impacto",
            description:
                "Las persianas con el sistema RolaPlus consiguen la clasificación CLASE C5 de Resistencia a las Cargas, la máxima concedida por la norma. Esto es gracias a la estabilidad que le confiere la sólida construcción del capialzado.",
        },
        diseño: {
            title: "Permeabilidad al aire",
            description:
                "RolaPlus consigue una clasificación de Permeabilidad al Aire de CLASE 4. Esta es la máxima clasificación según la norma, otorgada a los sistemas de capialzado más herméticos. Esto es posible gracias al cuidado diseño de los testeros y blendas del cajón, que permite una unión muy estanca entre los diferentes componentes. RolaPlus no permite filtraciones de aire, un problema común en los cajones de calidad mediocre que suelen instalarse en la mayoría de las viviendas.",
        },
    };

    const [activeTab, setActiveTab] = useState<keyof typeof tabs>("aislamiento");

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero */}
            <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Texto */}
                        <div className="space-y-6 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Persianas RolaPlus
                            </h1>

                            <h2 className="text-lg sm:text-xl text-slate-600 font-light">
                                Una persiana que no solo mantiene, sino que mejora el aislamiento de la ventana
                            </h2>

                            <p className="text-base text-slate-600 leading-relaxed">
                                La persiana suele ser el punto más débil de cualquier cerramiento. Un cajón mal aislado permite la entrada de aire, ruido y frío, comprometiendo el rendimiento térmico y acústico de la ventana.
                            </p>

                            <p className="text-base text-slate-600 leading-relaxed">
                                El sistema de persianas RolaPlus, único recomendado por KÖMMERLING, no solo conserva, sino que mejora los niveles de aislamiento del cerramiento.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a 
                                href="/#cotizacion"
                                className="px-8 py-4 bg-[#f25d21] text-white font-semibold rounded-sm shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
                                    Solicitar cotización
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="/docs/fichaTécnica-RolaPlus.pdf"
                                    download
                                    className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-sm hover:border-[#0b72ba] hover:text-[#0b72ba] hover:bg-blue-50 transition-all duration-300 inline-block text-center"
                                >
                                    Descargar ficha técnica
                                </a>
                            </div>

                            <p className="text-sm text-slate-500 pt-4">
                                Garantice el confort de su hogar eligiendo soluciones de calidad que le brinden eficiencia, seguridad y bienestar a largo plazo.
                            </p>
                        </div>

                        {/* Imagen */}
                        <div className="relative h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/productos/persianas-rolaplus.webp"
                                alt="Persiana RolaPlus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Prestaciones técnicas */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 sm:mb-16 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Prestaciones técnicas
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
                            KÖMMERLING ha diseñado el nuevo cajón RolaPlus que gracias a su tecnología consigue mejorar el aislamiento de tu ventana.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 sm:mb-10">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {(Object.keys(tabs) as (keyof typeof tabs)[]).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`p-3 sm:p-4 rounded-sm font-semibold transition-all duration-300 text-center ${activeTab === key
                                        ? "bg-[#f25d21] text-white shadow-lg scale-105"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent hover:border-slate-300"
                                        }`}
                                >
                                    {tabs[key].title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
                        {/* Imagen */}
                        <div className="rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-64 sm:h-80 md:h-96">
                            <Image
                                src="/productos/producto-rolaplus.webp"
                                alt="Prestaciones técnicas"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Texto */}
                        <div className="space-y-6">
                            <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-sm border border-[#0b72ba] shadow-lg">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#0b72ba] rounded-sm flex items-center justify-center">
                                        <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                                        {tabs[activeTab].title}
                                    </h3>
                                </div>
                                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                                    {tabs[activeTab].description}
                                </p>
                            </div>

                            {/* Badges */}
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                {["Máxima eficiencia", "Durabilidad", "Sostenible", "Garantía oficial"].map(
                                    (benefit) => (
                                        <div
                                            key={benefit}
                                            className="flex items-center gap-2 p-3 bg-slate-50 rounded-sm border border-slate-200"
                                        >
                                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm font-medium text-slate-700">
                                                {benefit}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
