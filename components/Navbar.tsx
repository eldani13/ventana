"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ventanasOpen, setVentanasOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-end gap-6 text-sm">
          <a href="tel:+525555555555" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <Phone className="h-4 w-4" />
            <span>+52 55 5555 5555</span>
          </a>
          <a href="mailto:info@ventanas.com" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@ventanas.com</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-slate-800">
            VENTANAS<span className="text-blue-600">PRO</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Ventanas
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#abatibles" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    Ventanas Abatibles
                  </a>
                  <a href="#correderas" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    Ventanas Correderas
                  </a>
                  <a href="#panoramicas" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    Ventanas Panorámicas
                  </a>
                  <a href="#aislantes" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    Ventanas Aislantes
                  </a>
                </div>
              </div>
            </div>

            <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Recursos
            </a>
            <a href="#configurador" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Configurador
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="#cotizacion">Solicitar Cotización</a>
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Inicio
              </Link>

              <div>
                <button
                  onClick={() => setVentanasOpen(!ventanasOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Ventanas
                  <ChevronDown className={`h-4 w-4 transition-transform ${ventanasOpen ? 'rotate-180' : ''}`} />
                </button>
                {ventanasOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a href="#abatibles" className="text-gray-600 hover:text-blue-600 py-1">Ventanas Abatibles</a>
                    <a href="#correderas" className="text-gray-600 hover:text-blue-600 py-1">Ventanas Correderas</a>
                    <a href="#panoramicas" className="text-gray-600 hover:text-blue-600 py-1">Ventanas Panorámicas</a>
                    <a href="#aislantes" className="text-gray-600 hover:text-blue-600 py-1">Ventanas Aislantes</a>
                  </div>
                )}
              </div>

              <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Recursos
              </a>
              <a href="#configurador" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Configurador
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contacto
              </a>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                <a href="#cotizacion">Solicitar Cotización</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
