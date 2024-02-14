import Image from "next/image";
import Link from "next/link";
import routes from "./routes";

export function SideNav() {
  return (
    <aside className="h-full">
      <nav
        aria-label="Raccourcis"
        className="h-full bg-light-100 px-4 py-8 font-serif"
      >
        <p className="text-center mb-4 md:hidden">Accès rapides</p>
        <ul className="md:flex md:flex-col md:max-w-52 gap-4 grid sm:grid-cols-3 grid-cols-2">
          <li className="space-y-2">
            <Link href={routes().home()} className="link">
              Adhérer à l&apos;UNUCR
            </Link>
            <Image
              className="mx-auto"
              src="/logo.jpg"
              width={100}
              height={100}
              alt="Logo UNUCR"
            />
          </li>
          <li>
            <Link href="#" className="link">
              Liste officielle des conducteurs agréés de l&apos;UNUCR
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Le calendrier des épreuves 2023
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
