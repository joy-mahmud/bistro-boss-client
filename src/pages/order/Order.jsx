import PageCover from "../../shared/pageCover/PageCover";
import orderImg from '../../assets/shop/banner2.jpg'
import useMenu from "../../hooks/UseMenu/Usemenu";
import { useState } from "react";
import Ordercard from "./Ordercard";
import { useParams } from "react-router-dom";

const Order = () => {
    const items = ['salad', 'pizza', 'dessert', 'soup', 'drinks']
    const {category} = useParams()
    const initialItem = items.indexOf(category)
    const [menu] = useMenu()
    const [showItems, setShowItems] = useState(initialItem)
    const [active, setActive] = useState(initialItem)
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    const catagories = [salads, pizzas, desserts, soups, drinks]
    

    

    const handleShowItems = (idx) => {
        setShowItems(idx)
        setActive(idx)
    }

    return (
        <div>
            <PageCover img={orderImg} heading={'Order now'}></PageCover>
            <div className=" mt-14 mb-10">
                <ul className="flex gap-10 items-center justify-center text-2xl font-bold uppercase hover:cursor-pointer">
                    {/* <li>Salad</li>
                    <li>Pizza</li>
                    <li>deserts</li>
                    <li>Soup</li>
                    <li>Drinks</li> */}
                    {
                        items.map((item, idx) => {
                            return <li key={idx} className={`${active==idx?'text-[#BB8506] border-b-[5px] border-[#BB8506] pb-1':'border-b-[5px] border-transparent pb-1'}`}  onClick={() => handleShowItems(idx)}>{item}</li>
                        })
                    }

                </ul>
            </div>
            <div className="grid grid-cols-3  gap-5 container mx-auto mb-10">
                {
                    catagories[showItems].map(items =><Ordercard key={items._id} item={items}></Ordercard>)
                }
            </div>
        </div>
    );
};

export default Order;