'use client';

import Link from 'next/link';
import Button from '../../components/button';

export default function ButtonsCatalog() {
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
              className="px-3 py-2 rounded hover:bg-primary-800 transition-colors"
            >
              Design System
            </Link>
          </nav>
        </section>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <Link
            href="/catalog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Catalog
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Button Component</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            The Button component is a versatile UI element that supports various
            styles, sizes, and states. Use it for actions, form submissions, and
            interactive elements.
          </p>
        </div>

        {/* API Documentation */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Prop
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Default
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    variant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>
                      primary | secondary | link | danger | success | warning |
                      info
                    </code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>primary</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Determines the button&apos;s color scheme and visual style
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    size
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>xs | sm | md | lg | xl</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>md</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Controls the button&apos;s size
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    fullWidth
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>boolean</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>false</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    When true, the button takes up the full width of its
                    container
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    rounded
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>boolean</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>false</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    When true, applies fully rounded corners (border-radius:
                    9999px)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    outlined
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>boolean</code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <code>false</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    When true, renders an outlined version of the button instead
                    of filled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              Additionally, the Button component accepts all standard HTML
              button attributes.
            </p>
          </div>
        </section>

        {/* Variants Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
            Variants
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Button variant="primary" className="mb-2">
                Primary
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;primary&quot;
              </code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="secondary" className="mb-2">
                Secondary
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;secondary&quot;
              </code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="danger" className="mb-2">
                Danger
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;danger&quot;
              </code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="success" className="mb-2">
                Success
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;success&quot;
              </code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="warning" className="mb-2">
                Warning
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;warning&quot;
              </code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="info" className="mb-2">
                Info
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;info&quot;
              </code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="link" className="mb-2">
                Link
              </Button>
              <code className="text-sm text-gray-600">
                variant=&quot;link&quot;
              </code>
            </div>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4 ">
            <div className="flex flex-col items-center">
              <Button size="xs" className="mb-2">
                Extra Small
              </Button>
              <code className="text-sm text-gray-600">size=&quot;xs&quot;</code>
            </div>
            <div className="flex flex-col items-center">
              <Button size="sm" className="mb-2">
                Small
              </Button>
              <code className="text-sm text-gray-600">size=&quot;sm&quot;</code>
            </div>
            <div className="flex flex-col items-center">
              <Button size="md" className="mb-2">
                Medium
              </Button>
              <code className="text-sm text-gray-600">size=&quot;md&quot;</code>
            </div>
            <div className="flex flex-col items-center">
              <Button size="lg" className="mb-2">
                Large
              </Button>
              <code className="text-sm text-gray-600">size=&quot;lg&quot;</code>
            </div>
            <div className="flex flex-col items-center">
              <Button size="xl" className="mb-2">
                Extra Large
              </Button>
              <code className="text-sm text-gray-600">size=&quot;xl&quot;</code>
            </div>
          </div>
        </section>

        {/* Outlined and Rounded Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
            Outlined and Rounded Buttons
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Button variant="primary" outlined className="mb-2">
                Primary
              </Button>
              <code className="text-sm text-gray-600">outlined</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="secondary" outlined className="mb-2">
                Secondary
              </Button>
              <code className="text-sm text-gray-600">outlined</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="danger" outlined className="mb-2">
                Danger
              </Button>
              <code className="text-sm text-gray-600">outlined</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="success" outlined className="mb-2">
                Success
              </Button>
              <code className="text-sm text-gray-600">outlined</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="primary" rounded className="mb-2">
                Redondeado
              </Button>
              <code className="text-sm text-gray-600">rounded</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="success" rounded outlined className="mb-2">
                Outline + Redondeado
              </Button>
              <code className="text-sm text-gray-600">rounded outlined</code>
            </div>
          </div>
        </section>

        {/* Sección de Ancho Completo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
            Botones de Ancho Completo
          </h2>
          <div className="space-y-4">
            <div>
              <Button variant="primary" fullWidth className="mb-2">
                Botón de Ancho Completo
              </Button>
              <code className="text-sm text-gray-600 block text-center">
                fullWidth
              </code>
            </div>
            <div>
              <Button variant="success" fullWidth outlined className="mb-2">
                Outline de Ancho Completo
              </Button>
              <code className="text-sm text-gray-600 block text-center">
                fullWidth outlined
              </code>
            </div>
          </div>
        </section>

        {/* Sección de Estados */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Estados</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Button variant="primary" disabled className="mb-2">
                Deshabilitado
              </Button>
              <code className="text-sm text-gray-600">disabled</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="danger" outlined disabled className="mb-2">
                Outline Deshabilitado
              </Button>
              <code className="text-sm text-gray-600">outlined disabled</code>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">
                <span className="block text-sm text-gray-600 mb-1">
                  Hover (pasa el cursor)
                </span>
                <Button variant="success">Hover Me</Button>
              </div>
              <code className="text-sm text-gray-600">hover effect</code>
            </div>
          </div>
        </section>

        {/* Sección de Botones Link en Contexto */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
            Botones Link en Contexto
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 mb-4">
              Este es un ejemplo de cómo los botones tipo link se integran con
              el texto. Puedes <Button variant="link">hacer clic aquí</Button>{' '}
              para más información o
              <Button variant="link">&nbsp;visitar nuestra página</Button> para
              conocer más detalles. También puedes{' '}
              <Button variant="link">contactarnos</Button> si tienes alguna
              pregunta.
            </p>

            <p className="text-gray-800">
              Nota cómo los botones tipo link no tienen padding y se integran
              perfectamente con el texto, manteniendo el flujo natural de
              lectura sin espacios adicionales.
            </p>
          </div>
        </section>

        {/* Sección de Botones con Iconos */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
            Botones con Iconos y estados de carga
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <Button
                variant="primary"
                className="mb-2 flex justify-center items-center"
              >
                <svg
                  className="w-4 h-4 mx-auto mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="block w-full text-center">Ver detalles</span>
              </Button>
              <code className="text-sm text-gray-600">
                Icono a la izquierda
              </code>
            </div>

            <div className="flex flex-col items-center">
              <Button
                variant="success"
                className="mb-2 flex justify-center items-center"
              >
                Guardar
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <code className="text-sm text-gray-600">Icono a la derecha</code>
            </div>

            <div className="flex flex-col items-center">
              <Button
                variant="info"
                disabled
                className="mb-2 flex flex-col items-center "
              >
                <svg
                  className="animate-spin h-4 w-4 mb-1 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Cargando...</span>
              </Button>
              <code className="text-sm text-gray-600">Icono arriba</code>
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="warning"
                className="mb-2 flex flex-col items-center"
              >
                <span>Visitar sitio</span>
                <svg
                  className="w-4 h-4 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </Button>
              <code className="text-sm text-gray-600">Icono abajo</code>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="danger" outlined className="mb-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <code className="text-sm text-gray-600">Solo icono</code>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">
            Usage Examples
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Basic Button</h3>
            <div className="bg-gray-50 p-4 rounded-md mb-2">
              <Button variant="primary">Click Me</Button>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`import Button from '../components/button';

function MyComponent() {
  return (
    <Button variant="primary">Click Me</Button>
  );
}`}</code>
            </pre>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Button with Icon</h3>
            <div className="bg-gray-50 p-4 rounded-md mb-2">
              <Button
                variant="success"
                size="xl"
                className="mb-2 flex justify-center items-center"
              >
                Guardar
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`<Button
                variant="success"
                className="mb-2 flex justify-center items-center"
              >
                Guardar
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">Combining Properties</h3>
            <div className="bg-gray-50 p-4 rounded-md mb-2">
              <Button variant="danger" size="lg" outlined rounded>
                Delete Account
              </Button>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`<Button 
  variant="danger" 
  size="lg" 
  outlined 
  rounded
>
  Delete Account
</Button>`}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
