import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ImageCarousel() {
    return(
        <div className={'carouselWrapper'}
             style={{
                 display: 'inline-block',
                 width: '500px',
                 marginTop: '-37rem',
                 marginLeft: '81rem'}}>
        <Carousel showIndicators={false} infiniteLoop>
            <img src={"https://i.imgur.com/xQ8Lbeg.png"} alt={"first example"} />
            <img src={"https://i.imgur.com/3i7sfx2.png"} alt={"second example"} />
            <img src={"https://i.imgur.com/xhfHi86.png"} alt={"third example"} />
    </Carousel>
        </div>
    );
}