import React from "react";
import Image from "next/image";
import bgImage from "../../../../public/connect.jpg";

const BGImage = () => {
  return (
    <Image
      src={bgImage}
      placeholder='blur'
      fill
      sizes='100vw'
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
};

export default BGImage;
