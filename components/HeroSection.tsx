"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Thermometer, Volume2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ventanas de Alta Calidad para tu Hogar
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Diseño innovador, aislamiento térmico superior y durabilidad garantizada.
            Transforma tu espacio con nuestras soluciones en PVC y aluminio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              <a href="#configurador" className="flex items-center gap-2">
                Configura tu Ventana
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg px-8 py-6">
              <a href="#cotizacion">Solicitar Cotización</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-blue-600 rounded-full p-3">
                <Thermometer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Aislamiento Térmico</h3>
                <p className="text-gray-300 text-sm">Ahorro de hasta 40% en energía</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-blue-600 rounded-full p-3">
                <Volume2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Aislamiento Acústico</h3>
                <p className="text-gray-300 text-sm">Reducción de hasta 45 dB</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-blue-600 rounded-full p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Durabilidad</h3>
                <p className="text-gray-300 text-sm">Garantía de 10 años</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
