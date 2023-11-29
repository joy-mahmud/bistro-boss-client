import SectionTitle from "../../components/SectionTitle";
import img from '../../assets/menu/salad-bg.jpg'



const ChefRecommends = () => {
    return (
        <div className="container mx-auto mb-16">
            <SectionTitle Heading={'chef recommends'} subHeading={'Should try'}></SectionTitle>
            <div className="grid grid-cols-3 gap-10 my-5">

                <div className="bg-[#F3F3F3] text-center">
                    <img src={img} alt="" />
                    <div className="px-10 py-8 space-y-2">
                        <h2 className="text-2xl text-[#151515) font-bold]">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase bg-[#E8E8E8] rounded-lg border border-b-[#BB8506] border-b-4 hover:border-b-transparent hover:bg-[#1F2937]  px-5 py-3 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>

                <div className="bg-[#F3F3F3] text-center space-y-2">
                    <img src={img} alt="" />
                    <div className="px-10 py-8 space-y-2">
                        <h2 className="text-2xl text-[#151515) font-bold]">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase bg-[#E8E8E8] rounded-lg border border-b-[#BB8506] border-b-4 hover:border-b-transparent hover:bg-[#1F2937]  px-5 py-3 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>

                <div className="bg-[#F3F3F3] text-center space-y-2 p-2">
                    <img src={img} alt="" />
                    <div className="px-10 py-8 space-y-2">
                        <h2 className="text-2xl text-[#151515) font-bold]">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase bg-[#E8E8E8] rounded-lg border border-b-[#BB8506] border-b-4 hover:border-b-transparent hover:bg-[#1F2937]  px-5 py-3 text-[#BB8506]">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;