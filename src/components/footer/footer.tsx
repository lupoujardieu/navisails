import logo from "@assets-images/logo.svg";
import githubIcon from "@assets-images/icons/github-50.png";
import linkedinIcon from "@assets-images/icons/linkedin-50.png";
import "@styles/components/footer/footer.scss"

export default function Footer() {
    return (
        <footer id="contact">
            <div className="footer-header">
                <h2>
                    <img src={logo} alt="logo"/>
                    NaviSail
                </h2>
                <p>Explorez l'Infini avec Élégance</p>
            </div>
            <div className="footer-content">
                <section className="footer-section">
                    <h3>Liens Utiles</h3>
                    <ul>
                        <li><a href="#our-history">Notre histoire</a></li>
                        <li><a href="#boats">Nos Voiliers</a></li>
                        <li><a href="#news">Actualités et Événements</a></li>
                    </ul>
                </section>
                <section className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="mailto:contact@navisails.com">contact@navisails.com</a></li>
                        <li>118-218-118-218</li>
                        <li className="socials">
                            <a href="https://github.com/lupoujardieu">
                                <img src={githubIcon} alt="github icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/lucas-poujardieu/">
                                <img src={linkedinIcon} alt="linkedin icon"/>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer-bottom">
                <p>Projet qui a pour seul but l'apprentissage de React TS</p>
                <p>&copy; 2023 NaviSail. Projet open-source</p>
            </div>
        </footer>
    );
}