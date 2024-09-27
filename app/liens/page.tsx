import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-8">
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">Liens</h2>
      <section className="space-y-4">
        <h3 className="text-primary-100 font-serif font-bold mb-4">Chiens</h3>
        <Link
          className="link text-black"
          href="http://www.scc.asso.fr/"
          target="_blank"
        >
          Société Centrale Canine
        </Link>
        <Link
          className="link text-black"
          href="http://www.cfcrhb.org/"
          target="_blank"
        >
          Club &nbsp;Francais du Chien de Rouge du Hanovre et de Bavière
        </Link>
        <Link
          className="link text-black"
          href="http://www.chien.com/clubdesamateursdeteckels/"
          target="_blank"
        >
          Club des Amateurs de Teckels
        </Link>
        <Link
          className="link text-black"
          href="http://www.retrieverclubdefrance.com/"
          target="_blank"
        >
          Retriever Club de France
        </Link>
        <Link
          className="link text-black"
          href="https://www.centrale-canine.fr/club-des-chiens-courants-de-l-europe-de-l-est"
          target="_blank"
        >
          Club des Chiens Courants de l&apos;Europe de l&apos;Est
        </Link>
      </section>
      <section className="space-y-4">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Institutions
        </h3>
        <Link
          className="link text-black"
          href="http://www.ancgg.org/"
          target="_blank"
        >
          ANCGG ( Association Nationale des Chasseurs de Grand Gibier)
        </Link>
        <Link
          className="link text-black"
          href="https://www.ofb.gouv.fr/"
          target="_blank"
        >
          OFB ( Office Français de la Biodiversité)
        </Link>
        <Link
          className="link text-black"
          href="http://www.onf.fr/"
          target="_blank"
        >
          ONF (Office National des Forêts)
        </Link>
        <Link
          className="link text-black"
          href="http://www.chasseurdefrance.com/"
          target="_blank"
        >
          FNC (Fédération Nationale des Chasseurs)
        </Link>
        <Link
          className="link text-black"
          href="http://www.faccc.fr/"
          target="_blank"
        >
          FACCC (Fédération des Associations de Chasseurs aux Chiens Courants)
        </Link>
        <Link
          className="link text-black"
          href="http://www.acufa.fr/"
          target="_blank"
        >
          ACUFA
        </Link>
      </section>
      <section className="space-y-4">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Association Européennes de Recherche au Sang
        </h3>
        <Link
          className="link text-black"
          href="http://aepes.es/"
          target="_blank"
        >
          AEPES&nbsp;(Association Espagnole)
        </Link>
        <Link
          className="link text-black"
          href="http://www.abucs.be/"
          target="_blank"
        >
          ABUCS&nbsp;(Association Belge)
        </Link>
      </section>
      <section className="space-y-4">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          UDUCR&nbsp;
        </h3>
        <Link
          className="link text-black"
          href="https://uducr51.wixsite.com/recherche-au-sang"
          target="_blank"
        >
          UDUCR 51
        </Link>
        <Link
          className="link text-black"
          href="http://uducr86.blog4ever.com/"
          target="_blank"
        >
          UDUCR 86
        </Link>
      </section>
      <section className="space-y-4">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Annonceurs JAB
        </h3>
        <Link
          className="link text-black"
          href="https://www.francital.com"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          Francital
        </Link>

        <Link
          className="link text-black"
          href="http://www.benierassurances.com/"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          Benier assurances
        </Link>

        <Link
          className="link text-black"
          href="https://www.clcassurances.com"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          CLC INTERNATIONAL ASSURANCES DIOT SIACI
        </Link>

        <Link
          className="link text-black"
          href="http://www.kolab.team"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          KOLAB
        </Link>

        <Link
          className="link text-black"
          href="https://www.numaxes.com"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          NUMAXES
        </Link>

        <Link
          className="link text-black"
          href="https://www.fpconcepts.fr"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          FP CONCEPTS
        </Link>

        <Link
          className="link text-black"
          href="https://www.geoviefinder.fr"
          target="_blank"
          style={{ fontSize: "1em" }}
        >
          GEOVIE
        </Link>
      </section>
      <section className="space-y-4">
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          Partenaires
        </h3>
        <Link
          className="link text-black"
          href="http://asso-caf.fr/presentation.html"
          target="_blank"
        >
          Chasseurs à l&apos;arc franciliens
        </Link>
      </section>
    </div>
  );
}
