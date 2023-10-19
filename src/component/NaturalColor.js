import React from "react";

const GALLERY = [
  {
    id: "1",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.16.10.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:355,cg:true",
  },

  {
    id: "3",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.15.17.jpg/:/rs=w:355,cg:true,m",
  },
  {
    id: "6",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.15.26.jpg/:/rs=w:355,cg:true,m",
  },
  {
    id: "7",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.15.55.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:355,cg:true",
  },
  {
    id: "4",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.15.45.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:355,cg:true",
  },
  {
    id: "5",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.15.37.jpg/:/rs=w:355,cg:true,m",
  },
  {
    id: "2",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.16.01.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:355,cg:true",
  },
];

const NaturalColor = () => {
  return (
    <div className="container mx-auto">
      <section class="gallery">
        {GALLERY.map((data, index) => (
          <div className="image" key={index}>
            <img src={data.src} alt="gallery-img" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default NaturalColor;
