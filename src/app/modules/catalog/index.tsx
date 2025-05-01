'use client';

import Link from 'next/link';

// Component categories for the catalog
const componentCategories = [
  {
    name: 'Buttons',
    description: 'Interactive button components in various styles and sizes',
    path: '/catalog/buttons',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    name: 'Forms',
    description: 'Form controls and input components',
    path: '/catalog/forms',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    name: 'Navigation',
    description: 'Navigation components like menus, tabs, and breadcrumbs',
    path: '/catalog/navigation',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    name: 'Layout',
    description: 'Layout components for structuring page content',
    path: '/catalog/layout',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    name: 'Feedback',
    description: 'Feedback components like alerts, toasts, and modals',
    path: '/catalog/feedback',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Data Display',
    description: 'Components for displaying data like tables and cards',
    path: '/catalog/data-display',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary-950 text-primary-50 sticky top-0 z-10">
        <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl w-auto font-medium flex justify-start">
            <div className="flex items-center justify-center -space-x-2 mx-2">
              <div className="bg-secondary-950 w-10 h-10 rounded-full"></div>
              <div className="bg-primary-50 w-10 h-10 rounded-full"></div>
            </div>
            <a
              href="/dashboard"
              className="whitespace-normal sm:whitespace-nowrap ml-3 mr-5"
            >
              PORTAL IOT
            </a>
          </h1>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/dashboard"
              className="px-3 py-2 rounded hover:bg-primary-800 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/catalog"
              className="px-3 py-2 rounded bg-primary-800 transition-colors"
            >
              Design System
            </Link>
          </nav>
        </section>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Design System</h1>
          <p className="text-lg text-gray-600 text-justify">
            Bienvenido al Sistema de Diseño Portal IOT. Este catálogo muestra
            todos los componentes de interfaz de usuario disponibles en nuestra
            aplicación, proporcionando documentación y ejemplos para una
            implementación consistente en toda la plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentCategories.map((category) => (
            <Link
              key={category.name}
              href={category.path}
              className="block group"
            >
              <div className="border border-gray-200 rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:border-blue-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h2>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
