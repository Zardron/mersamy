import React from "react";

const GALLERY = [
  {
    id: "1",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9604.JPG/:/rs=w:1280,h:1599",
  },
  {
    id: "2",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9465.JPG/:/rs=w:1280,h:1599",
  },
  {
    id: "3",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0574.JPG/:/rs=w:1280,h:1280",
  },
  {
    id: "4",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9875.JPG/:/rs=w:1280,h:1280",
  },
  {
    id: "5",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0323.JPG/:/rs=w:1280,h:1280",
  },
  {
    id: "6",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9403.JPG/:/rs=w:1280,h:1599",
  },
  {
    id: "7",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9383.JPG/:/rs=w:1280,h:1600",
  },
  {
    id: "8",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9464.JPG/:/rs=w:1280,h:1280",
  },
  {
    id: "9",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9031.JPG/:/rs=w:1280,h:800",
  },
  {
    id: "10",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0253.JPG/:/rs=w:1280,h:1599",
  },
  {
    id: "11",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9270.JPG/:/rs=w:1280,h:1600",
  },
  {
    id: "12",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0594.JPG/:/rs=w:1280,h:1600",
  },
  {
    id: "13",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0562.JPG/:/rs=w:1280,h:1600",
  },
  {
    id: "14",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9883.JPG/:/rs=w:1280,h:1599",
  },
  {
    id: "15",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9026.JPG/:/rs=w:984,h:1966",
  },
  {
    id: "16",
    src: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9143.JPG/:/rs=w:984,h:1968",
  },
];

const DefaultGallery = () => {
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

export default DefaultGallery;
