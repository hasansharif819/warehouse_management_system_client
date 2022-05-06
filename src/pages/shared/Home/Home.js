import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../image/carousal/img1.jpg';
import img2 from '../../../image/carousal/img2.jpg';
import img3 from '../../../image/carousal/img3.jpg';
import HomeInventory from '../HomeInventory/HomeInventory';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
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
            <h2 className='bg-primary my-5 py-3'>Inventory</h2>
            <div className="mobileGrid">
                {
                    products.slice(0,6).map(product => <HomeInventory
                        key={product._id}
                        product = {product}
                    ></HomeInventory>)
                }
            </div>
        </div>
    );
};

export default Home;