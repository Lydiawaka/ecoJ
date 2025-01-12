import React from 'react';
import footerLogo from '../../assets/Testi/footerLogo.png';
import Banner from '../../assets/Testi/banner.jpeg';
import {
   FaInstagram,
   FaFacebook,
   FaTiktok,
   FaLocationArrow
   } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },

];


const Footer = () => {
  return (
    <div style={BannerImg}
    className="text-white mb-20">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pv-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" 
              className="max-w-[150px]" />
              WakaWears</h1>
            <p>Wakawears is a vibrant fashion brand that blends style with sustainability. Discover your next favorite outfit with us!
            </p>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 
                className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"
                >Important links</h1>
                <ul className="flex flex-col gap-3">
                  {
                    FooterLinks.map((link) => (
                      <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}>
                        <span>{link.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </div>

            {/* social links */}
            <div>
              <div className="flex">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaTiktok className="text-3xl" />
                </a>
                <p>@ waka_wears</p>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>call us</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+254 778 136 430</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Copy right 2024</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer;
