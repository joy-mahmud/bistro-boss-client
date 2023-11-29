import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) => {
       // console.log(data)
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                "content-type":'multipart/form-data'
            }
        })
        console.log(res.data)
        if(res.data.success){
            const menuItem ={
                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                recipe:data.recipe,
                image:res.data.data.display_url
            }
            console.log(menuItem.image)
            const menuResponse = await axiosSecure.post('/menu',menuItem)
            console.log(menuResponse.data)
            if(menuResponse.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You added the Item successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
    }

    return (
        <div className="mx-[150px]">
            <SectionTitle Heading={'add an item'} subHeading={"what's new"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input  {...register("name",{ required: true})} type="text" placeholder="name" className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select defaultValue="select" className="select select-bordered w-full" {...register("category",{ required: true})}>
                                <option disabled value="select">Select category</option>
                                <option value='salad'>salad</option>
                                <option value='pizza'>pizza</option>
                                <option value='soup'>soup</option>
                                <option value='dessert'>dessert</option>
                                <option value='drinks'>drinks</option>
                            </select>

                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input  {...register("price",{ required: true})} type="text" placeholder="price" className="input input-bordered w-full" />

                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe details</span>
                        </label>
                        <textarea {...register("recipe",{ required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe details"></textarea>
                        
                    </div>
                    <br />
                    <input type="file" {...register("image",{ required: true})} className="file-input w-full max-w-xs" />
                    <button className="px-3 rounded-md flex items-center py-2 text-white bg-[#B07D2F]">Add item <FaUtensils className="ml-3"></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItem;