import DrawBorderBtn from "@components-common/drawBorderBtn.tsx";
import BurgerMenu from "./burgerMenu.tsx";
import boat from "@assets-images/logo.svg"
import boatShowcase from "@assets-videos/boat_showcase.mp4";
import links from "@utils/links.ts";
import "@styles/components/landing-screen/landing-screen.scss";
import {useState} from "react";

export default function LandingScreen() {
    const [backBtnClass, setBackBtnClass] = useState("backToTop-btn hidden");

    const updateBackToTopBtn = (windowScrollY: number, innerHeight: number) => {
        if (windowScrollY > innerHeight / 2) {
            setBackBtnClass("backToTop-btn black")
            if (windowScrollY > innerHeight * 3 + 40) {
                setBackBtnClass("backToTop-btn")
            }
        } else {
            setBackBtnClass("backToTop-btn hidden")
        }
    }

    return (
        <div className="landingScreen">
            <BurgerMenu updateBackBtn={updateBackToTopBtn}/>
            <a className={backBtnClass} href="#root"></a>
            <div className="overlay">
                <h1>
                    <img src={boat} alt="Navisails logo"/>
                    NaviSails
                </h1>
                <DrawBorderBtn title="Voir plus" url={links[0].url}/>
            </div>
            <video src={boatShowcase} autoPlay loop muted/>
        </div>
    );
}
