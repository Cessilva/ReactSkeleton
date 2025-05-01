import Button from '../../components/button';
import { DashboardDropdown } from '../../components/dashboardDropDown';
import { ProfileDropdown } from '../../components/perfilDropDown';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary-950 text-primary-50 sticky top-0 z-10">
        <section className="max-4-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl w-auto font-medium flex justify-start">
            <div className="flex items-center justify-center -space-x-2 mx-2">
              <div className="bg-secondary-950 w-10 h-10 rounded-full"></div>
              <div className="bg-primary-50 w-10 h-10 rounded-full"></div>
            </div>
            <a
              href="#portal-iot"
              className="whitespace-normal sm:whitespace-nowrap ml-3 mr-5"
            >
              PORTAL IOT
            </a>
          </h1>
          <div className="w-full h-full flex flex-row justify-end sm:justify-between items-center">
            <div className="hidden sm:flex items-center space-x-4">
              <DashboardDropdown />
              <Link
                href="/catalog"
                className="px-3 py-2 rounded hover:bg-primary-800 transition-colors"
              >
                Design System
              </Link>
            </div>
            <ProfileDropdown />
          </div>
        </section>
      </header>
      <main className=" max-w-screen max-h-screen mx-auto"></main>
    </div>
  );
}
