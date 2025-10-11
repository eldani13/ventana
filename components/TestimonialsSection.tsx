"use client";

import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Ciudad de México",
    rating: 5,
    comment: "Excelente calidad y acabados. El aislamiento térmico es impresionante, mi recibo de luz bajó considerablemente. El equipo de instalación fue muy profesional.",
    project: "Ventanas Abatibles PVC",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Carlos Hernández",
    location: "Guadalajara",
    rating: 5,
    comment: "Las ventanas panorámicas transformaron completamente mi sala. La vista es espectacular y la calidad de los materiales es superior. Totalmente recomendado.",
    project: "Ventanas Panorámicas",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Ana Martínez",
    location: "Monterrey",
    rating: 5,
    comment: "El proceso de cotización y compra fue muy fácil. Me asesoraron en cada paso y el resultado superó mis expectativas. El aislamiento acústico es increíble.",
    project: "Ventanas Aislantes Triple Acristalamiento",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Roberto Sánchez",
    location: "Puebla",
    rating: 5,
    comment: "Muy satisfecho con mi inversión. Las ventanas correderas son de excelente calidad y el deslizamiento es suave. El servicio postventa es excelente.",
    project: "Ventanas Correderas Aluminio",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en la calidad de nuestras ventanas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="h-16 w-16" />
              </div>

              <div className="flex items-start gap-4 mb-4 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg text-slate-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="bg-blue-50 rounded-lg px-4 py-2 inline-block">
                <p className="text-sm text-blue-800 font-semibold">{testimonial.project}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Únete a Miles de Clientes Satisfechos
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Garantía de calidad, servicio profesional y productos de primera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-blue-100">Años de Experiencia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-4xl font-bold">5,000+</p>
              <p className="text-blue-100">Proyectos Completados</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-blue-100">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
