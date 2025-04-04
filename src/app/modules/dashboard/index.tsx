import { ProfileDropdown } from '../../components/perfilDropDown';

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
            <ProfileDropdown />
          </div>
        </section>
      </header>
      <main className="bg-black max-w-screen mx-auto">
        <section
          id="perfil"
          className=" flex flex-col-reverse justify-center sm:flex-row px-6 items-center gap-8 mb-12"
        ></section>
      </main>
    </div>
  );
}
