"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Thermometer, Volume2, ChevronLeft, ChevronRight } from "lucide-react";

import imageBackground1 from "../images/image_background_1.png";
import imageBackground2 from "../images/image_background_2.jpg";
import imageBackground3 from "../images/image_background_3.png";
import imageBackground4 from "../images/image_background_4.jpg";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920",
        // "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1920",
        // "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920",
        // "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageBackground3.src,
        imageBackground1.src,
        imageBackground4.src,
        imageBackground2.src
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Carousel Background */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url('${slide}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
                    </div>
                ))}
            </div>

            {/* Carousel Controls */}
            {/* <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
                aria-label="Siguiente imagen"
            >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" />
            </button> */}

            {/* Carousel Indicators */}
            <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "w-8 bg-[#f25d21]"
                                : "w-2 bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
                <div className="max-w-3xl lg:max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in">
                        Ventanas de Alta Calidad para tu Hogar
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                        Diseño innovador, aislamiento térmico superior y durabilidad garantizada.
                        Transforma tu espacio con nuestras soluciones en PVC y aluminio.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <Button 
                            size="lg" 
                            className="bg-[#f25d21] hover:bg-[#d94d18] text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        >
                            <a href="#configurador" className="flex items-center justify-center gap-2 w-full">
                                Configura tu Ventana
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#4a4a49] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                        >
                            <a href="#cotizacion" className="w-full">Solicitar Cotización</a>
                        </Button>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10">
                            <div className="bg-[#0b72ba] rounded-full p-3 flex-shrink-0 shadow-lg">
                                <Thermometer className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm sm:text-base">Aislamiento Térmico</h3>
                                <p className="text-gray-300 text-xs sm:text-sm">Ahorro de hasta 40% en energía</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10">
                            <div className="bg-[#0b72ba] rounded-full p-3 flex-shrink-0 shadow-lg">
                                <Volume2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm sm:text-base">Aislamiento Acústico</h3>
                                <p className="text-gray-300 text-xs sm:text-sm">Reducción de hasta 45 dB</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10">
                            <div className="bg-[#0b72ba] rounded-full p-3 flex-shrink-0 shadow-lg">
                                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm sm:text-base">Durabilidad</h3>
                                <p className="text-gray-300 text-xs sm:text-sm">Garantía de 10 años</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}