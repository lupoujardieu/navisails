import {useState} from "react";
import Link from "./link.tsx";
import links from "@utils/links.ts";
import "@styles/components/landing-screen/burger-menu.scss"


function BurgerMenu(props: { updateBackBtn: (windowScrollY: number, innerHeight: number) => void }) {
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const hideMenu = () => {
        setMenuClass("menu hidden");
        setBurgerClass("burger-bar unclicked")
        setIsMenuClicked(false);
    }

    window.onscroll = () => {
        if (burgerClass.includes("unclicked")) {
            if (window.scrollY > window.innerHeight - 40) {
                setBurgerClass("burger-bar unclicked mix-mode");
            } else {
                setBurgerClass("burger-bar unclicked")
            }
        }
        props.updateBackBtn(window.scrollY, window.innerHeight);
    }

    return (
        <div className="burger-wrapper">
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            <div className={menuClass}>
                {links.map(link => (
                    <Link key={link.id} hideMenuEvent={hideMenu} {...link}/>
                ))}
            </div>
        </div>
    );
}

export default BurgerMenu