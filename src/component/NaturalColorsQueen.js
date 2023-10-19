import React from "react";

const GALLERY = [
  {
    id: "1",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-01%2019.21.14.jpg/:/rs=w:355,cg:true,m",
  },

  {
    id: "3",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/GoDaddyStudioProject%20(13-11-2022%2C%2012-14-38%20PM).png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:355,cg:true",
  },
  {
    id: "6",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/3.png/:/rs=w:355,cg:true,m",
  },
  {
    id: "7",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/2022-06-08%2010.15.08.jpg/:/rs=w:355,cg:true,m",
  },
  {
    id: "4",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/1-0001.png/:/rs=w:355,cg:true,m",
  },
  {
    id: "5",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/eb4d4770-edc1-4b4a-aac8-0b51f506d33b.JPG/:/rs=w:355,cg:true,m",
  },
  {
    id: "2",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/7.png/:/rs=w:355,cg:true,m",
  },
  {
    id: "2",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/8.png/:/rs=w:355,cg:true,m",
  },
  {
    id: "2",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/6.png/:/rs=w:355,cg:true,m",
  },
  {
    id: "2",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/4.png/:/rs=w:355,cg:true,m",
  },
];

const NaturalColorsQueen = () => {
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

export default NaturalColorsQueen;
