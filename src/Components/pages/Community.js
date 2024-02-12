import React from "react";
import "../css/Community.css";
import mitrajyoti from "../images/mitrajyoti.jpg";
import nabet from "../images/nabet.jpg";
import ujjala from "../images/ujjala2.jpg";
import stud from "../images/blind-students.jpg";
const Community = () => {
  return (
    <>
      <div className="card-main">
        <h4>NGO's Availabe To Help Blind People </h4>
        <div className="card-sub-main">
          <div class="card">
            <img class="card-img-top" src={mitrajyoti} alt="Cardimagecap" />
            <div class="card-body">
              <h5 class="card-title">Mitra Jyoti</h5>
              <p class="card-text">
                Madhu Singhal and her non-profit Mitra Jyoti have been
                empowering visually impaired individuals with various programmes
                and material for over 26 years now.Mitra Jyoti’s famous ‘talking
                book library’ has a vast collection of around 3,800 books in
                CD/cassette formats.
              </p>
              <a href="https://www.mitrajyothi.org/" class="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={nabet} alt="Cardimagecap" />
            <div class="card-body">
              <h5 class="card-title">Nabet</h5>
              <p class="card-text">
                National Association for the Blind (Employment & Training) also
                known as Nabet is working towards providing job opportunities
                for the visually impaired with the help of a unique employment
                linked training programme in the IT sector.
              </p>
              <a
                href="https://yourstory.com/2017/10/nabet-visually-challenged-employment"
                class="btn btn-primary"
              >
                Read more
              </a>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={stud} alt="Cardimagecap" />
            <div class="card-body">
              <h5 class="card-title">Access for ALL</h5>
              <p class="card-text">
                Siddhant Shah created tactile surfaces and textures for visually
                impaired visitors, and published India and Pakistan’s first
                museum Braille publication with large fonts and tactile imagery
                to encourage partially sighted and blind audiences.
              </p>
              <a
                href="https://yourstory.com/2017/11/kahani-project-inclusion"
                class="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={ujjala} alt="Cardimagecap" />
            <div class="card-body">
              <h5 class="card-title">Ujjala</h5>
              <p class="card-text">
                Ujjala is a Delhi based NGO helping visually impaired boys
                studying at Delhi University and in NCR. It provides facilities
                and nurturing environment to help students achieve their dreams
                and strive higher. And achieve their goals and full fill their
                dreams.
              </p>
              <a
                href="https://ujjala.org/about-us/#:~:text=Ujjala%2C%20formed%20in%20pursuit%20of,visual%20disability%20be%20a%20roadblock."
                class="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
