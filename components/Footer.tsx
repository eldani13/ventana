import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2b91cf] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className=" bg-white w-36 text-2xl font-bold mb-4 text-[#0b72ba] px-3 rounded-sm">
                            NUVO<span className="text-[#f25d21]">WIN</span>
                        </h3>
                        <p className="text-white/80 mb-6">
                            Expertos en ventanas de PVC y aluminio.
                            Calidad, diseño y eficiencia energética.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 hover:text-[#f25d21] transition-colors p-2 rounded-full">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:text-[#f25d21] transition-colors p-2 rounded-full">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:text-[#f25d21] transition-colors p-2 rounded-full">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:text-[#f25d21] transition-colors p-2 rounded-full">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Productos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#abatibles" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Ventanas Abatibles
                                </a>
                            </li>
                            <li>
                                <a href="#correderas" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Ventanas Correderas
                                </a>
                            </li>
                            <li>
                                <a href="#panoramicas" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Ventanas Panorámicas
                                </a>
                            </li>
                            <li>
                                <a href="#aislantes" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Ventanas Aislantes
                                </a>
                            </li>
                            <li>
                                <a href="#configurador" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Configurador
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Recursos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#recursos" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#recursos" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Videos
                                </a>
                            </li>
                            <li>
                                <a href="#recursos" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Preguntas Frecuentes
                                </a>
                            </li>
                            <li>
                                <a href="#recursos" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Guía de Mantenimiento
                                </a>
                            </li>
                            <li>
                                <a href="#recursos" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Catálogo PDF
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-[#f25d21] mt-1" />
                                <div>
                                    <p className="font-semibold">Teléfono</p>
                                    <a href="tel:+525555555555" className="text-white/80 hover:text-[#f25d21]">
                                        +52 55 5555 5555
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-[#f25d21] mt-1" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <a href="mailto:info@ventanas.com" className="text-white/80 hover:text-[#f25d21]">
                                        info@ventanas.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#f25d21] mt-1" />
                                <div>
                                    <p className="font-semibold">Dirección</p>
                                    <p className="text-white/80">
                                        Av. Insurgentes Sur 123<br />
                                        Col. Roma Norte, CDMX
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/80 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/80 text-sm">
                            © 2025 Nuvowin. Todos los derechos reservados.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="flex gap-6 text-sm">
                                <a href="#" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Aviso de Privacidad
                                </a>
                                <a href="#" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Términos y Condiciones
                                </a>
                                <a href="#" className="text-white/80 hover:text-[#f25d21] transition-colors">
                                    Mapa del Sitio
                                </a>
                            </div>
                            <div className="text-white/80 text-sm">
                                Página creada por{' '}
                                <a href="https://www.thedid.space" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#f25d21] underline transition-colors">
                                    The D&D
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
