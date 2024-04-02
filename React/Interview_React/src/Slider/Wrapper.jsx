import React, { useEffect, useState } from "react";
import Button from "./Button";

const Wrapper = () => {
  const images = [
    {
      img_link:
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      img_link:
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      img_link:
        "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      img_link:
        "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  const [item, setItem] = useState(0);
  function handlePrev() {
    item !== 0 ? setItem(item - 1) : setItem(images.length - 1);
  }
  {
    /*
     NOTE:  after every 5 seconds it changes thee images
     * */
  }
  useEffect(() => {
    const Time = setTimeout(() => {
      item === images.length - 1 ? setItem(0) : setItem(item + 1);
    }, 5000);
    return () => {
      clearTimeout(Time);
    };
  }, [item]);
  function handleNext() {
    item === images.length - 1 ? setItem(0) : setItem(item + 1);
  }
  return (
    <div className=" h-96 mt-10 flex items-center  justify-center ">
      <Button onClick={handlePrev}>Prev</Button>
      {/* <img className="" src={images[item].img_link} alt="sliderImages" /> */}
      {/*
NOTE:
        Optimization:
        first load all the images and based on the index we show and hide the required
*/}
      {images.map((x, i) => {
        return (
          <img
            className={`w-[700px] h-[500px] object-contain  ${i === item ? "block" : "hidden"}`}
            key={x.img_link}
            src={x.img_link}
            alt="sliderImages"
          />
        );
      })}
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Wrapper;
