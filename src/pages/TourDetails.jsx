import React, { useEffect, useRef, useState, useContext } from "react";
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'

import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from './../hooks/useFetch'
import { BASE_URL } from './../utils/config'
import { AuthContext } from './../context/AuthContext'

const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef("")
  const [tourRating, setTourRating] = useState(null)
  const { user } = useContext(AuthContext)

  //fetch from the database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    try {
      if (!user || user === null) {
        alert('Please sign in')
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }


      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message)
      }
      alert(result.message)
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour]);

  const [audioFiles, setAudioFiles] = useState([
    "demo.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
  ]);

  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US'); // Default language is English

  useEffect(() => {
    // Initialize speech synthesis
    const synth = window.speechSynthesis;
    setSpeechSynthesis(synth);
  }, []);

  const handlePlayPause = () => {
    if (!speechSynthesis) return;

    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentPosition(0);
    } else {
      const utterance = new SpeechSynthesisUtterance(desc);
      utterance.lang = selectedLanguage; // Set the language of the utterance
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentPosition(0);
      };
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return <>

    <section>
      <Container>
        {
          loading && <h4 className="text-center pt-5">Loading......</h4>
        }
        {
          error && <h4 className="text-center pt-5">{error}</h4>
        }
        {
          !loading && !error && <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">

                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i class="ri-star-line" style={{ 'color': "var(--secondary-color)" }}></i>
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
                        <div className="audio__item">
                          <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
                          <select value={selectedLanguage} onChange={handleLanguageChange}>
                            <option value="en-US">English</option>
                            <option value="es-ES">Spanish</option>
                            <option value="fr-FR">French</option>
                            <option value="de-DE">German</option>
                            <option value="it-IT">Italian</option>
                            <option value="ja-JP">Japanese</option>
                            <option value="ko-KR">Korean</option>
                            <option value="pt-PT">Portuguese</option>
                            <option value="ru-RU">Russian</option>
                            <option value="zh-CN">Chinese (Simplified)</option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* =================== tour reviews start section ===================== */}

                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required />
                      <button className="btn primary__btn text-white" type="submit">
                        submit
                      </button>
                    </div>
                  </form>

                  <ListGroup className="user__reviews">
                    {
                      reviews?.map(review => (
                        <div className="review__item" key={review.id}>
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString(
                                  "en-US", options
                                )}</p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}<i class="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
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
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        }
      </Container>
    </section>
    <Newsletter />
  </>
}

export default TourDetails;
