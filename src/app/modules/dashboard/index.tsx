export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary-950 text-primary-50 sticky top-0 z-10">
        <section className="max-4-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium flex justify-start">
            <div className="flex items-center justify-center -space-x-2 mx-2">
              <div className="bg-secondary-950 w-10 h-10 rounded-full"></div>
              <div className="bg-primary-50 w-10 h-10 rounded-full"></div>
            </div>
            <a href="#portal-iot">PORTAL IOT</a>
          </h1>
          <div>
            <button
              id="mobile-open-button"
              className="text-3xl sm:hidden focus:outline:none"
            >
              &#9776;
            </button>
            <nav
              className="hidden sm:block space-x-8 text-xl"
              aria-label="main"
            >
              <a href="#perfil" className="hover:opacity-90">
                Perfil
              </a>
              <a href="#cerrar-sesion" className="hover:opacity-90">
                Cerrar Sesión
              </a>
            </nav>
          </div>
        </section>
      </header>
      <main className="max-w-4xl mx-auto">
        <section
          id="perfil"
          className=" flex flex-col-reverse justify-center sm:flex-row px-6 items-center gap-8 mb-12"
        >
          <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-neutral-999">
              HOLA a componente de perfil
            </h2>
            <hr className="mx-auto bg-neutral-400 h-0.5" />
          </article>
        </section>
      </main>
    </div>
  );
}
