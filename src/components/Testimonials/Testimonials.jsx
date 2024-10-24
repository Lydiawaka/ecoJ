import React from 'react';
import Slider from "react-slick";
import Imag1 from '../../assets/Testi/Boy01.jpg';
import Imag2 from '../../assets/Testi/Girl01.jpg';
import Imag3 from '../../assets/Testi/Girl02.jpg';
import Imag4 from '../../assets/Testi/Girl03.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const TestimonialData = [
    {
        id: "1",
        name: "Victor",
        text: "I’ve never been one to care much about fashion, but Wakawear changed that for me. The fit is perfect, and the styles are both modern and classic. I recently wore their shirts to a casual dinner, and I received so many compliments! It’s great to finally feel confident in my clothing.",
        img: Imag1,
    },
    {
        id: "2",
        name: "Grace",
        text: "Wakawear has quickly become my go-to brand! The dresses are stunning and fit like a dream. I love how versatile they are—perfect for work and night out. Plus, the quality is amazing! I can’t wait to see what they come out with next.",
        img: Imag2,
    },
    {
        id: "3",
        name: "Jane",
        text: "I adore Wakawear! Their collection has something for every occasion. I recently bought a pair of their high-waisted pants, and they’re the most comfortable yet stylish pants I’ve ever owned. I find myself reaching for them all the time. Highly recommend!",
        img: Imag3,
        
    },
    {
        id: "4",
        name: "Betty",
        text: "I’m obsessed with Wakawear! The unique patterns and colors make their pieces stand out. I wore one of their tops to a friend’s wedding, and I felt like a million bucks. The compliments kept coming! Plus, their customer service is fantastic—very helpful and friendly.",
        img: Imag4,
    },

];

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,

                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ]
    };


  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] max-auto">
                <p data-aos= "fade-up" className="text-sm text-primary">What Our Customers are Saying</p>
                <h1 data-aos= "fade-up" className="text-3xl font-bold">Testimonials</h1>
                <p data-aos= "fade-up" className="text-xs text-gray-400">"Styled by You: Real Stories from Our Fashion Family"</p>
        </div>
        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
            <Slider {...settings}>
                {TestimonialData.map((data) => (
                 <div className="mb-6">
                    <div key= {data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                        <div>
                            <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                        </div>
                          
                        <div className="flex flex-col items-center gap-4 ">
                            <div className="space-y-3">
                               <p className="text-xs text-gray-500">{data.text}</p>
                               <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                            </div>
                            
                        </div>
                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                    </div>
                 </div>
                ))}
            </Slider>
        </div>

      </div>
    </div>
  )
}

export default Testimonials;
