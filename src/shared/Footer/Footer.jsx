
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2 text-white">
                <div className="bg-[#1F2937] p-20 flex justify-end">
                    <div>
                        <h2 className="uppercase text-3xl font-medium mb-5">contact us</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>

                </div>
                <div className="bg-[#111827] px-28 py-20 ">
                    <div className='w-3/4 flex  flex-col justify-center items-center' >
                        <h2 className="text-3xl mb-5">
                            Follow Us
                        </h2>
                        <p className='mb-1'>Join us on social media</p>
                        <div className='flex gap-5'>
                            <BsFacebook className='text-2xl'></BsFacebook>
                            <AiOutlineInstagram className='text-2xl'></AiOutlineInstagram>
                            <BsTwitter className='text-2xl'></BsTwitter>
                        </div>
                    </div>
                </div>
                
            </div>
            <p className='bg-[#151515] py-1 text-white text-center'>Copyright © CulinaryCloud. All rights reserved</p>
            <div>

            </div>
        </div>
    );
};

export default Footer;