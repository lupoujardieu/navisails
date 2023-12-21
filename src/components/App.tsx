import LandingScreen from "@components/landingScreen/landingScreen.tsx";
import OurHistory from "@components/ourHistory/ourHistory.tsx";
import ProductsRender from "@components/products/productsRender.tsx";
import NewsAndEvents from "@components/newsAndEvents/newsAndEvents.tsx";
import Footer from "@components/footer/footer.tsx";
import "@styles/main.scss"

export default function App() {
    return (
        <>
            <LandingScreen/>
            <div className="content">
                <OurHistory/>
                <ProductsRender/>
                <NewsAndEvents/>
            </div>
            <Footer/>
        </>
    );
}