import React from "react";
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border border-t-2 border-black/30">
      <div className="container mx-auto flex flex-col items-center justify-between py-4">
        <div className="flex flex-row items-center justify-center gap-x-4">
          <FaFacebook color={"#3478f6"} size={20} className="cursor-pointer" />
          <FaInstagram color={"#d9326f"} size={20} className="cursor-pointer" />
          <FaTiktok size={20} className="cursor-pointer" />
          <FaYoutube color={"#f40000"} size={20} className="cursor-pointer" />
        </div>
        <div>Copyright © 2023 Mersamy & Art - All Rights Reserved.</div>
        <div>Powered by GoMediaNow</div>
      </div>
    </div>
  );
};

export default Footer;
