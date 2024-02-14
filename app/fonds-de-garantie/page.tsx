import Image from "next/image";
import Link from "next/link";

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
        <Link className="link" href="#">
          Statuts du fonds de garantie
        </Link>

        <p>
          <Link className="inline-link" href="#">
            Déclaration d&apos;accident de chien
          </Link>{" "}
          (à adresser à Cyrille Piccot-Crézollet)
        </p>

        <p>
          <Link className="inline-link" href="#">
            Contacter le responsable du fonds de garantie
          </Link>{" "}
          (réservé aux délégués, présidents UDUCR et conducteurs UNUCR)
        </p>
      </div>
    </div>
  );
}
