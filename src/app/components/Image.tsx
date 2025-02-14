import Image from 'next/image';

/**
 * Componente para mostrar una imagen aleatoria.
 *
 * @param {string} alt - Texto alternativo para la imagen.
 * @param {string} src - URL de la imagen que se va a mostrar.
 * @returns {JSX.Element} El elemento de la imagen renderizado.
 */
export const RandomImage = (alt: string, src: string): JSX.Element => {
  return <Image alt={alt} src={src} />;
};
