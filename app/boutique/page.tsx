import Image from "next/image";
import Link from "next/link";
import { FileLink } from "../FileLink";

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
        <FileLink className="link" filePath="boutique/boutique-unucr.pdf">
          Articles de la boutique et bon de commande
        </FileLink>

        <Link className="link" href="mailto:ph-leguyader29@orange.fr">
          Contacter la responsable boutique
        </Link>
      </div>
    </div>
  );
}
