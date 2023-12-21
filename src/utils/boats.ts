import BoatDto from "@components/products/boat.dto.ts";
import blueHorizon from "@assets-images/boats/blue-horizon.png"
import celestialSpeed from "@assets-images/boats/celectial-speed.jpg";
import marineTranquility from "@assets-images/boats/marine-tranquility.jpg";
import seaExplorer from "@assets-images/boats/sea-explorer.png";
import skipperStar from "@assets-images/boats/skipper-star.png";

const boats: BoatDto[] = [
    {
        id: 1,
        title: "Étoile du Marin",
        description: "Conçu pour les marins expérimentés, l'Étoile du Marin allie performance de pointe et élégance intemporelle. Les lignes épurées et les détails luxueux offrent une expérience de navigation incomparable.",
        image: skipperStar,
        capacity: 6,
        length: 45
    },
    {
        id: 2,
        title: "Horizon Bleu",
        description: "Parfait pour les familles en quête d'aventure, l'Horizon Bleu offre polyvalence et facilité de navigation. Son design ergonomique et ses fonctionnalités intuitives en font un compagnon idéal pour les escapades côtières.",
        image: blueHorizon,
        capacity: 4,
        length: 36
    },
    {
        id: 3,
        title: "Vitesse Céleste",
        description: "Pour les passionnés de sensations fortes, le Vitesse Céleste est conçu pour une navigation rapide et agile. Doté de technologies de pointe, ce voilier offre une expérience palpitante sur les eaux ouvertes.",
        image: celestialSpeed,
        capacity: 8,
        length: 50
    },
    {
        id: 4,
        title: "Tranquillité Marine",
        description: "Le Tranquillité Marine incarne le confort et la sérénité en mer. Avec son intérieur spacieux et ses équipements de détente, ce voilier offre une escapade paisible pour les navigateurs cherchant le calme des horizons lointains.",
        image: marineTranquility,
        capacity: 5,
        length: 40
    },
    {
        id: 5,
        title: "Aventurier des Mers",
        description: "L'Aventurier des Mers est conçu pour les expéditions épiques. Avec des capacités de stockage étendues et une autonomie accrue, ce voilier est prêt à relever tous les défis des aventuriers intrépides.",
        image: seaExplorer,
        capacity: 10,
        length: 55
    },
];

export default boats;