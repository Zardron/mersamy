import React from "react";

const Video = () => {
  return (
    <div className="bg-[#750321]">
      <div className="container mx-auto py-12 mb-10">
        <div className="flex flex-row items-center justify-center">
          <h2 className="font-tertiary text-[62px] font-bold text-white pt-4 pb-2">
            - VIDEO -
          </h2>
        </div>
        <div className="grid grid-cols-2 pt-10 gap-x-4">
          <div>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/oYqubVqlza8?si=KnmDfzys52fRF_nb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-tertiary text-5xl text-white">MERSAMY</h1>
            <p className="font-tertiary text-white text-xl ">
              We always have a passion to create everything new in the art world
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-tertiary text-5xl text-white">PHOTO GALLERY</h1>
            <p className="font-tertiary text-white text-xl ">Our work</p>
          </div>
          <div>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/zUcZOGeu-rE?si=rgDCEqiQDFODWhNN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/yj2SuCL0ZEY?si=P4ertG6VlWCs8La2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-tertiary text-5xl text-white">
              CLOSE THE DEAL
            </h1>
            <p className="font-tertiary text-white text-xl ">
              We offer our touches through you to be the best
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
