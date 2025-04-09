'use client';
import { useState, useRef, useEffect } from 'react';

export const DashboardDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-primary-50" ref={dropdownRef}>
      {/* Botón de dashboard que siempre es visible */}
      <button
        className="flex items-center h-full gap-2 focus:outline-none cursor-pointer rounded-md p-4 hover:border-neutral-400 hover:border transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="material-icons text-lg text-primary-50">
          dashboard
        </span>
        {/* La palabra Dashboard solo visible en desktop */}
        <span className="hidden sm:inline text-2xl text-primary-50">
          Dashboard
        </span>
        {/* Flecha SVG que rota cuando se abre el dropdown solo visible en desktop*/}
        <svg
          className={`hidden sm:inline w-4 h-4 text-primary-50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 sm:w-full rounded-md shadow-lg bg-primary-950 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transform origin-top-right transition-all duration-200">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <a
              href="#devices"
              className="flex items-center pl-6 sm:px-8 py-3 text-sm sm:text-base text-primary-50 hover:translate-x-2 transition-all duration-300"
              role="menuitem"
            >
              <span className="material-icons text-lg">devices_other</span>
              <span className="ml-3">Dispositivos</span>
            </a>
            <a
              href="#aplications"
              className="flex items-center pl-6 sm:px-8 py-3 text-sm sm:text-base text-primary-50 hover:translate-x-2 transition-all duration-300"
              role="menuitem"
            >
              <span className="material-icons text-lg">assessment</span>
              <span className="ml-3">Aplicaciones</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
