import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/images/ava-1.jpg";
import ava3 from "../../assets/images/ava-3.jpg";

const Usersreview = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };
  return <Slider {...settings}>
    <div className="usersreview py-4 px-3">
        <p>"Immerse yourself in captivating narratives and vibrant soundscapes with these incredible audio files. They're like having a personal tour guide in your pocket, making every journey unforgettable."</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Krish Modi</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="usersreview py-4 px-3">
        <p>"Step into a world of adventure with these mesmerizing audio files. From the bustling streets of exotic markets to the tranquil serenity of hidden gems, they bring destinations to life like never before."</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Aryan Parmar</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="usersreview py-4 px-3">
        <p>"Embark on a journey of discovery with these captivating audio files. With rich storytelling and immersive soundscapes, they transport you to far-off places and leave you craving for more."</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Jainil Shah</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="usersreview py-4 px-3">
        <p>"Step into a world of adventure with these mesmerizing audio files. From the bustling streets of exotic markets to the tranquil serenity of hidden gems, they bring destinations to life like never before."</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Krish Modi</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="usersreview py-4 px-3">
        <p>"Embark on a journey of discovery with these captivating audio files. With rich storytelling and immersive soundscapes, they transport you to far-off places and leave you craving for more."</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Aryan Parmar</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="usersreview py-4 px-3">
        <p>"Step into a world of adventure with these mesmerizing audio files. From the bustling streets of exotic markets to the tranquil serenity of hidden gems, they bring destinations to life like never before."</p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Jainil Shah</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
}

export default Usersreview
