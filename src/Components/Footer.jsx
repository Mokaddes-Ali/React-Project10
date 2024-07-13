import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinLine } from "react-icons/ri";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

function Footer(){
    return(
        <div className="bg-[#212121] h-56 w-screen">
            <div className="flex justify-center items-center space-x-5 pt-14">
            <a
                    href="#"
                    className="text-white hover:text-[#e65f78] transition-colors duration-300"
                >
                    <TiSocialFacebook className="p-2 h-12 w-12 rounded-full bg-[#ababab]"  />
                </a>
                <a
                    href="#"
                    className="text-white bg-none hover:text-[#e65f78] transition-colors duration-300"
                >
                   <RiLinkedinLine className="p-3 h-12 w-12 rounded-full bg-[#ababab]"  />
                </a>
                <a
                    href="#"
                    className="text-white hover:text-[#e65f78] transition-colors duration-300"
                >
                   <TiSocialPinterest className="p-2 h-12 w-12 rounded-full bg-[#ababab]"  />
                </a>
                <a
                    href="#"
                    className="text-white h-12 w-12 rounded-full hover:text-[#e65f78] transition-colors duration-300"
                >
                  <TiSocialTwitter className="p-2 h-12 w-12 rounded-full bg-[#ababab]" />
                </a>
              
            </div>
            <div className="text-center text-gray-400 mt-3">
                2024 © Kerri. Design by SRBThemes.
            </div>
        </div>
    )
}
export default Footer;





