import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BadgeCarousel() {
    return(
        <div className={'badgeWrapper'}
             style={{
                 display: 'block',
                 width: '500px',
                 marginTop: '-33rem',
                 marginLeft: '81rem'}}>
            <Carousel showIndicators={false} infiniteLoop>
                <img src={"https://i.imgur.com/lnXHqdg.png"} alt={"first example"} />
                <img src={"https://i.imgur.com/BwZBZCp.png"} alt={"second example"} />
                <img src={"https://i.imgur.com/xm1gIl9.png"} alt={"third example"} />
            </Carousel>
        </div>
    );
}