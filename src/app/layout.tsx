import type { Metadata } from "next";
import "./globals.css";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "Reporte VibeCoding Bootcamp 2026",
  description: "Reporte general de métricas y progreso del bootcamp de desarrollo con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Particles />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
