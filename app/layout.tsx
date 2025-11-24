import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nuvowin Barranquilla - Ventanas de PVC y Aluminio de Alta Calidad',
  description: 'Expertos en ventanas de PVC y aluminio en Barranquilla. Instalación rápida, aislamiento térmico y acústico superior. Atención inmediata y soluciones personalizadas. Solicita tu cotización hoy.',
  keywords: [
    'ventanas Barranquilla',
    'ventanas PVC',
    'ventanas aluminio',
    'aislamiento térmico',
    'aislamiento acústico',
    'cotización ventanas',
    'instalación rápida',
    'ventanas personalizadas',
    'Nuvowin',
    'ventanas Atlántico',
    'ventanas para hogar',
    'ventanas para negocio'
  ],
  openGraph: {
    title: 'Nuvowin Barranquilla - Ventanas de PVC y Aluminio',
    description: 'Ventanas de alta calidad en Barranquilla. Instalación rápida y atención personalizada.',
    url: 'https://nuvowin.com/',
    siteName: 'Nuvowin',
    images: [
      {
        url: '/images-heroSection/barranquilla-ventanas.jpg',
        width: 1200,
        height: 630,
        alt: 'Ventanas en Barranquilla',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvowin Barranquilla - Ventanas de PVC y Aluminio',
    description: 'Ventanas de alta calidad en Barranquilla. Instalación rápida y atención personalizada.',
    site: '@nuvowin',
    images: ['/images-heroSection/barranquilla-ventanas.jpg'],
  },
  alternates: {
    canonical: 'https://nuvowin.com/',
    languages: {
      'es-CO': 'https://nuvowin.com/',
    },
  },
  other: {
    'geo.region': 'CO-ATL',
    'geo.placename': 'Barranquilla',
    'geo.position': '10.9685;-74.7813',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full pt-20">
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
