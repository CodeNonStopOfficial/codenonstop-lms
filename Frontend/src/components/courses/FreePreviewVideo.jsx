import React from "react";
import { PopoverDescription, PopoverHeader, PopoverTitle } from "../ui/popover";

const FreePreviewVideo = () => {
    const youtubevideoUrl = false;
  return (
    <div>
      <PopoverHeader>
        <PopoverTitle>Introducation</PopoverTitle>
        <div>
          <div className="relative w-full pb-[56.25%]">
            {youtubevideoUrl ? (
              <video
                className="w-full rounded-lg"
                controls
                autoPlay={false}
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
              >
                <source src="https://yourcdn.com/video.mp4" type="video/mp4" />
              </video>
            ) : (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7IFJb-uLEaI"
                title="Course Preview"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
        <PopoverDescription>Description text here.</PopoverDescription>
      </PopoverHeader>
    </div>
  );
};

export default FreePreviewVideo;
