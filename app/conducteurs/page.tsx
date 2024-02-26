import Link from "next/link";
import { FileLink } from "../FileLink";
import routes from "../routes";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Conducteurs</h2>

      <div className="space-y-8">
        <Link className="link" href={routes().newOrUpdateHunter()}>
          Devenir Conducteur ou faire sa demande d&apos;agrément
        </Link>

        <FileLink
          className="link"
          filePath="conducteurs/liste-des-conducteurs-agrees.pdf"
        >
          Liste des conducteurs agréés au 07/10/2022
        </FileLink>

        <FileLink
          className="link"
          filePath="conducteurs/demande-de-mise-a-jour-conducteurs-et-chiens.pdf"
        >
          Demande de mise à jour de la liste des conducteurs et de leurs chiens
          (à adresser à Frédéric Bernard)
        </FileLink>

        <FileLink className="link" filePath="conducteurs/code-dhonneur.pdf">
          Code d&apos;honneur du conducteur agréé par l&apos;UNUCR
        </FileLink>

        <FileLink className="link" filePath="conducteurs/adherer.pdf">
          Adhérer à l&apos;UNUCR
        </FileLink>
      </div>
    </div>
  );
}
