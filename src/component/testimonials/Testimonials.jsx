import React, { useState } from "react";
import emily from "../testimonials/logos/image-emily.jpg";
import Thomas from "../testimonials/logos/image-thomas.jpg";
import Jenny from "../testimonials/logos/image-jennie.jpg";
import bottle from "../testimonials/logos/image-gallery-milkbottles.jpg";
import cone from "../testimonials/logos/image-gallery-cone.jpg";
import orange from "../testimonials/logos/image-gallery-orange.jpg";
import sugar from "../testimonials/logos/image-gallery-sugarcubes.jpg";

import "./testimonials.scss";

const Testimonials = () => {
  const mobileImg = [
    "image-gallery-orange.jpg",
    "image-gallery-cone.jpg",
    "image-gallery-milkbottles.jpg",
    "image-gallery-sugarcubes.jpg",
  ];

  const desktopImg = [
    "image-gallery-orange.jpg",
    "image-gallery-cone.jpg",
    "image-gallery-milkbottles.jpg",
    "image-gallery-sugarcubes.jpg",
  ];

  return (
    <div className="main-body">
      <div className="testimony-wrapper">
        <h3>Client Testimonials</h3>
        <div className="portfolio">
          {/* client1 */}
          <div className="clients">
            <img src={emily} alt="emily" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h4>Emily R.</h4>
            <h6>Marketing Director</h6>
          </div>

          {/* client2 */}
          <div className="clients">
            <img src={Thomas} alt="emily" />
            <p>
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <h4>Thomas S.</h4>
            <h6>Chief Operating Officer</h6>
          </div>

          {/* client3 */}
          <div className="clients">
            <img src={Jenny} alt="emily" />
            <p>
              Incredible end result! Our sales increased over 40% when we worked
              with Sunnyside. Highly recommended!
            </p>
            <h4>Jennie F.</h4>
            <h6>Business Owner</h6>
          </div>
        </div>
      </div>

      {/* Gallery display */}
      <div className="gallery">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <>
          <img src={bottle} alt="bottle" />
          <img src={orange} alt="orange" />
          <img src={cone} alt="cone" />
          <img src={sugar} alt="sugar" />
        </>
      </div>
    </div>
  );
};

export default Testimonials;
