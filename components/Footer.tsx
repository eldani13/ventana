import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2b91cf] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* MARCA Y DESCRIPCIÓN */}
        <div className="text-center md:text-left mb-12">
          <h3 className="inline-block bg-white text-2xl font-bold mb-3 text-[#0b72ba] px-3 rounded-sm">
            NUVO<span className="text-[#f25d21]">WIN</span>
          </h3>
          <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            Expertos en ventanas de PVC y aluminio. <br />
            Calidad, diseño y eficiencia energética.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4">Ventanas</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ventanas/abatibles"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Abatibles
                </Link>
              </li>
              <li>
                <Link
                  href="/ventanas/correderas"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Correderas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Puertas</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/puertas/calle"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Calle
                </Link>
              </li>
              <li>
                <Link
                  href="/puertas/balconeras"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Balconeras
                </Link>
              </li>
              <li>
                <Link
                  href="/puertas/correderas"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Correderas
                </Link>
              </li>
              <li>
                <Link
                  href="/puertas/especiales"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Especiales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Persianas</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/persianas"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Persianas
                </Link>
              </li>
              <li>
                <Link
                  href="/persianas/contraventanas"
                  className="text-white/80 hover:text-[#f25d21] transition-colors"
                >
                  Contraventanas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#f25d21] mt-0.5" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <a
                    href="tel:+525555555555"
                    className="text-white/80 hover:text-[#f25d21] transition-colors"
                  >
                    +57 318 343 9252
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#f25d21] mt-0.5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:contacto@nuvowin.com"
                    className="text-white/80 hover:text-[#f25d21] transition-colors"
                  >
                    contacto@nuvowin.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#f25d21] mt-0.5" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-white/80 leading-snug">
                    CR 38 #110 - 63 OF 1
                    <br />
                    Barranquilla - Colombia
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © 2025 Nuvowin. Todos los derechos reservados.
            </p>
            <div className="text-white/80 text-sm">
              Página creada por{" "}
              <a
                href="https://www.thedid.space"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#f25d21] underline transition-colors"
              >
                The D&D
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
