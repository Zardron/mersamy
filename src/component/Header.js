import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full object-cover">
        <img
          src="/assets/images/banner.png"
          alt=""
          className="w-full object-cover"
        />
        <div className="w-[70%] absolute bg-gray-600/10 top-0 left-14 py-4 my-4 rounded-xl pl-10">
          <div>
            <ul className="text-black flex flex-row items-center gap-x-10 uppercase font-tertiary text-[18px]">
              <Link to={"/"}>
                <li className="text-black text-[44px] cursor-pointer font-primary capitalize ">
                  Mersamy
                </li>
              </Link>

              <Link to={"/"}>
                <li className="hover:text-[#750321] cursor-pointer">home</li>
              </Link>

              <Link to={"shop"}>
                <li className="hover:text-[#750321] cursor-pointer">shop</li>
              </Link>

              <Link to={"our-studio"}>
                <li className="hover:text-[#750321] cursor-pointer">
                  our studio
                </li>
              </Link>

              <Link to={"about-us"}>
                <li className="hover:text-[#750321] cursor-pointer">
                  about us
                </li>
              </Link>

              <Link to={"instagram"}>
                <li className="hover:text-[#750321] cursor-pointer">
                  instagram
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <h2 className="w-[70%] absolute top-[30%] left-14 font-tertiary text-[26px] font-extralight text-black/50 pl-10">
          Mersamy Art offer our touches through you to be the best, make the
          place more beautiful through our unique paintings and can present
          ourselves as unique in our contemporary paintings, and we can fulfill
          your request through our long experience in the world of painting..
        </h2>
      </div>
    </>
  );
};

export default Header;
