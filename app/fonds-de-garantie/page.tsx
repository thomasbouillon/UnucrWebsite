import Image from "next/image";
import Link from "next/link";
import { FileLink } from "../FileLink";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        Fonds de garantie
      </h2>

      <Image
        src="/fonds-de-garantie/fonds-de-garantie.jpeg"
        alt="Un chien avec une blessure"
        width={510}
        height={286}
      />

      <div className="space-y-8 mt-8">
        <FileLink
          className="link"
          filePath="fonds-de-garantie/statuts-fonds-de-garantie.pdf"
        >
          Statuts du fonds de garantie
        </FileLink>

        <p>
          <FileLink
            className="inline-link"
            filePath="fonds-de-garantie/formulaire-de-declaration.pdf"
          >
            Déclaration d&apos;accident de chien
          </FileLink>{" "}
          (à adresser à Cyrille Piccot-Crézollet)
        </p>

        <p>
          <Link className="inline-link" href="mailto:cpc.unucr@gmail.com">
            Contacter le responsable du fonds de garantie
          </Link>{" "}
          (réservé aux délégués, présidents UDUCR et conducteurs UNUCR)
        </p>
      </div>
    </div>
  );
}
