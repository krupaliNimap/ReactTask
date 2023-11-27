import React, { useEffect, useState } from "react";

const Parent14 = () => {
  const arr = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  ];

  const refArray = Array.from({ length: arr.length }, () =>
    React.createRef(null)
  );

  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handlePlay = (index) => {
    setCurrentVideoIndex(index);
  };

  useEffect(() => {
    refArray.forEach((item, index) => {
      index != currentVideoIndex && item?.current?.pause();
    });
  }, [currentVideoIndex]);

  return (
    <>
      {arr.map((item, index) => {
        return (
          <video
            key={index}
            ref={refArray[index]}
            id={index}
            width="500"
            height="250"
            controls
            controlsList="nodownload"
            onPlay={() => handlePlay(index)}
          >
            <source src={item} type="video/mp4" />
          </video>
        );
      })}
    </>
  );
};

export default Parent14;
