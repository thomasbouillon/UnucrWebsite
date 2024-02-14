import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Conducteurs</h2>

      <div className="space-y-8">
        <Link className="link" href="#">
          Liste des conducteurs agréés au 07/10/2022
        </Link>

        <Link className="link" href="#">
          Demande de mise à jour de la liste des conducteurs et de leurs chiens
          (à adresser à Frédéric Bernard)
        </Link>

        <Link className="link" href="#">
          Code d&apos;honneur du conducteur agréé par l&apos;UNUCR
        </Link>

        <Link className="link" href="#">
          Adhérer à l&apos;UNUCR
        </Link>
      </div>
    </div>
  );
}
