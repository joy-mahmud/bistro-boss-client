import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle';
const Category = () => {
    return (
        <div className='container mx-auto'>
            
          <SectionTitle Heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-4xl text-center -mt-16 text-white  uppercase'>Salad</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-4xl text-center -mt-16 text-white uppercase'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src={slide3} alt="" />
                    <h2 className='text-4xl text-center -mt-16 text-white uppercase'>Pizza</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-4xl text-center -mt-16 text-white uppercase'>Deserts</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-4xl text-center -mt-16 uppercase text-white'>Salad</h2>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Category;