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
        <ul className="flex flex-col max-w-52 gap-4">
          <li className="space-y-2">
            <Link href={routes().home()} className="link">
              Adhérer à l'UNUCR
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
              Liste officielle des conducteurs agréés de l’UNUCR
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Liste des responsables départementaux
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Stages UNUCR 2023
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Les archives du JAB
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Découvez la recherche au sang au travers des articles du JAB
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Envoyer un article
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              A qui s&apos;adresser à l&apos;UNUCR ?
            </Link>
          </li>
          <li>
            <Link href="#" className="link">
              Le calendrier des épreuves 2023
            </Link>
          </li>
          <li className="space-y-2">
            <Link href="#" className="link">
              Boutique
            </Link>
            <Image
              className="mx-auto"
              src="/boutique.png"
              width={200}
              height={280}
              alt="Aperçu de la boutique"
            />
          </li>
          <li className="space-y-2">
            <Link href="#" className="link">
              Geschasse V2
            </Link>
            <Image
              className="mx-auto"
              src="/geschasse.jpeg"
              width={200}
              height={344}
              alt="Aperçu de la boutique"
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
