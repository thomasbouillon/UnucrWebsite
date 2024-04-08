import Image from "next/image";
import Link from "next/link";
import { FileLink } from "./FileLink";
import routes from "./routes";

export default function Home() {
  return (
    <div className="max-w-prose mx-auto space-y-8">
      <h2 className="p-4 bg-secondary-100 rounded-lg mb-8">
        La recherche au sang
      </h2>

      <div className="space-y-2">
        <Link className="link" href={routes().newOrUpdateHunter()}>
          Devenir Conducteur ou faire sa demande d&apos;agrément
        </Link>
        <FileLink className="link" filePath="stages.pdf">
          Les stages 2024
        </FileLink>
        <FileLink className="link" filePath="calendrier-epreuves.pdf">
          Le calendrier des épreuves 2024
        </FileLink>
      </div>

      <div>
        <Link
          className="link"
          href="https://www.unucr.fr/jusquau-bout-la-revue-de/quelques-anciens-articles/ou-en-est-la-recherche-en.pdf"
        >
          Où en est la recherche, en 2017, dans nos départements
        </Link>
        <p>Une étude détaillée de la recherche UNUCR, en France.</p>
      </div>

      <article>
        <h3 className="text-primary-100 font-serif font-bold mb-4">
          La recherche au sang
        </h3>
        Laisser, à la suite d&apos;une chasse, un animal blessé sans avoir
        entrepris une recherche est intolérable. On peut s&apos;imaginer les
        souffrances qu&apos;une blessure par balle peut engendrer. L&apos;animal
        peut mourrir quelques heures après le tir, mais également souffrir
        pendant plusieurs jours, voir plusieurs semaines.
        <br className="mb-2" />
        L&apos;éthique de la chasse au grand gibier exige impérativement que,
        par respect de l&apos;animal, ce dernier, lorsqu&apos;il est blessé,
        fasse l&apos;objet d&apos;une recherche systématique. Les meilleurs
        chances de succès ne peuvent être obtenues qu&apos;avec le concours de
        chiens spécialisés menés par des conducteurs formés et expérimentés.
        <br className="mb-2" />
        <span className="text-primary-100 font-serif font-bold">
          L&apos;Union Nationale pour l&apos;Utilisation de Chiens de Rouge
        </span>{" "}
        forme ces équipes, car la recherche du grand gibier blessé est une
        discipline qui demande beaucoup d&apos;efforts, d&apos;abnégation, des
        connaissances profondes de la morphologie et de l&apos;éthologie de
        celui-ci, une parfaite connaissance de l&apos;esprit de chasse liée à
        une grande prudence dans les actes, une nécessaire réserve dans
        l&apos;expression verbale et une harmonie totale du maître avec son
        chien de rouge.
        <br className="mb-2" />
        Fondée en 1980, sous le haut patronage de la Direction de la Protection
        de la Nature, du Ministère de l&apos;Environnement et du Cadre de Vie,
        de l&apos;Office National de la Chasse, de l&apos;Office National de
        Forêts, de l&apos;Union des Présidents de Fédérations Départementales de
        Chasseurs et de la Société Centrale Canine,
        <span className="text-primary-100 font-serif font-bold">
          l&apos;UNUCR
        </span>{" "}
        a, depuis sa création, formé un grand nombre d&apos;équipes
        conducteur-chien opérationnelles pour la recherche du grand gibier
        blessé.
        <div className="grid sm:grid-cols-2">
          <Image
            src="/home/image.jpeg"
            alt="Chien de rouge à côté d'un sanglier"
            width={752}
            height={954}
            className="mx-auto mt-6"
          />
          <Image
            src="/home/image2.jpg"
            alt="Image d'une chien de rouge en action"
            width={700}
            height={933}
            className="mx-auto mt-6"
          />
        </div>
      </article>
    </div>
  );
}
