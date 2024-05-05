import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc: "Plan your adventures with precision using our Calculate Weather feature. Stay ahead of the elements by accessing real-time weather forecasts for your destination. Whether you're packing for a sunny beach getaway or gearing up for a mountain trek, our accurate weather data ensures you're prepared for whatever nature throws your way. "
    },
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc: "Experience seamless exploration with Wondersound's Best Tour Guide. Immerse yourself in rich narratives and insider insights curated by local experts. From historical landmarks to hidden gems, our audio guides offer an unparalleled journey through every destination. Navigate with ease as our guides lead you to the heart of each locale."
    },
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc: "Tailor your travel experience to your preferences with Wondersound's Customization feature. Personalize your audio guides by selecting topics of interest, preferred languages, and audio preferences. Whether you're a history buff, food enthusiast, or nature lover, customize your journey to suit your passions. creating your ideal travel itinerary has never been easier."
    },
]

const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => (
                <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList
