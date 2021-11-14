import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/3.jpg'
// import banner1 from '../../../images/banner/b4 .jpg'
// import banner2 from '../../../images/banner/b5.jpg'
// import banner3 from '../../../images/banner/bg3.jpg'
const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt=""
                        
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt=""
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt=""
                    />

                    <Carousel.Caption>
                      
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
