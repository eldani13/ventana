"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ventanasOpen, setVentanasOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      {/* Barra superior de contacto */}
      <div className="bg-[#2b91cf] text-white text-xs sm:text-sm">
        <div className="w-full flex flex-row items-center justify-between px-4 sm:px-8 py-2 text-white text-base font-semibold tracking-tight gap-2 sm:gap-0">
          {/* Mobile: only show lupa, profesionales, particulares */}
          <div className="flex flex-row items-center gap-4 w-full sm:hidden">
            <button className="flex items-center group">
              <span className="relative">
                <Search
                  className="h-5 w-5 text-white cursor-pointer transition-colors hover:text-blue-200"
                  onClick={() => setShowSearch(true)}
                  onMouseEnter={() => setShowSearch(true)}
                />
                {showSearch && (
                  <div
                    className="absolute left-0 top-8 flex items-center bg-white rounded-lg shadow px-2 py-2 w-60 border border-blue-200 animate-fade-in z-50"
                    onMouseLeave={() => setShowSearch(false)}
                  >
                    <Search className="h-5 w-5 text-blue-500 mr-2" />
                    <input
                      type="text"
                      className="flex-1 border-none outline-none text-gray-700 text-base bg-transparent placeholder-gray-400"
                      placeholder="Introduce tu búsqueda..."
                      autoFocus
                    />
                  </div>
                )}
              </span>
            </button>
            <a href="#profesionales" className="hover:underline">
              Profesionales
            </a>
            <a href="#particulares" className="hover:underline">
              Particulares
            </a>
          </div>
          {/* Desktop: original layout */}
          <div className="hidden sm:flex w-full items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="#contacto" className="hover:underline">
                Contacto
              </a>
              <span className="h-5 w-px bg-white/30 mx-2" />
              <button className="flex items-center group">
                <span className="relative">
                  <Search
                    className="h-5 w-5 text-white cursor-pointer transition-colors hover:text-blue-200"
                    onClick={() => setShowSearch(true)}
                    onMouseEnter={() => setShowSearch(true)}
                  />
                  {showSearch && (
                    <div
                      className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center bg-white rounded-lg shadow px-4 py-2 w-72 border border-blue-200 animate-fade-in z-50"
                      onMouseLeave={() => setShowSearch(false)}
                    >
                      <Search className="h-5 w-5 text-blue-500 mr-2" />
                      <input
                        type="text"
                        className="flex-1 border-none outline-none text-gray-700 text-base bg-transparent placeholder-gray-400"
                        placeholder="Introduce tu búsqueda..."
                        autoFocus
                      />
                    </div>
                  )}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-6">
              <a href="#profesionales" className="hover:underline">
                Profesionales
              </a>
              <a href="#particulares" className="hover:underline">
                Particulares
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-slate-800"
          >
            <Image src="/nuvowin-logo.webp" alt="Logo" width={50} height={50} />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Ventanas
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Mega menu container (styled to match design) */}
              <div
                className="absolute left-1/4 transform -translate-x-1/2 top-full mt-7 w-[400vh] bg-gradient-to-b from-white to-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-y-auto border-t-2 border-blue-100"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
              >
                <div className="w-screen mx-auto px-6 py-6 relative">
                  {/* small triangle pointer centered relative to inner container */}

                  <div className="grid grid-cols-[auto_1fr] gap-0 bg-gray-50 rounded-lg border border-gray-200">
                    {/* Columna izquierda: navegación */}
                    <div className="flex flex-col h-full border-r border-gray-200">
                      <nav className="flex flex-col gap-0 text-base font-sans">
                        {[
                          ["#abatibles", "Ventanas abatibles"],
                          ["#correderas", "Ventanas correderas"],
                        ].map(([href, text], idx) => (
                          <a
                            key={href}
                            href={href}
                            className={
                              idx === 0
                                ? "bg-gray-200 text-black font-bold border-b border-gray-100 px-6 py-3"
                                : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black border-b border-gray-100 px-6 py-3"
                            }
                            style={{ textAlign: "center" }}
                          >
                            {text}
                          </a>
                        ))}
                      </nav>
                    </div>

                    {/* Columna derecha: bloque informativo y contenido */}
                    <div className="flex flex-col h-full p-10">
                      <div className="mb-6">
                        <h3 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight">
                          Ventanas abatibles
                        </h3>
                        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                          Los sistemas de ventanas más aislantes de KÖMMERLING.
                          Consiga hasta un 70% de ahorro de pérdidas energéticas
                          en calefacción y aire acondicionado. Esta forma de
                          apertura es ideal para proporcionar aislamiento
                          térmico y acústico, al tiempo que facilitan tareas
                          como la ventilación o la limpieza de los elementos
                          acristalados.
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-8 divide-x divide-gray-100 flex-1">
                        <div className="flex flex-col items-start px-6">
                          <h5 className="text-base font-semibold text-slate-700 mb-3 tracking-tight">
                            Sistemas Kömmerling
                          </h5>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                              <Image src="/images-ventana-navbar/System-Basic-58-Standard_web.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-8" />
                              EuroFine58
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                              <Image src="/images-ventana-navbar/sistema_glasswin_0_1_0.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-8" />
                              GlassWin
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                              <Image src="/images-ventana-navbar/sistema-kommerling76-ad-xtrem.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-8" />
                              KÖMMERLING76 AD Xtrem
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col items-start px-6">
                          <h5 className="text-base font-semibold text-slate-700 mb-3 tracking-tight">
                            Formas de apertura
                          </h5>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                              <Image src="/images-ventana-navbar/ventana-oscilobatiente_0.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-8" />
                              Oscilobatiente
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                              <Image src="/images-ventana-navbar/ventana-abatible-horizontal.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-8" />
                              Abatible interior
                            </li>
                            <li className="flex items-center gap-2 text-slate-700 font-medium">
                              <Image src="/images-ventana-navbar/ventana-abatible_0.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-8" />
                              Practicable interior
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col justify-between px-6">
                          <div>
                            <h5 className="text-base font-semibold text-slate-700 mb-3 tracking-tight">
                              Contenidos de interés
                            </h5>
                            <ul className="space-y-3">
                              <li className="text-slate-800 font-semibold">
                                Claves elección ventanas
                              </li>
                              <li className="text-slate-800 font-semibold">
                                Ventana certificada Passivhaus
                              </li>
                              <li className="text-slate-800 font-semibold">
                                Aislamiento acústico
                              </li>
                              <li className="text-slate-800 font-semibold">
                                Ventilación vivienda
                              </li>
                              <li className="text-slate-800 font-semibold">
                                FAQs
                              </li>
                            </ul>
                          </div>
                          <div className="flex justify-end mt-8">
                            <a
                              href="#cotizacion"
                              className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
                            >
                              Solicita presupuesto
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Puertas
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Mega menu container (diseño original) */}
              <div
                className="absolute -left-[125%] transform -translate-x-1/2 top-full mt-7 w-[400vh] bg-gradient-to-b from-white to-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-y-auto border-t-2 border-blue-100"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
              >
                <div className="w-screen mx-auto px-6 py-6 relative">
                  <div className="grid grid-cols-[auto_1fr] gap-0 bg-gray-50 rounded-lg border border-gray-200">
                    {/* Columna izquierda: navegación */}
                    <div className="flex flex-col h-full border-r border-gray-200">
                      <nav className="flex flex-col gap-0 text-base font-sans">
                        {[
                          ["#puertascalle", "Puertas de calle"],
                          ["#balconeras", "Puertas balconeras"],
                          ["#correderas", "Puertas correderas"],
                          ["#especiales", "Puertas especiales"],
                        ].map(([href, text], idx) => (
                          <a
                            key={href}
                            href={href}
                            className={
                              idx === 0
                                ? "bg-gray-200 text-black font-bold border-b border-gray-100 px-6 py-3"
                                : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black border-b border-gray-100 px-6 py-3"
                            }
                            style={{ textAlign: "center" }}
                          >
                            {text}
                          </a>
                        ))}
                      </nav>
                    </div>
                    {/* Columna derecha: bloque informativo y contenido */}
                    <div className="flex flex-col h-full p-10">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Puertas de calle
                        </h3>
                        <p className="text-base text-gray-700 max-w-3xl">
                          Las puertas de calle con sistemas KÖMMERLING de alta
                          resistencia ofrecen una amplia variedad de
                          posibilidades, permitiendo su personalización y
                          adaptándose a las diferentes necesidades de la
                          vivienda.
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                        <div className="space-y-3 px-6">
                          <h5 className="text-lg font-bold text-gray-800">
                            Sistemas Kömmerling
                          </h5>
                          <ul className="flex items-center gap-2 text-base text-gray-700 space-y-2">
                            <Image src="/images-puertas-navbar/puerta-calle-kommerling76-xtrem.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-6" />
                            <li>KÖMMERLING76 Xtrem puerta de calle</li>
                          </ul>
                        </div>
                        <div className="space-y-3 px-6">
                          <h5 className="text-lg font-bold text-gray-800">
                            Formas de apertura
                          </h5>
                          <ul className="flex items-center gap-2 text-base text-gray-700 space-y-2">
                            <Image src="/images-puertas-navbar/apertura_puerta_calle.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-6" />
                            <li>Practicable interior</li>
                          </ul>
                        </div>
                        <div className="space-y-4 px-6 flex flex-col justify-between">
                          <div>
                            <h5 className="text-lg font-bold text-gray-800">
                              Contenidos de interés
                            </h5>
                            <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                              <li>Resistencia y seguridad</li>
                              <li>Domótica</li>
                              <li>FAQs</li>
                            </ul>
                          </div>
                          <div className="flex justify-end mt-6">
                            <a
                              href="#configura-puerta"
                              className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-4 rounded shadow hover:bg-blue-700 transition-colors"
                            >
                              Configura tu puerta
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Persianas
                <ChevronDown className="h-4 w-4" />
              </button>
              {/* Mega menu container (diseño original) */}
              <div
                className="absolute -left-[225%] transform -translate-x-1/2 top-full mt-7 w-[400vh] bg-gradient-to-b from-white to-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-y-auto border-t-2 border-blue-100"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
              >
                <div className="w-screen mx-auto px-6 py-6 relative">
                  <div className="grid grid-cols-[auto_1fr] gap-0 bg-gray-50 rounded-lg border border-gray-200">
                    {/* Columna izquierda: navegación */}
                    <div className="flex flex-col h-full border-r border-gray-200">
                      <nav className="flex flex-col gap-0 text-base font-sans">
                        {[
                          ["#persianas", "Persianas"],
                          ["#contraventanas", "Contraventanas"],
                        ].map(([href, text], idx) => (
                          <a
                            key={href}
                            href={href}
                            className={
                              idx === 0
                                ? "bg-gray-200 text-black font-bold border-b border-gray-100 px-6 py-3"
                                : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black border-b border-gray-100 px-6 py-3"
                            }
                            style={{ textAlign: "center" }}
                          >
                            {text}
                          </a>
                        ))}
                      </nav>
                    </div>
                    {/* Columna derecha: bloque informativo y contenido */}
                    <div className="flex flex-col h-full p-10">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Persianas
                        </h3>
                        <p className="text-base text-gray-700 max-w-3xl">
                          La persiana capaz no sólo de mantener sino mejorar el
                          aislamiento de la ventana.
                          <br />
                          La persiana es el punto más débil de cualquier
                          cerramiento. Por un mal cajón de persiana entra el
                          aire, ruido y frío arruinando el aislamiento de
                          cualquier ventana. El sistema de persianas RolaPlus es
                          el único recomendado por KÖMMERLING ya que es capaz de
                          mantener y hasta reforzar los niveles de aislamiento
                          del cerramiento.
                          <br />
                          Confirme siempre con su instalador de la Red Oficial
                          KÖMMERLING que la persiana que le instalan con sus
                          ventanas es RolaPlus.
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                        <div className="space-y-3 px-6">
                          <h5 className="text-lg font-bold text-gray-800">
                            Sistemas Kömmerling
                          </h5>
                          <ul className="flex items-center gap-2 text-base text-gray-700 space-y-2">
                            <Image src="/images-persianas-navbar/presiana-rolaplus-trans_0.png" width={40} height={40} alt="EuroFine58" className="inline-block mr-1 w-6" />
                            <li>Sistema RolaPlus</li>
                          </ul>
                        </div>
                        <div className="space-y-3 px-6">
                          <h5 className="text-lg font-bold text-gray-800">
                            Contenidos de interés
                          </h5>
                          <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                            <li>Domótica</li>
                            <li>Complementos ventanas</li>
                            <li>FAQs</li>
                          </ul>
                        </div>
                        <div className="space-y-4 px-6 flex flex-col justify-between">
                          {/* vacío, no hay botón ni columna extra en la referencia */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </a>

            <Button asChild className="bg-[#f25d21] hover:bg-[#e98057]">
              <a href="#cotizacion">Solicitar Cotización</a>
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
            </Link>

            <div>
              <button
                onClick={() => setVentanasOpen(!ventanasOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Ventanas
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    ventanasOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {ventanasOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {[
                    ["#abatibles", "Ventanas Abatibles"],
                    ["#correderas", "Ventanas Correderas"],
                    ["#panoramicas", "Ventanas Panorámicas"],
                    ["#aislantes", "Ventanas Aislantes"],
                  ].map(([href, text]) => (
                    <a
                      key={href}
                      href={href}
                      className="text-gray-600 hover:text-blue-600 py-1 transition-colors"
                    >
                      {text}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#recursos"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Recursos
            </a>
            <a
              href="#configurador"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Configurador
            </a>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
              <a href="#cotizacion">Solicitar Cotización</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
