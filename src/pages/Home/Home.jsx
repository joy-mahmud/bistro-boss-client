import { Helmet } from 'react-helmet-async';
import About from "./About/About";
import Banner from "./Banner";
import ChefRecommends from "./ChefRecommends";
import Contact from "./Contact/Contact";
import Popular from "./Popular/Popular";
import Testimonial from "./Testimonial/Testimonial";
import Category from "./category";
import FeaturedMenu from "./featuredMenu/FeaturedMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>bistro boss | home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Popular></Popular>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <FeaturedMenu></FeaturedMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;