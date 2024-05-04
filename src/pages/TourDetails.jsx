import React, {useRef, useState} from "react";
import '../styles/tour-details.css'
import { Container, Row, Col, From, ListGroup } from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import demo from "../assets/images/demo.mp3"
import Newsletter from "../shared/Newsletter";


const TourDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating]=useState(null)
  const tour = tourData.find(tour=> tour.id === id)

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric"};

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    // leter will call our api
  };

  const [audioFiles, setAudioFiles] = useState([
    "demo.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
  ]);

  const handlePlayPause = (index) => {
    // Implement play/pause functionality for the audio file at the given index
  };

  return <>
  
  <section>
    <Container>
      <Row>
        <Col lg = '8'>
          <div className="tour__content">
            <img src={photo} alt="" />

            <div className="tour__info">
              <h2>{title}</h2>

              <div className="d-flex align-items-center gap-5">

              <span className="tour__rating d-flex align-items-center gap-1">
                        <i class="ri-star-line" style={{'color' : "var(--secondary-color)"}}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                            "Not rated"
                        ) : (
                            <span>({reviews?.length})</span>
                        )}
              </span>

                      <span>
                      <i class="ri-map-pin-user-fill"></i> {address}
                      </span>
              </div>

            

              <div className="tour__extra-details">
                <span><i class="ri-map-pin-2-line"></i>{city}</span>
                <span><i class="ri-money-dollar-circle-line"></i>${price} /per person</span>
                <span><i class="ri-map-pin-time-line"></i>{distance} k/m</span>
                <span><i class="ri-group-line"></i>{maxGroupSize} people</span>  
              </div>

              <Row>
                <Col lg='6'>
                  <div className="tour__info">
                    <h3>Information</h3>
                    <p>{desc}</p>
                  </div>
                </Col>
                <Col lg='6'>
                  <div className="audio__section ">
                    {audioFiles.map((audio, index) => (
                      <div key={index} className="audio__item">
                        <audio controls>
                          <source src={audio} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                        <button onClick={() => handlePlayPause(index)}>Play/Pause</button>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>

            {/* =================== tour reviews start section ===================== */}

            <div className="tour__reviews mt-4">
              <h4>Reviews ({reviews?.length} reviews)</h4>

              <form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                  <span onClick={()=> setTourRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                </div>

                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required/>
                  <button className="btn primary__btn text-white" type="submit">
                    submit
                  </button>
                </div>
              </form>

              <ListGroup className="user__reviews">
                {
                  reviews?.map(review=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>Krish</h5>
                            <p>{new Date("04-01-2024").toLocaleDateString(
                              "en-US", options
                            )}</p>
                          </div>
                          <span className="d-flex align-items-center">
                            5<i class="ri-star-s-fill"></i>
                          </span>
                        </div>

                        <h6>Amazing tour</h6>
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
            </div>
          
            {/* =================== tour reviews end section ===================== */}
          </div>
        </Col>

        <Col lg='4'>
          <Booking tour={tour} avgRating={avgRating}/>
        </Col>
      </Row>
    </Container>
  </section>
  <Newsletter/>
  </>
}

export default TourDetails
