import React from "react";

const Shop = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-row items-center justify-center">
        <h2 className="font-tertiary text-[52px] font-bold text-[#750321] pt-4 pb-2">
          - OUR SHOP -
        </h2>
      </div>
      <div className="flex flex-row gap-x-4 pt-10">
        <div className="w-[35%]">
          <img
            src="https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-01%2019.21.14.jpg/:/cr=t:0%25,l:5.68%25,w:88.63%25,h:100%25/rs=w:355,h:267,cg:true"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="w-[65%] flex flex-col gap-y-6 items-start">
          <div className="flex flex-col gap-4 font-secondary">
            <h1 className="text-left font-bold text-2xl">SERVICES</h1>
            <p className="font-thin text-gray-600/90 text-xl flex flex-row gap-x-2  text-justify">
              <p>-</p> Premium Service.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-secondary">
            <h1 className="text-left font-bold text-2xl">
              ANNOUNCE COMING EVENTS
            </h1>
            <p className="font-thin text-gray-600/90 text-xl flex flex-row gap-x-2  text-justify">
              <p>-</p> Having a big sale, on-site celebrity, or other event? Be
              sure to announce it so everybody knows and gets excited about it.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-secondary">
            <h1 className="text-left font-bold text-2xl">
              DISPLAY REAL TESTIMONIALS
            </h1>
            <p className="font-thin text-gray-600/90 text-xl flex flex-row gap-x-2  text-justify">
              <p>-</p> Are your customers raving about you on social media?
              Share their great stories to help turn potential customers into
              loyal ones.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-secondary">
            <h1 className="text-left font-bold text-2xl">
              PROMOTE CURRENT DEALS
            </h1>
            <p className="font-thin text-gray-600/90 text-xl flex flex-row gap-x-2  text-justify">
              <p>-</p>Running a holiday sale or weekly special? Definitely
              promote it here to get customers excited about getting a sweet
              deal.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-secondary">
            <h1 className="text-left font-bold text-2xl">SHARE THE BIG NEWS</h1>
            <p className="font-thin text-gray-600/90 text-xl flex flex-row gap-x-2  text-justify">
              <p>-</p>Have you opened a new location, redesigned your shop, or
              added a new product or service? Don't keep it to yourself, let
              folks know. deal.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-secondary">
            <h1 className="text-left font-bold text-2xl">DISPLAY THEIR FAQS</h1>
            <p className="font-thin text-gray-600/90 text-xl flex flex-row gap-x-2  text-justify">
              <p>-</p>Customers have questions, you have answers. Display the
              most frequently asked questions, so everybody benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
