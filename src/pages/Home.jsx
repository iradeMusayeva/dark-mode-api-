import React, { useEffect, useState } from 'react'
import "../styles/home.scss"
import clothsImg from "../assets/hero-icon.png.webp"
import { Link } from 'react-router-dom'
import clothsRight from "../assets/cloths-right.webp"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
const Home = () => {
    const theme = useSelector((state) => state.dark.theme)
    const [sliders, setSliders] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setSliders(data));
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };
    return (
        <main className={`home ${theme}`}>
            <section id='cloths-section'>
                <div className="cloths flex justify-center items-center">
                    <div className="cloths-left">
                        <div className="clot-img-around">
                            <img src={clothsImg} alt="" />
                        </div>
                        <h2>We make cloths </h2>
                        <h2>that  suit you</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, omnis labore. Lorem ipsum dolor sit.</p>
                        <Link to="/services">Our Services</Link>
                    </div>
                    <div className="cloths-right">
                        <img src={clothsRight} alt="" />
                    </div>
                </div>
            </section>


            <section id='sliders'>
                <div className="container">
                    <Slider {...settings}>
                        {sliders.map((slider) => (
                            <div className="slider" key={slider.id}>
                                <div className="slider-img">
                                    <img src={slider.image} alt="" />
                                </div>
                                <div className="slider-content">
                                    <h3 className='title'>{slider.title}</h3>
                                    <p className='description'>{slider.description}</p>
                                    <span className='price'>
                                        {slider.price} $
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

        </main >
    )
}

export default Home
