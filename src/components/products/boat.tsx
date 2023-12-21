import BoatDto from "@components/products/boat.dto.ts";
import lengthIcon from "@assets-images/icons/longueur-50.png";
import userIcon from "@assets-images/icons/utilisateur-64.png";
import "@styles/components/products/boat.scss"

export default function Boat(props: { data: BoatDto }) {
    return (
        <div id={"product-" + props.data.id} className="boat flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.data.image} alt="placeolder"/>
                    <p className="legend">{props.data.title}</p>
                </div>
                <div className="flip-card-back">
                    <div className="card-content">
                        <section className="description">{props.data.description}</section>
                        <ul>
                            <li>
                                <img className="icon" src={lengthIcon} alt="longueur"/>
                                <span>{props.data.length} pieds</span>
                            </li>
                            <li>
                                <img className="icon" src={userIcon} alt="icone utilisateur"/>
                                <span>{props.data.capacity} personnes</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}