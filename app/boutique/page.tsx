import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Boutique</h2>

      <Image
        src="/boutique/boutique.jpeg"
        alt=""
        width={510}
        height={364}
        aria-hidden
      />

      <div className="space-y-8 mt-8">
        <Link className="link" href="#">
          Articles de la boutique et bon de commande
        </Link>

        <Link className="link" href="#">
          Contacter la responsable boutique
        </Link>
      </div>
    </div>
  );
}
