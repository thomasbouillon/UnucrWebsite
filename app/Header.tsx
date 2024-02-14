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
            <Link href="#">Actualités</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Conducteurs</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Cynophilie</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Boutique</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Délégations et associations départementales</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Divers et téléchargements</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Fonds de garantie</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">GesChasse</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Revue</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Les stages UNUCR 2023</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Liens</Link>
          </li>
          <li className={linkClassName}>
            <Link href="#">Petites annonces</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
