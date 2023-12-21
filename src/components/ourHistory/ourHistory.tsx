import "@styles/components/ourHistory/our-history.scss"
import boatArt from "@assets-images/boatArt.png"
import oldIndus from "@assets-images/oldIndus.png"

export default function OurHistory() {
    return (
        <section id="our-history">
            <h2 className="big-title"> Naviguez avec élégance </h2>
            <article className="subsection-title">
                <p>
                    Bienvenue dans l'univers captivant de NaviSail, où l'aventure en mer rencontre le raffinement de
                    l'élégance. Nous croyons que la voile n'est pas simplement un moyen de transport,
                    mais
                    une expérience transcendante qui relie les amoureux de la mer à l'essence même de la liberté.
                </p>
            </article>
            <article>
                <h3> Notre Histoire </h3>
                <p>
                    <img src={oldIndus} alt="old industry" className="float-left"/>
                    Fondée en 1974, NaviSail est née de la passion partagée pour la mer. Notre
                    entreprise a rapidement émergé comme un pionnier de l'industrie de la voile, alliant l'héritage
                    marin à l'innovation contemporaine.

                    De nos débuts modestes aux succès actuels, chaque voilier NaviSail incarne l'expertise de nos
                    marins, l'ingéniosité de nos ingénieurs et l'engagement envers l'excellence. Nous sommes fiers
                    de
                    créer des voiliers qui racontent des histoires de liberté, d'aventure et de connexion avec
                    l'océan.

                    NaviSail - Naviguez avec nous, et ensemble, créons des horizons infinis.
                </p>
            </article>
            <article>
                <h3 className="end"> L'Art de Naviguer </h3>
                <p>
                    <img src={boatArt} alt="boat art van goth style" className="float-right"/>
                    Chez NaviSail, nous considérons la voile comme un art, une expérience sensorielle qui transcende
                    les frontières. Chaque voilier est une symphonie de formes, de matériaux de haute qualité et de
                    technologies avancées, créant une plateforme exceptionnelle pour ceux qui recherchent une
                    navigation
                    aussi fluide que gratifiante.
                </p>
            </article>
        </section>
    );
}