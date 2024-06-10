import catImage1 from "../../assets/images/cat1.jpeg";
import catImage2 from "../../assets/images/cat2.jpeg";
import catImage3 from "../../assets/images/cat3.jpeg";
import "./Images.scss";
import { useState, useEffect } from "react";

const images = [catImage1, catImage2, catImage3];

const Images = ({ className }) => {
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
