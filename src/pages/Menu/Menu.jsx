import { Helmet } from "react-helmet-async";
import PageCover from "../../shared/pageCover/PageCover";
import menubg from '../../assets/menu/banner3.jpg'
import Offer from "./Offer";
import useMenu from "../../hooks/UseMenu/Usemenu";
import MenuCover from "./catgorymenu/MenuCover";
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import CategoryItems from "./catgorymenu/CategoryItems";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menu] = useMenu()
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>bistro boss | Menu</title>
            </Helmet>
            <PageCover img={menubg} heading={'Our menu'}></PageCover>
            <Offer></Offer>
            {/* pizzas */}
            <MenuCover img={pizzaBg} heading={'Pizza'} desc={'Our Pizzas are the greatesrt'}></MenuCover>
            <div className="grid grid-cols-2 gap-5 my-10 container mx-auto">
                {
                    pizzas.map(item => <CategoryItems key={item._id} item={item} ></CategoryItems>)
                }
            </div>
            <div className="text-center mb-14"> <button className="uppercase px-5 py-2 border-b-4 border-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white"><Link to={'/order/pizza'}>Order your favourite food</Link></button></div>
            {/* Deserts */}
            <MenuCover img={dessertBg} heading={'dessert'} desc={'Our Desserts are the greatesrt'}></MenuCover>
            <div className="grid grid-cols-2 gap-5 my-10 container mx-auto">
                {
                    desserts.map(item => <CategoryItems key={item._id} item={item} ></CategoryItems>)
                }
            </div>
            <div className="text-center mb-14"> <button className="uppercase px-5 py-2 border-b-4 border-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white"><Link to={'/order/dessert'}>Order your favourite food</Link></button></div>

            {/* salads */}
            <MenuCover img={saladBg} heading={'salad'} desc={'Our salads are the greatesrt'}></MenuCover>
            <div className="grid grid-cols-2 gap-5 my-10 container mx-auto">
                {
                    salads.map(item => <CategoryItems key={item._id} item={item} ></CategoryItems>)
                }
            </div>
            <div className="text-center mb-14"> <button className="uppercase px-5 py-2 border-b-4 border-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white"><Link to={'/order/salad'}>Order your favourite food</Link></button></div>
            {/* soup */}

            <MenuCover img={soupBg} heading={'Soup'} desc={'Our Soups are the greatesrt'}></MenuCover>
            <div className="grid grid-cols-2 gap-5 my-10 container mx-auto">
                {
                    soups.map(item => <CategoryItems key={item._id} item={item} ></CategoryItems>)
                }
            </div>
            <div className="text-center mb-14"> <button className="uppercase px-5 py-2 border-b-4 border-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white"><Link to={'/order/soup'}>Order your favourite food</Link></button></div>
        </div>
    );
};

export default Menu;