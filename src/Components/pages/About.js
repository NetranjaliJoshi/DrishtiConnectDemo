import React from "react";
import { Carousel } from "react-bootstrap";
import data from "../../shared/constant/constantData";
import "../css/About.css";

const About = () => {
  return (
    <div>
      <div class="headlinediv">
        {/* <p>
          <b>We hope that "BeMyEyes" will light up lives of blind people</b>
        </p> */}
      </div>

      <div className="imagebox">
        <Carousel>
          <Carousel.Item>
            <img src={data.img3} alt="img3" className="imgSize" />
            <Carousel.Caption>
              {/* <h3 class="caption">
                <b>Let's light up the lives</b>
              </h3> */}
              <h2 class="caption">
                <b>
                  We hope that "TrackBuddy " will light up lives of blind people
                </b>
              </h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={data.img2} alt="img2" className="imgSize" />
            <Carousel.Caption>
              <h2 class="caption">
                <b>
                  We hope that "TrackBuddy" will light up lives of blind people
                </b>
              </h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={data.img4} alt="img4" className="imgSize" />
            <Carousel.Caption>
              <h2 class="caption">
                <b>
                  We hope that "TrackBuddy" will light up lives of blind people
                </b>
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div class="paradiv">
        <p>
          <b>
            Our mission is to make the world more accessible for people who are
            blind or have low vision.This platform will help blind or low vision
            individuals navigate with the assistance of volunteers. Volunteers
            will assist people through video calls.
          </b>
        </p>
      </div>
    </div>
  );
};

export default About;
