"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const windowTypes = [
  { id: "abatible", name: "Abatible", description: "Apertura hacia interior o exterior", price: 5000 },
  { id: "corredera", name: "Corredera", description: "Deslizamiento horizontal", price: 4500 },
  { id: "panoramica", name: "Panorámica", description: "Vista amplia sin obstáculos", price: 8000 },
  { id: "oscilobatiente", name: "Oscilobatiente", description: "Doble sistema de apertura", price: 6000 },
];

const materials = [
  { id: "pvc", name: "PVC", description: "Excelente aislamiento térmico y acústico", price: 0 },
  { id: "aluminio", name: "Aluminio", description: "Resistente y moderno", price: 500 },
  { id: "mixto", name: "PVC-Aluminio", description: "Lo mejor de ambos materiales", price: 800 },
];

const colors = [
  { id: "blanco", name: "Blanco", hex: "#FFFFFF" },
  { id: "gris", name: "Gris", hex: "#6B7280" },
  { id: "negro", name: "Negro", hex: "#1F2937" },
  { id: "madera", name: "Imitación Madera", hex: "#8B4513" },
  { id: "antracita", name: "Antracita", hex: "#374151" },
];

const glassTypes = [
  { id: "simple", name: "Vidrio Simple", description: "Vidrio estándar 4mm", price: 0 },
  { id: "doble", name: "Doble Acristalamiento", description: "Mayor aislamiento térmico", price: 1200 },
  { id: "triple", name: "Triple Acristalamiento", description: "Máximo aislamiento", price: 2400 },
  { id: "bajo-emisivo", name: "Bajo Emisivo", description: "Control solar y térmico", price: 1800 },
];

export default function WindowConfigurator() {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    type: "",
    material: "",
    color: "",
    glass: "",
    width: 120,
    height: 150,
  });

  const calculatePrice = () => {
    let total = 0;
    const selectedType = windowTypes.find(t => t.id === config.type);
    const selectedMaterial = materials.find(m => m.id === config.material);
    const selectedGlass = glassTypes.find(g => g.id === config.glass);

    if (selectedType) total += selectedType.price;
    if (selectedMaterial) total += selectedMaterial.price;
    if (selectedGlass) total += selectedGlass.price;

    const area = (config.width * config.height) / 10000;
    total = total * area;

    return total.toFixed(2);
  };

  const nextStep = () => setStep(Math.min(step + 1, 5));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  return (
    <section id="configurador" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Configura tu Ventana Ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personaliza cada detalle en 5 sencillos pasos y obtén tu cotización al instante
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    s === step
                      ? "bg-blue-600 text-white scale-110"
                      : s < step
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s < step ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 5 && (
                  <div
                    className={`w-12 h-1 ${
                      s < step ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Paso 1: Tipo de Ventana</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {windowTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      config.type === type.id ? "border-2 border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setConfig({ ...config, type: type.id })}
                  >
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <div className="w-20 h-20 border-4 border-slate-700 rounded-md"></div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{type.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <p className="text-blue-600 font-semibold">Desde ${type.price.toLocaleString()}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Paso 2: Material</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {materials.map((material) => (
                  <Card
                    key={material.id}
                    className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      config.material === material.id ? "border-2 border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setConfig({ ...config, material: material.id })}
                  >
                    <h4 className="font-bold text-xl mb-2">{material.name}</h4>
                    <p className="text-gray-600 mb-4">{material.description}</p>
                    <p className="text-blue-600 font-semibold">
                      {material.price === 0 ? "Incluido" : `+$${material.price.toLocaleString()}`}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Paso 3: Color</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.map((color) => (
                  <Card
                    key={color.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                      config.color === color.id ? "border-2 border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setConfig({ ...config, color: color.id })}
                  >
                    <div
                      className="w-full h-24 rounded-lg mb-3 border-2 border-gray-300"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <h4 className="font-semibold text-center">{color.name}</h4>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Paso 4: Tipo de Vidrio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {glassTypes.map((glass) => (
                  <Card
                    key={glass.id}
                    className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      config.glass === glass.id ? "border-2 border-blue-600 bg-blue-50" : ""
                    }`}
                    onClick={() => setConfig({ ...config, glass: glass.id })}
                  >
                    <h4 className="font-bold text-xl mb-2">{glass.name}</h4>
                    <p className="text-gray-600 mb-4">{glass.description}</p>
                    <p className="text-blue-600 font-semibold">
                      {glass.price === 0 ? "Incluido" : `+$${glass.price.toLocaleString()}`}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Paso 5: Dimensiones</h3>
              <Card className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-lg font-semibold mb-3">Ancho (cm)</label>
                    <input
                      type="range"
                      min="60"
                      max="300"
                      value={config.width}
                      onChange={(e) => setConfig({ ...config, width: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="text-center text-2xl font-bold text-blue-600 mt-2">
                      {config.width} cm
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Alto (cm)</label>
                    <input
                      type="range"
                      min="60"
                      max="300"
                      value={config.height}
                      onChange={(e) => setConfig({ ...config, height: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="text-center text-2xl font-bold text-blue-600 mt-2">
                      {config.height} cm
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                  <p className="text-gray-600 mb-2">Precio estimado</p>
                  <p className="text-5xl font-bold text-slate-800 mb-4">
                    ${calculatePrice()}
                    <span className="text-2xl text-gray-600"> MXN</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-6">*Precio sujeto a cotización final</p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <a href="#cotizacion">Solicitar Cotización Formal</a>
                  </Button>
                </div>
              </Card>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              disabled={step === 1}
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Anterior
            </Button>
            <Button
              onClick={nextStep}
              disabled={step === 5}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
            >
              Siguiente
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
