import Banner from "../Components/Home Compo/Banner";
import HomeTests from "../Components/Home Compo/HomeTests";
import Personalized from "../Components/Home Compo/Personalized";
import Promotions from "../Components/Home Compo/Promotions";

const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <HomeTests></HomeTests>
            </section>
            <section>
                <Promotions></Promotions>
            </section>
            <section>
                <Personalized></Personalized>
            </section>
        </>
    );
};

export default Home;