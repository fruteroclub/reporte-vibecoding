import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reporte VibeCoding Bootcamp 2026",
  description: "Reporte general del bootcamp de desarrollo con IA - Frutero Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
