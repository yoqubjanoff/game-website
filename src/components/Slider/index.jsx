import { useRef } from 'react';
import './style.css';
import img1 from '../../assets/images/partners1.png';
import img2 from '../../assets/images/partners2.png';
import img3 from '../../assets/images/partners3.png';
import img4 from '../../assets/images/partners4.png';
import img5 from '../../assets/images/partners5.png';
import img6 from '../../assets/images/partners5.png';

const Slider = () => {
  const sliderRef = useRef(null);

  const slides = [
    { img: img1, title: 'Veronica', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img2, title: 'IT Park', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img3, title: 'East Games', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img4, title: 'SAB Games', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img5, title: 'Amay Soft', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
    { img: img6, title: 'IT Park', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates!' },
  ];

  const handleNext = () => {
    const slidesContainer = sliderRef.current;
    slidesContainer.appendChild(slidesContainer.firstElementChild);
  };

  const handlePrev = () => {
    const slidesContainer = sliderRef.current;
    slidesContainer.prepend(slidesContainer.lastElementChild);
  };

  return (
    <div className="container-slider">
      <div className="slider" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slides`}
            style={{ '--img': `url(${slide.img})` }}
          >
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={handlePrev}></span>
        <span className="next" onClick={handleNext}></span>
      </div>
    </div>
  );
};

export default Slider;
