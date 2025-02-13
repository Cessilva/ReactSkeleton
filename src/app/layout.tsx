import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
/**
 *  LocalFont :Carga una fuente local y define su configuración.
 * 
 * @param {Object} options - Opciones de configuración para la fuente.
 * @param {string} options.src - La ruta al archivo de la fuente local (por ejemplo, .woff, .ttf).
 * @param {string} options.variable - Variable CSS que se utilizará para aplicar la fuente en otros estilos.
 * @param {string} options.weight - Rango de pesos de la fuente que se pueden utilizar (por ejemplo, "100 900").
 * 
 * @returns {Object} - Un objeto que contiene la configuración de la fuente para su uso en la aplicación.
 * 
 * @example
 * const geistSans = localFont({
 *   src: "./fonts/GeistVF.woff",
 *   variable: "--font-geist-sans",
 *   weight: "100 900",
 * });
 */

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/**
 * RootLayout componente que define la estructura básica de la aplicación.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos secundarios que se renderizarán dentro del cuerpo.
 * 
 * @returns {JSX.Element} - El layout raíz de la aplicación.
 * 
 * La clase `antialiased` se aplica para mejorar la suavidad de los bordes de los textos y elementos en la pantalla. 
 * Esta clase suele ser parte de frameworks o bibliotecas de estilos como Tailwind CSS o Geist.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
