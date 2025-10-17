import Image from "next/image";
import { ChevronRight } from "lucide-react";

const opciones = [
    {
        img: "/images-pages-puertaCalle/apertura_puerta_calle.webp",
        alt: "Puerta de calle abatible interior.",
        title: "Puerta de calle abatible interior.",
        desc: "Apertura hacia el interior mediante bisagras laterales.",
    }
];

const tarjetas = [
    {
        img: "/images-pages-contraventanas/Abelsys_6_109_Retusche_KS.webp",
        icon: "/images-pages-corredera/premiline.webp",
        title: "ContraVentana Exterior",
        subtitle: "Cubierta de ventana para exterior",
        desc: "Cubierta adicional que mejora el aislamiento térmico y acústico.",
        button: "Pronto más información",
    },
    {
        img: "/images-pages-contraventanas/Niederlande Projekt KVision  (6).webp",
        icon: "/images-pages-corredera/premiline.webp",
        title: "ContraVentana Interior",
        subtitle: "Cubierta de ventana para interior",
        desc: "Cubierta adicional que mejora el aislamiento térmico y acústico.",
        button: "Pronto más información",
    }
];

const isSingleCard = tarjetas.length === 2;

export default function ContraventanasPages() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Texto */}
                        <div className="space-y-6 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Contraventanas
                            </h1>

                            <h2 className="text-lg sm:text-xl text-slate-600 font-light">
                                Transmitiendo sensaciones de confort
                            </h2>

                            <p className="text-base text-slate-600 leading-relaxed">
                                Estas piezas resguardan eficazmente las ventanas ante el clima extremo y añaden un carácter único a la fachada. Asimismo, requieren un cuidado muy sencillo y se ajustan con facilidad a cualquier diseño o tendencia arquitectónica.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button className="px-8 py-4 bg-[#f25d21] text-white font-semibold rounded-sm shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
                                    Solicitar cotización
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* <a
                                    href="/docs/fichaTécnica-RolaPlus.pdf"
                                    download
                                    className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-sm hover:border-[#0b72ba] hover:text-[#0b72ba] hover:bg-blue-50 transition-all duration-300 inline-block text-center"
                                >
                                    Descargar ficha técnica
                                </a> */}
                            </div>

                            <p className="text-sm text-slate-500 pt-4">
                                Garantice el confort de su hogar eligiendo soluciones de calidad que le brinden eficiencia, seguridad y bienestar a largo plazo.
                            </p>
                        </div>

                        {/* Imagen */}
                        <div className="relative h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images-pages-contraventanas/_MG_4677_11zon.webp"
                                alt="Persiana RolaPlus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Formas de apertura corredera
                        </h2>
                        <p className="text-base text-gray-600 mt-2">
                            Todo tipo de opciones de apertura practicables con los que cubrir cualquier necesidad
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {opciones.map((opcion) => (
                            <div
                                key={opcion.title}
                                className="flex flex-col items-center text-center max-w-xs"
                            >
                                <div className="w-28 h-28 flex items-center justify-center">
                                    <Image
                                        src={opcion.img}
                                        alt={opcion.alt}
                                        width={112}
                                        height={112}
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                <h3 className="mt-3 font-semibold text-gray-800">
                                    {opcion.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{opcion.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Tercer section con array de tarjetas */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Modelos destacados</h2>
                        <p className="text-base text-gray-600 mt-2">Conozca nuestras soluciones más innovadoras</p>
                    </div>

                    <div className={`${isSingleCard ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-3 gap-8"}`}>
                        {tarjetas.map((card) => (
                            <div key={card.title} className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mx-auto">
                                {/* Imagen superior */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-white p-2 rounded shadow">
                                        <Image
                                            src={card.icon}
                                            alt="Window Icon"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-5">
                                    <h2 className="text-lg font-bold text-gray-900">{card.title}</h2>
                                    <p className="text-sm text-gray-600 mb-2">{card.subtitle}</p>
                                    <p className="text-sm text-gray-700">{card.desc}</p>
                                    <button className="mt-4 w-full bg-[#0b72ba] text-white font-semibold py-2 px-4 rounded hover:bg-[#095c94] transition">
                                        {card.button}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
