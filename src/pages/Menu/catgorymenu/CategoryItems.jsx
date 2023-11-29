

const CategoryItems = ({item}) => {
    const { name, recipe, image, price } = item
    return (
        <div className="flex">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className=" mr-3 w-[118px] h-[104px] " src={image} alt="" />
            <div>
               <div className="flex justify-between"> <h2 className=" uppercase text-[#151515] text-2xl font-medium">{name}--------</h2><p className="text-xl text-yellow-600">${price}</p></div>
                <p className="text-[#737373] text-[18px]">{recipe}</p>
            </div>
        </div>
    );
};

export default CategoryItems;