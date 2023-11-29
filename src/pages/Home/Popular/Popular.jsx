
import SectionTitle from "../../../components/SectionTitle";
import PopularItem from "../../../shared/PopularItems/PopularItem";
import useMenu from "../../../hooks/UseMenu/Usemenu";

const Popular = () => {
    const[menu]=useMenu()
    const popularMenu = menu.filter(item=>item.category==='popular')
   
    return (
        <div className="container mx-auto mb-20">
            <SectionTitle Heading={'From our menu'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-2 gap-5">
            {
                popularMenu.map(item =><PopularItem key={item._id} item={item}></PopularItem>)
            }
            </div>
           <div className="text-center my-5"> <button className="uppercase px-5 py-2 border-b-4 border-[#1F2937] rounded-lg hover:bg-[#1F2937] hover:text-white">View full menu</button></div>
           

        </div>
    );
};

export default Popular;