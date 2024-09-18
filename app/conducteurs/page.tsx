import Link from "next/link";
import { FileLink } from "../FileLink";
import routes from "../routes";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Conducteurs</h2>

      <div className="space-y-8">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Devenir conducteur de chien de rouge
        </h3>
        <div>
          N&apos;est pas conducteur agréé qui veut. Un chien ayant fait
          occasionnellement une recherche sur un animal blessé n&apos;est pas un
          chien de rouge, et son propriétaire n&apos;est pas encore un
          conducteur.
          <br className="mb-2" />
          Pour devenir un conducteur opérationnel et performant il faut savoir
          que cela demande un investissement personnel fort pour être disponible
          au moment voulu, et pour former avec son chien une équipe ayant un
          maximum de chances de réussite en recherche.
          <br className="mb-2" />
          Pour devenir conducteur agréé de l&apos;Union Nationale pour
          l&apos;Utilisation de Chiens de Rouge (UNUCR), il faut respecter les
          conditions définies dans le contrat d&apos;agrément du conducteur. Et
          notamment :
          <br className="mb-4" />
          <ol className="list-disc list-inside">
            <li>Etre membre de l&apos;UNUCR,</li>
            <li>Etre titulaire d&apos;un permis de chasser validé.</li>
            <li>
              Participer à un stage organisé ou reconnu par l&apos;UNUCR, et
              compléter cette formation théorique et pratique par un parrainage.
            </li>
            <li>
              Eduquer un chiot et réussir ensuite une épreuve de recherche sur
              piste artificielle ou naturelle, ou son équivalent.
            </li>
          </ol>
        </div>

        <Link className="link" href={routes().newOrUpdateHunter()}>
          Devenir Conducteur ou faire sa demande d&apos;agrément
        </Link>

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
      </div>

      <Image
        src="/conducteurs/image.jpg"
        alt="Image d'une chien de rouge en action"
        width={700}
        height={933}
        className="mx-auto mt-6"
      />
    </div>
  );
}
