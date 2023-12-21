import article1Img from "@assets-images/articles/article1.jpg";
import article2Img from "@assets-images/articles/article2.jpg";
import article3Img from "@assets-images/articles/article3.jpg";
import article4Img from "@assets-images/articles/article4.jpg";
import article5Img from "@assets-images/articles/article5.jpg";
import "@styles/components/newsAndEvents/news-events.scss"

export default function NewsAndEvents() {
    return (
        <div id="news">
            <h2 className="big-title"> News et Actualités</h2>
            <p className="subsection-title">
                Nos nouveautés et nos actualités pour vous aider à vivre intensément des instants et des expériences
                uniques sur l’eau.
            </p>
            <section className="news-wrapper">
                <article className="last">
                    <img src={article1Img} alt="article1 illustration image"/>
                    <p className="article-title">Nouveau Modèle En Vue</p>
                </article>
                <article>
                    <img src={article2Img} alt="article2 illustration image"/>
                    <p className="article-title">Record de Vitesse Battu</p>
                </article>
                <article>
                    <img src={article3Img} alt="article3 illustration image"/>
                    <p className="article-title">Préparez-vous pour l'Aventure</p>
                </article>
                <article>
                    <img src={article4Img} alt="article4 illustration image"/>
                    <p className="article-title">Reconnaissance Internationale</p>
                </article>
                <article>
                    <img src={article5Img} alt="article5 illustration image"/>
                    <p className="article-title">Partenariat Innovant Dévoilé</p>
                </article>
            </section>
        </div>
    );
}