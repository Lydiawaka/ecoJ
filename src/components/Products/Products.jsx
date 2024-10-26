import React from 'react';
import Imag1 from '../../assets/Women/hat.jpg';
import Imag2 from '../../assets/Women/bag.jpg';
import Imag3 from '../../assets/Women/sunglass1.jpg';
import Imag4 from '../../assets/Women/saddles.jpg';
import Imag5 from '../../assets/Women/Tshirtfloral.png';
import {FaStar} from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: Imag1,
        title: "women ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Imag2,
        title: "women western",
        rating: 4.5,
        color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Imag3,
        title: "Googles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Imag4,
        title: "Saddles",
        rating: 5.0,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Imag5,
        title: "Fashion T-Shirt",
        rating: 5.0,
        color: "pink",
        aosDelay: "800",
    },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] max-auto">
                <p data-aos= "fade-up" className="text-sm text-primary">Top Selling  Products for you</p>
                <h1 data-aos= "fade-up" className="text-3xl font-bold">Products</h1>
                <p data-aos= "fade-up" className="text-xs text-gray-400">Our top-selling products feature unique designs that blend contemporary trends with timeless elegance, perfect for any occasion.</p>
            </div>
            {/* Body section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {/* Card Section */}
                    {ProductsData.map((data) => (
                        <div key={data.id} 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}                   
                        className="space-y-2">
                            <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                            <div>
                                <h3 className="font-semibold">{data.title}</h3>
                                <p className="text-sm text-gray-600">{data.color}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All Button */}
                <div>
                    <button>View All Products</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Products;
