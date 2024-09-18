import Image from "next/image";
import Link from "next/link";
import routes from "./routes";
import { FileLink } from "./FileLink";

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
            <FileLink filePath="conducteurs/adherer.pdf" className="link">
              Adhérer à l&apos;UNUCR
            </FileLink>
            <Image
              className="mx-auto"
              src="/logo.jpg"
              width={100}
              height={100}
              alt="Logo UNUCR"
            />
          </li>
          <li>
            <FileLink
              filePath="conducteurs/liste-des-conducteurs-agrees.pdf"
              className="link"
            >
              Liste officielle des conducteurs agréés de l&apos;UNUCR
            </FileLink>
          </li>
          <li>
            <FileLink filePath="stages.pdf" className="link">
              Programme des stages
            </FileLink>
          </li>
          <li>
            <FileLink filePath="calendrier-epreuves.pdf" className="link">
              Programme des épreuves
            </FileLink>
          </li>
          <li>
            <FileLink filePath="organigramme.pdf" className="link">
              A qui s&apos;adresser ?
            </FileLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
