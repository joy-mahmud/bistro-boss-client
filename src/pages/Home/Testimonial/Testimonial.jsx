import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mb-16">
            <SectionTitle Heading={'testimonials'} subHeading={'what our client say'}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(item => <SwiperSlide key={item._id}>

                        <div className="flex flex-col justify-center items-center gap-2 px-20 text-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            <BiSolidQuoteLeft className="text-4xl"></BiSolidQuoteLeft>
                            <p>{item.details}</p>
                            <h2 className="text-4xl text-[#BB8506]">{item.name}</h2>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonial;