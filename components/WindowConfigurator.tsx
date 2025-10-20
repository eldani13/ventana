"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ArrowLeft, Check, Ruler, MessageCircle } from "lucide-react";

const windowTypes = [
    { id: "abatible", name: "Abatible", description: "Apertura hacia interior o exterior", img: "/images-ventanas-windowConfigurator/ventana-1_0.png" },
    { id: "corredera", name: "Corredera", description: "Deslizamiento horizontal", img: "/images-ventanas-windowConfigurator/Corredera_0.png" },
    { id: "panoramica", name: "Panorámica", description: "Vista amplia sin obstáculos", img: "/images-ventanas-windowConfigurator/ventana-pivotante.png" },
    { id: "oscilobatiente", name: "Oscilobatiente", description: "Doble sistema de apertura", img: "/images-ventanas-windowConfigurator/ventana-oscilobatiente.png" },
];

const materials = [
    { id: "pvc", name: "PVC", description: "Excelente aislamiento térmico y acústico" },
    { id: "aluminio", name: "Aluminio", description: "Resistente y moderno" },
    { id: "mixto", name: "PVC-Aluminio", description: "Lo mejor de ambos materiales" },
];

const colors = [
    { id: "blanco", name: "Blanco", hex: "#FFFFFF", img: "/images-color-windowConfigrator/color-blanco.webp" },
    { id: "robleNatural", name: "Roble Natural", img: "/images-color-windowConfigrator/color-robleNatural-1.webp" },
    { id: "blancoCrema", name: "Blanco Crema", img: "/images-color-windowConfigrator/color-blancoCrema.webp" },
    { id: "robleNogal", name: "Roble Nogal", img: "/images-color-windowConfigrator/color-robleNatural-2.webp" },
    { id: "grisPlata", name: "Gris Plata", img: "/images-color-windowConfigrator/color-grisPlata.webp" },
    { id: "robleTruga", name: "Roble Trufa", img: "/images-color-windowConfigrator/color-robleNatural-3.webp" }
];

const glassTypes = [
    { id: "simple", name: "Vidrio Simple", description: "Vidrio estándar 4mm" },
    { id: "doble", name: "Doble Acristalamiento", description: "Mayor aislamiento térmico" },
    { id: "triple", name: "Triple Acristalamiento", description: "Máximo aislamiento" },
    { id: "bajo-emisivo", name: "Bajo Emisivo", description: "Control solar y térmico" },
];

export default function WindowConfigurator() {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState({
        type: "",
        material: "",
        color: "",
        glass: "",
        width: "",
        height: "",
    });

    const nextStep = () => {
        if (canProceed()) {
            setStep(Math.min(step + 1, 5));
        }
    };

    const prevStep = () => setStep(Math.max(step - 1, 1));

    const canProceed = () => {
        if (step === 1) return config.type !== "";
        if (step === 2) return config.material !== "";
        if (step === 3) return config.color !== "";
        if (step === 4) return config.glass !== "";
        return true;
    };

    const generateWhatsAppMessage = () => {
        const getItemName = (items: any, id: any) =>
            items.find((item: any) => item.id === id)?.name || id;

        let message = "¡Hola! Me gustaría obtener una cotización para una ventana con las siguientes especificaciones:\n\n";
        message += `🪟 *Tipo:* ${getItemName(windowTypes, config.type)}\n`;
        message += `🔧 *Material:* ${getItemName(materials, config.material)}\n`;
        message += `🎨 *Color:* ${getItemName(colors, config.color)}\n`;
        message += `💎 *Vidrio:* ${getItemName(glassTypes, config.glass)}\n`;

        if (config.width || config.height) {
            message += `📏 *Dimensiones:* `;
            if (config.width) message += `${config.width}cm de ancho`;
            if (config.width && config.height) message += ` x `;
            if (config.height) message += `${config.height}cm de alto`;
            message += `\n`;
        }

        message += `\n¿Podrían ayudarme con una cotización?`;

        return encodeURIComponent(message);
    };

    const openWhatsApp = () => {
        const phoneNumber = ""; // Agregar número de teléfono aquí
        const message = generateWhatsAppMessage();
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <section id="configurador" className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#0b72ba] to-[#58a7d8] bg-clip-text pb-2 mb-4">
                        Configura tu Ventana Ideal
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Personaliza cada detalle en 5 sencillos pasos
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center mb-8 md:mb-12 px-4">
                    <div className="flex items-center gap-2 md:gap-2 py-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${s === step
                                        ? "bg-[#0b72ba] text-white scale-110 shadow-lg"
                                        : s < step
                                            ? "bg-[#f25d21] text-white"
                                            : "bg-gray-200 text-gray-500"
                                        }`}
                                >
                                    {s < step ? <Check className="h-5 w-5" /> : s}
                                </div>
                                {s < 5 && (
                                    <div
                                        className={`w-6 md:w-12 h-1 transition-colors duration-300 ${s < step ? "bg-[#f25d21]" : "bg-gray-200"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Step 1: Window Type */}
                    {step === 1 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#4a4a49] mb-6 text-center">
                                Paso 1: Tipo de Ventana
                            </h3>
                            <Carousel className="w-full max-w-4xl mx-auto">
                                <CarouselContent>
                                    {windowTypes.map((type) => (
                                        <CarouselItem key={type.id} className="md:basis-1/2 lg:basis-1/3">
                                            <Card
                                                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${config.type === type.id
                                                    ? "border-2 border-[#0b72ba] bg-[#e6f2fb] shadow-lg"
                                                    : "hover:border-[#0b72ba]"
                                                    }`}
                                                onClick={() => setConfig({ ...config, type: type.id })}
                                            >
                                                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
                                                    <img
                                                        src={type.img} // Asegúrate que esta propiedad esté definida en tu objeto
                                                        alt={type.name}
                                                        className="w-full h-full object-contain rounded-lg"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="font-bold text-lg mb-2">{type.name}</h4>
                                                    <p className="text-gray-600 text-sm">{type.description}</p>
                                                </div>
                                            </Card>

                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="hidden md:flex" />
                                <CarouselNext className="hidden md:flex" />
                            </Carousel>
                        </div>
                    )}

                    {/* Step 2: Material */}
                    {step === 2 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#4a4a49] mb-6 text-center">
                                Paso 2: Material
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                {materials.map((material) => (
                                    <Card
                                        key={material.id}
                                        className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${config.material === material.id
                                            ? "border-2 border-[#0b72ba] bg-[#e6f2fb] shadow-lg"
                                            : "hover:border-[#0b72ba]"
                                            }`}
                                        onClick={() => setConfig({ ...config, material: material.id })}
                                    >
                                        <div className="text-center">
                                            <h4 className="font-bold text-xl mb-2">{material.name}</h4>
                                            <p className="text-gray-600">{material.description}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Color */}
                    {step === 3 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#4a4a49] mb-6 text-center">
                                Paso 3: Color
                            </h3>
                            <Carousel className="w-full max-w-4xl mx-auto">
                                <CarouselContent>
                                    {colors.map((color) => (
                                        <CarouselItem key={color.id} className="md:basis-1/2 lg:basis-1/3">
                                            <Card
                                                className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-xl ${config.color === color.id
                                                    ? "border-2 border-[#0b72ba] bg-[#e6f2fb] shadow-lg"
                                                    : "hover:border-[#0b72ba]"
                                                    }`}
                                                onClick={() => setConfig({ ...config, color: color.id })}
                                            >
                                                <div className="relative w-full h-40 rounded-lg mb-3 overflow-hidden border-2 border-gray-300">
                                                    <img
                                                        src={color.img} // Asegúrate que cada objeto en `colors` tenga una propiedad `img`
                                                        alt={color.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {config.color === color.id && (
                                                        <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-2">
                                                            <Check className="h-4 w-4" />
                                                        </div>
                                                    )}
                                                </div>
                                                <h4 className="font-semibold text-center text-lg">{color.name}</h4>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="hidden md:flex" />
                                <CarouselNext className="hidden md:flex" />
                            </Carousel>
                        </div>
                    )}

                    {/* Step 4: Glass and Dimensions */}
                    {step === 4 && (
                        <div className="space-y-8 animate-fade-in">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#4a4a49] mb-6 text-center">
                                    Paso 4: Vidrio y Dimensiones
                                </h3>
                                <p className="text-center text-gray-600 mb-6">
                                    Selecciona el tipo de vidrio y opcionalmente las dimensiones
                                </p>
                            </div>

                            {/* Glass Selection */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {glassTypes.map((glass) => (
                                    <Card
                                        key={glass.id}
                                        className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${config.glass === glass.id
                                            ? "border-2 border-[#0b72ba] bg-[#e6f2fb] shadow-lg"
                                            : "hover:border-[#0b72ba]"
                                            }`}
                                        onClick={() => setConfig({ ...config, glass: glass.id })}
                                    >
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{glass.name}</h4>
                                            <p className="text-gray-600 text-sm">{glass.description}</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* Dimensions (Optional) */}
                            <Card className="p-6 md:p-8 bg-gray-50">
                                <div className="flex items-center gap-2 mb-6">
                                    <Ruler className="h-6 w-6 text-blue-600" />
                                    <h4 className="text-xl font-bold">Dimensiones (Opcional)</h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="width" className="text-base font-semibold mb-2 block">
                                            Ancho (cm)
                                        </Label>
                                        <Input
                                            id="width"
                                            type="number"
                                            placeholder="Ej: 120"
                                            value={config.width}
                                            onChange={(e) => setConfig({ ...config, width: e.target.value })}
                                            className="text-lg h-12"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="height" className="text-base font-semibold mb-2 block">
                                            Alto (cm)
                                        </Label>
                                        <Input
                                            id="height"
                                            type="number"
                                            placeholder="Ej: 150"
                                            value={config.height}
                                            onChange={(e) => setConfig({ ...config, height: e.target.value })}
                                            className="text-lg h-12"
                                        />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-4 text-center">
                                    Si no conoces las medidas exactas, puedes dejar este campo vacío
                                </p>
                            </Card>
                        </div>
                    )}

                    {/* Step 5: Confirmation */}
                    {step === 5 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#4a4a49] mb-6 text-center">
                                Paso 5: Resumen de tu Configuración
                            </h3>
                            <Card className="p-6 md:p-8 shadow-xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Tipo de Ventana</p>
                                            <p className="text-lg font-semibold">
                                                {windowTypes.find((t) => t.id === config.type)?.name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Material</p>
                                            <p className="text-lg font-semibold">
                                                {materials.find((m) => m.id === config.material)?.name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Color</p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-lg border-2 border-gray-300 overflow-hidden">
                                                    <img
                                                        src={colors.find((c) => c.id === config.color)?.img}
                                                        alt={colors.find((c) => c.id === config.color)?.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-lg font-semibold">
                                                    {colors.find((c) => c.id === config.color)?.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Tipo de Vidrio</p>
                                            <p className="text-lg font-semibold">
                                                {glassTypes.find((g) => g.id === config.glass)?.name}
                                            </p>
                                        </div>
                                        {(config.width || config.height) && (
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Dimensiones</p>
                                                <p className="text-lg font-semibold">
                                                    {config.width && `${config.width} cm`}
                                                    {config.width && config.height && " × "}
                                                    {config.height && `${config.height} cm`}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t">
                                    <Button
                                        onClick={openWhatsApp}
                                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg h-14 gap-2"
                                        size="lg"
                                    >
                                        <MessageCircle className="h-5 w-5" />
                                        Enviar por WhatsApp
                                    </Button>
                                    <p className="text-center text-sm text-gray-600 mt-4">
                                        Te contactaremos pronto con tu cotización personalizada
                                    </p>
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 gap-4">
                        <Button
                            onClick={prevStep}
                            disabled={step === 1}
                            variant="outline"
                            size="lg"
                            className="flex items-center gap-2 min-w-[120px]"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span className="hidden sm:inline">Anterior</span>
                        </Button>
                        {step < 5 ? (
                            <Button
                                onClick={nextStep}
                                disabled={!canProceed()}
                                size="lg"
                                className="bg-[#f25d21] hover:bg-[#d94f1d] flex items-center gap-2 min-w-[120px]"
                            >
                                <span className="hidden sm:inline">Siguiente</span>
                                <ArrowRight className="h-5 w-5" />
                            </Button>

                        ) : (
                            <Button
                                onClick={() => setStep(1)}
                                variant="outline"
                                size="lg"
                                className="flex items-center gap-2"
                            >
                                Reiniciar
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}