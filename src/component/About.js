import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const About = () => {
  return (
    <div className="container max-w-[1280px] mx-auto px-0 py-4">
      <div className="grid grid-cols-2 gap-x-2">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47224.040640350984!2d55.21819971534948!3d25.108728208858295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1696612484807!5m2!1sen!2sae"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <h1 className="font-tertiary text-3xl">
              BETTER YET, SEE US IN PERSON!
            </h1>
            <h2 className="font-secondary py-4">
              We love our customers, so feel free to visit during normal
              business hours.
            </h2>
          </div>
          <div>
            <button className=" flex flex-row items-center justify-center bg-primary font-secondary text-white p-4 gap-x-2">
              <BsWhatsapp /> Message us on WhatsApp
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-tertiary text-3xl">Mersamy & Arts</h1>
            <h2 className="font-secondary text-gray-500">
              Dubai - United Arab Emirates
            </h2>
            <h2 className="font-secondary text-primary">ceo@mersamy.com</h2>
          </div>
          <div>
            <button className=" flex flex-row items-center justify-center bg-primary font-secondary text-white p-4 gap-x-2">
              DROP AS A LINE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
