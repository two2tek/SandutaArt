/* eslint-disable react/no-unescaped-entities */
import Slider from "./components/Slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Slider />
      <hr className="hidden lg:block lg:max-w-[60%] mt-10 sm:mb-4 border-2 rounded-xl items-center justify-center m-auto border-[#B1B1B1]" />
      <h1 className="text-center font-bold text-3xl mt-20 sm:mt-10">PRODUSE</h1>
      <div className="flex justify-center max-w-[960px] mt-5 mx-auto mb-75 flex-wrap">
        <div className="product-card">
          <Link href="/marketing">
            <Image
              src="/images/marketing.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Materiale Marketing</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/textile">
            <Image
              src="/images/textile.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Textile</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/standuri">
            <Image
              src="/images/standuri.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Standuri Expozitionale</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/printuri">
            <Image
              src="/images/printuri.png"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Printuri Mari</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/publicitara">
            <Image
              src="/images/publicitate.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Productie Publicitara</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/servicii">
            <Image
              src="/images/servicii.png"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Servicii</p>
          </Link>
        </div>
      </div>

      <hr className="hidden lg:block lg:max-w-[60%] mt-10 mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
      <style jsx>{`
        .product-card {
          text-align: center;
          margin: 20px;
          margin-top: 40px;
          width: 200px; // Aici setați dimensiunea dorită pentru toate imaginile
          height: 200px; // Aici setați dimensiunea dorită pentru toate imaginile
          transition: filter 0.3s; // Adăugăm o tranziție pentru efect de hover
        }

        .product-card p {
          margin-top: 10px;
          text-align: start;
          font-weight: 600;
        }

        .product-card:hover {
          filter: contrast(
            80%
          ); // Ajustați valoarea pentru a face imaginea mai luminoasă sau mai întunecată
        }
      `}</style>

      <div className="max-w-[70%] m-auto">
        <h1 className="text-start font-bold text-3xl mt-10 mb-5">Despre Noi</h1>
        <p>
          Cu pasiune pentru imprimarea de calitate și o devotare continuă pentru
          satisfacția clienților noștri, Tipografia Sănduța Art s-a dezvoltat
          ca o modestă tipografie digitală, specializată în producția de
          materiale promoționale. Cu trecerea anilor și în urma feedback-ului
          nostru valoros din partea clienților, am evoluat și ne-am diversificat
          gama de servicii oferite, pentru a răspunde cu exactitate nevoilor
          lor.
        </p>
        <br />
        <p>
          Cu toate acestea, un principiu a rămas neschimbat, ca un stindard pe
          care îl purtăm cu mândrie: Calitatea produselor și serviciilor
          noastre trebuie să atingă vârful perfecțiunii. Suntem mândri să fim
          recunoscuți pentru devotamentul nostru față de clienți și pentru
          viteza cu care ne desfășurăm activitatea. Într-o lume în care timpul
          are o valoare inestimabilă, noi înțelegem importanța unei colaborări
          eficiente și a respectării angajamentelor față de clienții noștri, și
          întotdeauna justificăm încrederea pe care ne-o acordă. Tipografia
          noastră are capacitatea de a produce o gamă largă de materiale
          tipărite, de la simple cărți de vizită și pliante, până la broșuri
          corporative elaborate și volume impresionante.
        </p>
        <br />

        <p>
          Sănduța Art este sinonim cu atenția și abordarea individuală pentru
          fiecare client:
        </p>
        <ul style={{ listStyleType: "disc" }} className="ml-7">
          <li>
            Ne putem materializa cu precizie toate ideile dvs. sau vă putem
            propune concepte inovatoare.
          </li>
          <li>Dezvoltăm design-ul și conceptul produselor dvs.</li>
          <li>Pregătim cu grijă fiecare produs pentru tipar.</li>
          <li>Livrăm tiparul de cea mai înaltă calitate.</li>
          <li>
            Vă oferim o gamă variată de produse și servicii, precum și un
            standard de imprimare impecabil.
          </li>
        </ul>

        <br />
        <p>
          Cu Tipografia Sănduța Art la partea de producție, puteți transforma
          visele în realitate, economisi bani și timp prețios și materializa
          cele mai îndrăznețe concepte.
        </p>
        <br />
        <p>
          Sănduța Art - unde creativitatea, calitatea și viteza se întâlnesc
          pentru a vă oferi cele mai bune soluții tipografice.
        </p>
      </div>
      <hr className="hidden lg:block lg:max-w-[60%] mt-10 mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
    </>
  );
}
