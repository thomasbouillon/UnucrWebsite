import Image from "next/image";
import { FileLink } from "../FileLink";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        Délégations et associations départementales
      </h2>

      <Image
        src="/delegations-et-assocations-departementales/assemblee.jpeg"
        alt="Un condcuteur et son chien"
        width={510}
        height={286}
      />

      <div className="space-y-8 mt-8">
        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/liste-des-delegues-ar.pdf"
        >
          Coordonnées des délégués départementaux et Présidents UDUCR
        </FileLink>

        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/coordonnateurs-regionaux.jpg"
        >
          coordonnateurs régionaux
        </FileLink>

        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/contrat-du-delegue-departemental.pdf"
        >
          Contrat du délégué départemental
        </FileLink>

        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/contrat-d-association-affiliee.pdf"
        >
          Contrat d&apos;association affiliée
        </FileLink>

        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/bilan-activites-dep.doc"
        >
          Bilan des activités hors recherche (*.doc)
        </FileLink>

        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/bilan-activites-dep.pdf"
        >
          Bilan des activités hors recherche (*.pdf)
        </FileLink>

        <FileLink
          className="link"
          filePath="delegations-et-associations-dep/comptabilite-delegation.xls"
        >
          Comptabilité délégation compte et caisse en numéraire (reservé au DD
          UNUCR)
        </FileLink>
      </div>
    </div>
  );
}
