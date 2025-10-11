import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VentanasPro - Ventanas de PVC y Aluminio de Alta Calidad',
  description: 'Expertos en ventanas de PVC y aluminio con aislamiento térmico y acústico superior. Diseño, calidad y eficiencia energética garantizada. Solicita tu cotización hoy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
