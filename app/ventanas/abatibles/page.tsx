import Image from "next/image";
import { ChevronRight } from "lucide-react";

const opciones = [
    {
        img: "/images-ventanas-windowConfigurator/ventana-oscilobatiente.png",
        alt: "Ventana oscilobatiente",
        title: "Ventana oscilobatiente",
        desc: "Se abre inclinándose hacia adentro desde la parte superior o como una puerta.",
    },
    {
        img: "/images-ventanas-windowConfigurator/Corredera_0.png",
        alt: "Ventana abatible interior",
        title: "Ventana abatible interior",
        desc: "Apertura hacia el interior mediante bisagras laterales.",
    },
    {
        img: "/images-ventanas-windowConfigurator/ventana-1_0.png",
        alt: "Ventana practicable interior",
        title: "Ventana practicable interior",
        desc: "Similar a la abatible, permite una apertura amplia hacia el interior.",
    },
    {
        img: "/images-ventanas-windowConfigurator/ventana-pivotante.png",
        alt: "Ventana pivotante",
        title: "Ventana pivotante",
        desc: "Gira sobre un eje central permitiendo ventilación y fácil limpieza.",
    },
];

const tarjetas = [
    {
        img: "/images-benefitsSection/image_ahorro.webp",
        icon: "/images-ventana-navbar/System-Basic-58-Standard_web.png",
        title: "EUROFINE58",
        subtitle: "Tecnología para el confort",
        desc: "Mantiene un equilibrio entre eficiencia energética y diseño estilizado.",
        button: "Más información",
    },
    {
        img: "/images-benefitsSection/image_garantia.webp",
        icon: "/images-productsSection/image_kommerling76_1.webp",
        title: "Kömmerling 76 AD Xtrem",
        subtitle: "Tecnología para el confort",
        desc: "Sistema de ventanas con triple junta para un aislamiento superior.",
        button: "Más información",
    },
    {
        img: "/images-benefitsSection/image_sostenibilidad.webp",
        icon: "/images-ventana-navbar/sistema_glasswin_0_1_0.png",
        title: "GlassWin",
        subtitle: "Puertas correderas elevables",
        desc: "Grandes superficies acristaladas con excelente hermeticidad.",
        button: "Pronto más información",
    }
];

export default function VentanasAbatiblesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Texto */}
                        <div className="space-y-6 text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Ventanas Abatibles
                            </h1>

                            <h2 className="text-lg sm:text-xl text-slate-600 font-light">
                                Aislamiento y diseño
                            </h2>

                            <p className="text-base text-slate-600 leading-relaxed">
                                Los sistemas de ventanas abatibles ofrecen un excelente aislamiento térmico y acústico, al mismo tiempo que facilitan la ventilación y la limpieza de los cristales. Además, combinan funcionalidad y diseño, integrándose de forma elegante en cualquier estilo de hogar.
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
                                Asegúrese siempre con su instalador de la Red Oficial KÖMMERLING de que la persiana instalada sea el sistema RolaPlus
                            </p>
                        </div>

                        {/* Imagen */}
                        <div className="relative h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images-benefitsSection/image_seguridad.webp"
                                alt="Persiana RolaPlus"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Formas de apertura abatibles
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
            </section>

            {/* Tercer section con array de tarjetas */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Modelos con apertura abatible
                        </h2>
                        <p className="text-base text-gray-600 mt-2">
                            Conozca nuestras soluciones más innovadoras
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tarjetas.map((card) => (
                            <div
                                key={card.title}
                                className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mx-auto"
                            >
                                {/* Imagen superior */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Ícono ventana en esquina */}
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
                                    <h2 className="text-lg font-bold text-gray-900">
                                        {card.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {card.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        {card.desc}
                                    </p>

                                    {/* Botón */}
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
