import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/UseMenu/Usemenu";
import PopularItem from "../../shared/PopularItems/PopularItem";



const Offer = () => {
    const [menu] = useMenu()
    const offerItems = menu.filter(item => item.category === 'offered')
    console.log(offerItems)
    return (
        <div className="container mx-auto">
            <SectionTitle subHeading={'Don\'t miss'} Heading={'Todays\'s offer'}></SectionTitle>
            <div className="grid grid-cols-2 gap-5">
                {offerItems.map(item => <PopularItem key={item._id} item={item}></PopularItem>)}
            </div>
            <div className="text-center my-5"> <button className="uppercase px-5 py-2 border-b-4 border-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white">Order Your favourite food</button></div>
        </div>
    );
};

export default Offer;