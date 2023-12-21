import {Carousel} from "react-responsive-carousel";
import Boat from "@components/products/boat.tsx";
import boats from "@utils/boats.ts";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "@styles/components/products/productRender.scss"

export default function ProductsRender() {
    const products = boats;

    return (
        <section id="boats">
            <h2 className="big-title"> Nos bateaux </h2>
            <p className="subsection-title">
                Chaque voilier de la gamme NaviSail offre une expérience unique, répondant aux besoins variés des
                passionnés de la voile.
            </p>
            <div className="wrapper">
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    useKeyboardArrows={true}
                    swipeable={true}
                >
                    {products.map(boat => <Boat key={boat.id} data={boat}/>)}
                </Carousel>
            </div>
        </section>
    );
}