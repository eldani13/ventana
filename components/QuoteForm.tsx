"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export default function QuoteForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    windowType: "",
    width: "",
    height: "",
    comments: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("quotes")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            window_type: formData.windowType,
            width: parseFloat(formData.width),
            height: parseFloat(formData.height),
            comments: formData.comments,
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
        windowType: "",
        width: "",
        height: "",
        comments: "",
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
    <section id="cotizacion" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Solicita tu Cotización
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y recibe una cotización personalizada en menos de 24 horas
            </p>
          </div>

          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Juan Pérez"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+52 55 1234 5678"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="windowType" className="text-base font-semibold">
                    Tipo de Ventana *
                  </Label>
                  <Select
                    required
                    value={formData.windowType}
                    onValueChange={(value) => setFormData({ ...formData, windowType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="abatible">Abatible</SelectItem>
                      <SelectItem value="corredera">Corredera</SelectItem>
                      <SelectItem value="panoramica">Panorámica</SelectItem>
                      <SelectItem value="oscilobatiente">Oscilobatiente</SelectItem>
                      <SelectItem value="fija">Fija</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="width" className="text-base font-semibold">
                    Ancho (cm)
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    min="60"
                    max="300"
                    value={formData.width}
                    onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    placeholder="120"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="height" className="text-base font-semibold">
                    Alto (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    min="60"
                    max="300"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="150"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="comments" className="text-base font-semibold">
                  Comentarios Adicionales
                </Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  Al enviar este formulario, aceptas que nos pongamos en contacto contigo para
                  proporcionarte la información solicitada sobre nuestros productos y servicios.
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
              >
                {loading ? "Enviando..." : "Solicitar Cotización"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
