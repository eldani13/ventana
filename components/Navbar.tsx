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
  const [activeVentanasSection, setActiveVentanasSection] = useState<"abatibles" | "correderas">("abatibles");
  const [activePuertasSection, setActivePuertasSection] = useState<"calle" | "balconeras" | "correderas" | "especiales">("calle");
  const [activePersianasSection, setActivePersianasSection] = useState<"persianas" | "contraventanas">("persianas");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="bg-[#2b91cf] text-white text-xs sm:text-sm">
        <div className="w-full flex flex-row items-center justify-between px-4 sm:px-8 py-2 text-white text-base font-semibold tracking-tight gap-2 sm:gap-0">
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
            <Link href="/profesionales" className="hover:underline">
              Profesionales
            </Link>
            <Link href="/particulares" className="hover:underline">
              Particulares
            </Link>
          </div>
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
              <Link href="/profesionales" className="hover:underline">
                Profesionales
              </Link>
              <Link href="/particulares" className="hover:underline">
                Particulares
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-slate-800"
          >
            <Image src="/nuvowin-logo.webp" alt="Logo" width={50} height={50} />
          </Link>

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

              <div
                onMouseLeave={() => setActiveVentanasSection("abatibles")}
                className="absolute left-1/4 transform -translate-x-1/2 top-full mt-7 w-[400vh] bg-gradient-to-b from-white to-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-y-auto border-t-2 border-blue-100"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
              >
                <div className="w-screen mx-auto px-6 py-6 relative">

                  <div className="grid grid-cols-[auto_1fr] gap-0 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex flex-col h-full border-r border-gray-200">
                      <nav className="flex flex-col gap-0 text-base font-sans">
                        {[
                          ["abatibles", "Ventanas abatibles", "/ventanas/abatibles"],
                          ["correderas", "Ventanas correderas", "/ventanas/correderas"],
                        ].map(([key, text, href], idx) => (
                          <Link
                            key={key}
                            href={href as string}
                            onMouseEnter={() => setActiveVentanasSection(key as "abatibles" | "correderas")}
                            onFocus={() => setActiveVentanasSection(key as "abatibles" | "correderas")}
                            className={
                              idx === 0
                                ? `px-6 py-3 border-b border-gray-100 text-center ${activeVentanasSection === "abatibles" ? "bg-gray-200 text-black font-bold" : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black"}`
                                : `px-6 py-3 border-b border-gray-100 text-center ${activeVentanasSection === "correderas" ? "bg-gray-200 text-black font-bold" : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black"}`
                            }
                            style={{ textAlign: "center" }}
                          >
                            {text}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    <div className="flex flex-col h-full p-10">
                      {activeVentanasSection === "abatibles" ? (
                        <>
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
                                  href="/cotizacion"
                                  className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
                                >
                                  Solicita presupuesto
                                </a>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        // Correderas content
                        <>
                          <div className="mb-6">
                            <h3 className="text-2xl font-extrabold text-slate-800 mb-2 tracking-tight">
                              Ventanas correderas
                            </h3>
                            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                              Con los sistemas deslizantes de KÖMMERLING se logra optimizar al máximo el espacio y
                              confort interior del hogar con deslizamientos de calidad. Diseños elegantes y cuidados
                              con la última tecnología para garantizar su durabilidad. Estos sistemas son ideales para
                              puertas de terraza.
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-8 divide-x divide-gray-100 flex-1">
                            <div className="flex flex-col items-start px-6">
                              <h5 className="text-base font-semibold text-slate-700 mb-3 tracking-tight">
                                Sistemas Kömmerling
                              </h5>
                              <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                  <Image src="/images-ventana-navbar/premiline58.png" width={40} height={40} alt="PremiLine58" className="inline-block mr-1 w-8" />
                                  PremiLine58
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                  <Image src="/images-ventana-navbar/premislide76.png" width={40} height={40} alt="PremiSlide76" className="inline-block mr-1 w-8" />
                                  PremiSlide76
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                  <Image src="/images-ventana-navbar/premiline.png" width={40} height={40} alt="PremiLine" className="inline-block mr-1 w-8" />
                                  PremiLine
                                </li>
                              </ul>
                            </div>
                            <div className="flex flex-col items-start px-6">
                              <h5 className="text-base font-semibold text-slate-700 mb-3 tracking-tight">
                                Formas de apertura
                              </h5>
                              <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                  <Image src="/images-ventana-navbar/corredora_premislide.png" width={40} height={40} alt="Corredora premislide" className="inline-block mr-1 w-8" />
                                  Corredera premislide
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                  <Image src="/images-ventana-navbar/corredora_tradicional.png" width={40} height={40} alt="Corredora tradicional" className="inline-block mr-1 w-8" />
                                  Corredera tradicional
                                </li>
                              </ul>
                            </div>
                            <div className="flex flex-col justify-between px-6">
                              <div>
                                <h5 className="text-base font-semibold text-slate-700 mb-3 tracking-tight">
                                  Contenidos de interés
                                </h5>
                                <ul className="space-y-3">
                                  <li className="text-slate-800 font-semibold">Claves elección ventanas</li>
                                  <li className="text-slate-800 font-semibold">Permeabilidad al aire</li>
                                </ul>
                              </div>
                              <div className="flex justify-end mt-8">
                                <a href="#cotizacion" className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors">Solicita presupuesto</a>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
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
              <div
                className="absolute -left-[125%] transform -translate-x-1/2 top-full mt-7 w-[400vh] bg-gradient-to-b from-white to-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-y-auto border-t-2 border-blue-100"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
              >
                <div className="w-screen mx-auto px-6 py-6 relative">
                  <div className="grid grid-cols-[auto_1fr] gap-0 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex flex-col h-full border-r border-gray-200">
                      <nav className="flex flex-col gap-0 text-base font-sans">
                        {[
                          ["calle", "Puertas de calle", "/puertas/calle"],
                          ["balconeras", "Puertas balconeras", "/puertas/balconeras"],
                          ["correderas", "Puertas correderas", "/puertas/correderas"],
                          ["especiales", "Puertas especiales", "/puertas/especiales"],
                        ].map(([key, text, href], idx) => (
                          <Link
                            key={key}
                            href={href as string}
                            onMouseEnter={() => setActivePuertasSection(key as any)}
                            onFocus={() => setActivePuertasSection(key as any)}
                            className={
                              idx === 0
                                ? `px-6 py-3 border-b border-gray-100 text-center ${activePuertasSection === "calle" ? "bg-gray-200 text-black font-bold" : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black"}`
                                : `px-6 py-3 border-b border-gray-100 text-center ${
                                    (idx === 1 && activePuertasSection === "balconeras") || (idx === 2 && activePuertasSection === "correderas") || (idx === 3 && activePuertasSection === "especiales")
                                      ? "bg-gray-200 text-black font-bold"
                                      : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black"
                                  }`
                            }
                            style={{ textAlign: "center" }}
                          >
                            {text}
                          </Link>
                        ))}
                      </nav>
                    </div>
                    <div className="flex flex-col h-full p-10" onMouseLeave={() => setActivePuertasSection("calle")}>
                      {activePuertasSection === "calle" && (
                        <>
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
                                  href="/configurador"
                                  className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-4 rounded shadow hover:bg-blue-700 transition-colors"
                                >
                                  Configura tu puerta
                                </a>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activePuertasSection === "balconeras" && (
                        <>
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Puertas balconeras</h3>
                            <p className="text-base text-gray-700 max-w-3xl">Estos sistemas son ideales, al permitir gran variedad de combinaciones y otros complementos, para puertas de entrada en patios y zonas ajardinadas. También son muy adecuadas para terrazas o balcones cuando queremos mantener un buen nivel de aislamiento.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Sistemas Kömmerling</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/puerta-calle-kommerling76-xtrem.png" width={40} height={40} alt="KÖMMERLING76 Xtrem" className="inline-block mr-1 w-6" />KÖMMERLING76 Xtrem</li>
                              </ul>
                            </div>
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Formas de apertura</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/apertura_puerta_calle.png" width={40} height={40} alt="Oscilobatiente" className="inline-block mr-1 w-6" />Oscilobatiente</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/apertura_puerta_calle.png" width={40} height={40} alt="Practicable" className="inline-block mr-1 w-6" />Practicable Interior</li>
                              </ul>
                            </div>
                            <div className="space-y-4 px-6 flex flex-col justify-between">
                              <div>
                                <h5 className="text-lg font-bold text-gray-800">Contenidos de interés</h5>
                                <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                                  <li>Puertas accesibles</li>
                                  <li>Elección puertas</li>
                                  <li>FAQs</li>
                                </ul>
                              </div>
                              <div className="flex justify-end mt-6">
                                <a href="#configura-puerta" className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-4 rounded shadow hover:bg-blue-700 transition-colors">Configura tu puerta</a>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activePuertasSection === "correderas" && (
                        <>
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Puertas correderas</h3>
                            <p className="text-base text-gray-700 max-w-3xl">KÖMMERLING es especialista en este tipo de cerramiento con sistemas deslizantes donde combina diseño y prestaciones técnicas.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Sistemas Kömmerling</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/premiline58.png" width={40} height={40} alt="PremiLine58" className="inline-block mr-1 w-6" />PremiLine58</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/premislide76.png" width={40} height={40} alt="PremiSlide76" className="inline-block mr-1 w-6" />PremiSlide76</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/premidoor76.png" width={40} height={40} alt="PremiDoor76" className="inline-block mr-1 w-6" />PremiDoor76</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/premiline.png" width={40} height={40} alt="PremiLine" className="inline-block mr-1 w-6" />PremiLine</li>
                              </ul>
                            </div>
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Formas de apertura</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/corredora_premislide.png" width={40} height={40} alt="Corredera premislide" className="inline-block mr-1 w-6" />Corredera premislide</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/corredora_tradicional.png" width={40} height={40} alt="Corredera tradicional" className="inline-block mr-1 w-6" />Corredera tradicional</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/corredora_elevadora.png" width={40} height={40} alt="Corredera elevadora" className="inline-block mr-1 w-6" />Corredera elevadora</li>
                              </ul>
                            </div>
                            <div className="space-y-4 px-6 flex flex-col justify-between">
                              <div>
                                <h5 className="text-lg font-bold text-gray-800">Contenidos de interés</h5>
                                <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                                  <li>Aislamiento térmico</li>
                                  <li>Mantenimiento puertas</li>
                                  <li>FAQs</li>
                                </ul>
                              </div>
                              <div className="flex justify-end mt-6">
                                <a href="#configura-puerta" className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-4 rounded shadow hover:bg-blue-700 transition-colors">Configura tu puerta</a>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {activePuertasSection === "especiales" && (
                        <>
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Puertas especiales</h3>
                            <p className="text-base text-gray-700 max-w-3xl">Las aperturas especiales combinan perfiles practicables con herrajes que permiten un cerramiento deslizante sin renunciar a unas buenas prestaciones. Solución ideal para espectaculares cerramientos de terraza.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Sistemas Kömmerling</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/puerta-calle-kommerling76-xtrem.png" width={40} height={40} alt="KÖMMERLING76 Xtrem especiales" className="inline-block mr-1 w-6" />KÖMMERLING76 Xtrem especiales</li>
                              </ul>
                            </div>
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Formas de apertura</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/apertura_puerta_calle.png" width={40} height={40} alt="Osciloparalela" className="inline-block mr-1 w-6" />Osciloparalela</li>
                                <li className="flex items-center gap-2"><Image src="/images-puertas-navbar/apertura_puerta_calle.png" width={40} height={40} alt="Plegable" className="inline-block mr-1 w-6" />Plegable</li>
                              </ul>
                            </div>
                            <div className="space-y-4 px-6 flex flex-col justify-between">
                              <div>
                                <h5 className="text-lg font-bold text-gray-800">Contenidos de interés</h5>
                                <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                                  <li>Aislamiento térmico</li>
                                  <li>Aislamiento acústico</li>
                                  <li>FAQs</li>
                                </ul>
                              </div>
                              <div className="flex justify-end mt-6">
                                <a href="#configura-puerta" className="inline-block bg-blue-600 text-white text-base font-bold px-8 py-4 rounded shadow hover:bg-blue-700 transition-colors">Configura tu puerta</a>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
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
              <div
                className="absolute -left-[225%] transform -translate-x-1/2 top-full mt-7 w-[400vh] bg-gradient-to-b from-white to-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-y-auto border-t-2 border-blue-100"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
              >
                <div className="w-screen mx-auto px-6 py-6 relative">
                  <div className="grid grid-cols-[auto_1fr] gap-0 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex flex-col h-full border-r border-gray-200">
                      <nav className="flex flex-col gap-0 text-base font-sans">
                        {[
                          ["persianas", "Persianas", "/persianas"],
                          ["contraventanas", "Contraventanas", "/persianas/contraventanas"],
                        ].map(([key, text, href], idx) => (
                          <Link
                            key={key}
                            href={href as string}
                            onMouseEnter={() => setActivePersianasSection(key as any)}
                            onFocus={() => setActivePersianasSection(key as any)}
                            className={
                              idx === 0
                                ? `px-6 py-3 border-b border-gray-100 text-center ${activePersianasSection === "persianas" ? "bg-gray-200 text-black font-bold" : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black"}`
                                : `px-6 py-3 border-b border-gray-100 text-center ${activePersianasSection === "contraventanas" ? "bg-gray-200 text-black font-bold" : "text-gray-500 font-semibold hover:bg-gray-100 hover:text-black"}`
                            }
                            style={{ textAlign: "center" }}
                          >
                            {text}
                          </Link>
                        ))}
                      </nav>
                    </div>
                    <div className="flex flex-col h-full p-10" onMouseLeave={() => setActivePersianasSection("persianas")}>
                      {activePersianasSection === "persianas" && (
                        <>
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Persianas</h3>
                            <p className="text-base text-gray-700 max-w-3xl">La persiana capaz no sólo de mantener sino mejorar el aislamiento de la ventana.
                              <br />
                              La persiana es el punto más débil de cualquier cerramiento. Por un mal cajón de persiana entra el aire, ruido y frío arruinando el aislamiento de cualquier ventana. El sistema de persianas RolaPlus es el único recomendado por KÖMMERLING ya que es capaz de mantener y hasta reforzar los niveles de aislamiento del cerramiento.
                              <br />
                              Confirme siempre con su instalador de la Red Oficial KÖMMERLING que la persiana que le instalan con sus ventanas es RolaPlus.
                            </p>
                          </div>
                          <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Sistemas Kömmerling</h5>
                              <ul className="flex items-center gap-2 text-base text-gray-700 space-y-2">
                                <Image src="/images-persianas-navbar/presiana-rolaplus-trans_0.png" width={40} height={40} alt="Sistema RolaPlus" className="inline-block mr-1 w-6" />
                                <li>Sistema RolaPlus</li>
                              </ul>
                            </div>
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Contenidos de interés</h5>
                              <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                                <li>Domótica</li>
                                <li>Complementos ventanas</li>
                                <li>FAQs</li>
                              </ul>
                            </div>
                            <div className="space-y-4 px-6 flex flex-col justify-between"></div>
                          </div>
                        </>
                      )}

                      {activePersianasSection === "contraventanas" && (
                        <>
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contraventanas</h3>
                            <p className="text-base text-gray-700 max-w-3xl">Contamos con diferentes tipos de contraventanas que aportan claros beneficios a la vivienda, protegiendo las ventanas frente las duras condiciones climatológicas y dándoles un toque de personalidad. Además, su mantenimiento es mínimo y se adaptan a cualquier estilo.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-10 divide-x divide-gray-200 flex-1">
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Exterior</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-persianas-navbar/sistema-lider.png" width={40} height={40} alt="Sistema Líder" className="inline-block mr-1 w-6" />Sistema Líder</li>
                              </ul>
                            </div>
                            <div className="space-y-3 px-6">
                              <h5 className="text-lg font-bold text-gray-800">Interior</h5>
                              <ul className="space-y-2 text-base text-gray-700">
                                <li className="flex items-center gap-2"><Image src="/images-persianas-navbar/sistema-frailero.png" width={40} height={40} alt="Sistema Frailero" className="inline-block mr-1 w-6" />Sistema Frailero</li>
                              </ul>
                            </div>
                            <div className="space-y-4 px-6 flex flex-col justify-between">
                              <div>
                                <h5 className="text-lg font-bold text-gray-800">Contenidos de interés</h5>
                                <ul className="text-base text-gray-900 mt-2 space-y-2 font-medium">
                                  <li>materia prima PVC</li>
                                  <li>FAQs</li>
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </Link>

            <Button asChild className="bg-[#f25d21] hover:bg-[#e98057]">
              <a href="#cotizacion">Solicitar Cotización</a>
            </Button>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

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
                    ["/ventanas/abatibles", "Ventanas Abatibles"],
                    ["/ventanas/correderas", "Ventanas Correderas"],
                    ["/ventanas/panoramicas", "Ventanas Panorámicas"],
                    ["/ventanas/aislantes", "Ventanas Aislantes"],
                  ].map(([href, text]) => (
                    <Link
                      key={href}
                      href={href as string}
                      className="text-gray-600 hover:text-blue-600 py-1 transition-colors"
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/recursos"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Recursos
            </Link>
            <Link
              href="#configurador"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Configurador
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
              <a href="#cotizacion">Solicitar Cotización</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
