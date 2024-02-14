import clsx from "clsx";
import Link from "next/link";
import routes from "./routes";

export function Header() {
  const linkClassName = "underline inline-block mx-2";

  return (
    <header className="py-8 px-4">
      <h1
        className={clsx(
          "text-primary-100 text-6xl text-center font-serif font-bold tracking-wide",
          "current after:my-6 after:block after:w-80 after:h-[1px] after:bg-black after:mx-auto"
        )}
      >
        UNUCR
      </h1>
      <p className="text-primary-100 font-serif font-bold text-center italic">
        Union Nationale pour l&apos;Utilisation de Chiens de Rouge
      </p>
      <nav className="max-w-4xl mx-auto mt-8">
        <ul className="text-center">
          <li className={linkClassName}>
            <Link href={routes().home()}>Accueil</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().news()}>Actualités</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().hunters()}>Conducteurs</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().cynophilie()}>Cynophilie</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().shop()}>Boutique</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().delegations()}>
              Délégations et associations départementales
            </Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().downloads()}>Divers et téléchargements</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().guarantee()}>Fonds de garantie</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().geschasse()}>GesChasse</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().newsPaper()}>Revue</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Les stages UNUCR 2023</Link>
          </li>
          <li className={linkClassName}>
            <Link href={routes().links()}>Liens</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Petites annonces</Link>
          </li>
          <li>
            <Link href="#" className={linkClassName}>
              A qui s&apos;adresser à l&apos;UNUCR ?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
