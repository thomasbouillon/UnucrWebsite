import Image from "next/image";
import Link from "next/link";

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
        <Link className="link" href="#">
          Coordonnées des délégués départementaux et Présidents UDUCR au
          07/09/2022
        </Link>

        <Link className="link" href="#">
          Contrat du délégué départemental (v2016)
        </Link>

        <Link className="link" href="#">
          Contrat d&apos;association affiliée (v2016)
        </Link>

        <Link className="link" href="#">
          Bilan des activités hors recherche (*.doc)
        </Link>

        <Link className="link" href="#">
          Bilan des activités hors recherche (*.pdf)
        </Link>

        <Link className="link" href="#">
          Comptabilité délégation compte et caisse en numéraire 2016 (reservé au
          DD UNUCR)
        </Link>
      </div>
    </div>
  );
}
