import dogImage1 from "../../assets/images/poker_image_1.jpg";
import dogImage2 from "../../assets/images/poker_image_2.jpeg";
import dogImage3 from "../../assets/images/poker_image_3.jpeg";
import "./Images.scss";
import { useState, useEffect } from "react";

const images = [dogImage1, dogImage2, dogImage3];

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="images">
    <div className="images__container">
      <img className="images__image images__image--half-bottom" src={images[(currentIndex + 1) % images.length]} alt="dogs playing poker" />
      <img className="images__image images__image--full" src={images[currentIndex]} alt="dogs playing poker" />
      <img className="images__image images__image--half-top" src={images[(currentIndex + images.length - 1) % images.length]} alt="dogs playing poker" />
    </div>
    </div>
  );
};

export default Images;
