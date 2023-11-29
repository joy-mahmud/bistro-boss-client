import img from '../../../assets/home/featured.jpg'
import './feature.css'

const FeaturedMenu = () => {
    return (
        <div className='feature-bg mb-16 '>
            <div className='content-bg px-[130px] py-[100px]'>
                <div className='flex flex-col items-center gap-2 justify-center mt-10'>
                    <p className="text-yellow-400 text-xl">---Check it out---</p>
                    <h2 className='uppercase text-4xl font-medium p-3 border-t-2 border-b-2 text-center mb-10 w-4/12 text-white'>FROM OUR MENU</h2>
                </div>
                <div className='flex justify-center items-center gap-16'>
                    <img className='h-[400px]' src={img} alt="" />
                    <div className='text-white space-y-2'>
                        <p>March 20, 2023</p>
                        <h2 className='uppercase'>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='uppercase px-5 py-2 rounded-lg border-b-4 border-white hover:bg-[#1F2937] '>Read more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeaturedMenu;