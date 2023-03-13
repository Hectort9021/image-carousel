import './Carousel.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from 'react';

export const Carousel = ({data}) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const previousSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

  return (
    <div className='carousel'>
        <BsFillArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
        {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide-hidden"} />
    })}
    <BsFillArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
    <span className='indicators'>
        {data.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
        })}
    </span>
    </div>
  )
}
