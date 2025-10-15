"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function QuoteForm() {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e:any) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.from("quotes").insert([
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    comments: formData.message,
                },
            ]);

            if (error) throw error;

            toast({
                title: "Cotización Enviada",
                description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Hubo un problema al enviar tu cotización. Por favor intenta de nuevo.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#fbfcfc] flex items-center justify-center py-16 px-4">
            <section className="max-w-7xl w-full">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-[#f25d21] text-white text-sm font-semibold px-4 py-2 rounded-full">
                            Atención Personalizada
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#4a4a49] mb-4 tracking-tight">
                        Solicita tu <span className="text-[#0b72ba]">Cotización</span>
                    </h1>
                    <p className="text-xl text-[#7b7a7d] max-w-2xl mx-auto">
                        Completa el formulario y recibe una propuesta personalizada en menos de 24 horas
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#4a4a49] mb-2">
                                Cuéntanos sobre tu proyecto
                            </h2>
                            <p className="text-gray-600">
                                Completa los campos y nos comunicaremos contigo pronto
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                                    Nombre completo
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                        Correo electrónico
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="juan@ejemplo.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                                        Teléfono
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="+57 300 8108106"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                                    Asunto
                                </Label>
                                <Input
                                    id="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Consulta sobre ventanas"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                                    Mensaje
                                </Label>
                                <Textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                                    placeholder="Cuéntanos más sobre tu proyecto..."
                                    rows={11}
                                />
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#0b72ba] flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Al enviar este formulario, aceptas que nos pongamos en contacto contigo para
                                        proporcionarte la información solicitada sobre nuestros productos y servicios.
                                    </p>
                                </div>
                            </div>

                            <Button
                                onClick={handleSubmit}
                                disabled={loading}
                                size="lg"
                                className="w-full bg-[#f25d21] hover:bg-[#d94f1d] text-white text-lg py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Enviando...
                                    </span>
                                ) : (
                                    "Solicitar Cotización Gratis"
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#4a4a49] mb-6">
                                Información de Contacto
                            </h2>

                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="bg-[#d6eaf8] p-2 rounded-lg">
                                        <MapPin className="w-5 h-5 text-[#0b72ba]" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#4a4a49] mb-2">Sede Barranquilla</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Cra. 38 #110 - 63, Suroccidente, Barranquilla, Atlántico
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Barranquilla, Atlántico
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="bg-[#d6eaf8] p-2 rounded-lg">
                                        <Phone className="w-5 h-5 text-[#0b72ba]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Teléfono</p>
                                        <a href="tel:+573008108106" className="text-[#0b72ba] hover:text-[#2b91cf] font-semibold">
                                            +57 300 8108106
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="bg-[#d6eaf8] p-2 rounded-lg">
                                        <Mail className="w-5 h-5 text-[#0b72ba]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Email</p>
                                        <a href="mailto:contacto@homeglass.com.co" className="text-[#0b72ba] hover:text-[#2b91cf] font-semibold">
                                            contacto@nuvowin.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="bg-[#d6eaf8] p-2 rounded-lg">
                                        <Clock className="w-5 h-5 text-[#0b72ba]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600 mb-1">Horario de Atención</p>
                                        <p className="text-[#0b72ba] font-semibold">Lun - Vie: 7:00 AM - 5:00 PM</p>
                                        <p className="text-gray-700 text-sm">Sáb: 7:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="h-[350px] lg:h-[400px]">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.841820%2C10.977400%2C-74.831820%2C10.987400&layer=mapnik&marker=10.982400%2C-74.836820"
                                    aria-label="Ubicación de la sede en Santa Marta"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                        <div className="bg-[#d6eaf8] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-7 h-7 text-[#0b72ba]" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Respuesta en 24h</h3>
                        <p className="text-sm text-gray-600">Te contactamos en menos de un día hábil</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                        <div className="bg-[#d6eaf8] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-7 h-7 text-[#0b72ba]" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Asesoría Profesional</h3>
                        <p className="text-sm text-gray-600">Expertos listos para ayudarte</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                        <div className="bg-[#d6eaf8] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-7 h-7 text-[#0b72ba]" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Sin Compromiso</h3>
                        <p className="text-sm text-gray-600">Cotización gratuita y sin obligación</p>
                    </div>
                </div>
            </section>
        </main>
    );
}