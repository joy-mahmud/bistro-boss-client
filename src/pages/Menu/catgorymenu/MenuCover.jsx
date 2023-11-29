import { Parallax } from "react-parallax";


const MenuCover = ({ img, heading, desc }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >

            <div className=" h-[700px] px-[200px] pt-[200px]">
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className='bg-overlay py-[140px] text-center'>
                    <h2 className='uppercase text-7xl font-bold text-white mb-4'>{heading}</h2>
                    <p className='uppercase text-white text-2xl font-medium'>{desc}</p>

                </div>
            </div>
        </Parallax>
    );
};

export default MenuCover;