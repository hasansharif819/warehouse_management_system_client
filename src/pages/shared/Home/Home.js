import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../image/carousal/img1.jpg';
import img2 from '../../../image/carousal/img2.jpg';
import img3 from '../../../image/carousal/img3.jpg';

const Home = () => {
    return (
        <div>
            <h2>This is Home page</h2>
            {/* carousal  */}
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Iphone</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Samsung Smart PHone</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>One Plus</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;