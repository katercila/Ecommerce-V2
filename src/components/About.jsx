import React, { useEffect } from 'react';
import "../styling/About.css";

function About() {
  useEffect(() => {
    let slideIndex = 0; // initialize slideIndex variable
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (slides.length === 0) return; // if there are no slides, return early
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++; //increment slideIndex variable
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  //css-block
      dots[slideIndex-1].className += " active"; //dot on current slide
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  }, []);

  return (
    <section>
      <div className="slideshow-container">
        {/* SLIDE 1 */}
        <div className="mySlides fade">
          <img src="Images/FrankHeader.png" alt="" style={{ width: "100%" }} />
        </div>
        {/* SLIDE 2 */}
        <div className="mySlides fade">
          <img src="Images/frankgif.gif" alt="" style={{ width: "100%" }} />
        </div>
        {/* SLIDE 3 */}
        <div className="mySlides fade">
          <img src="Images/recordmain.gif" alt="" style={{ width: "100%", height: "90%" }} />
        </div>
        {/* SLIDE 4 */}
        <div className="mySlides fade">
          <img src="Images/lanagif.gif" alt="" style={{ width: "100%" }} />
        </div>
        {/* SLIDE 5 */}
        <div className="mySlides fade">
          <img src="Images/remiwolfgif.gif" alt="" style={{ width: "100%" }} />
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span>
        <span className="dot"></span>  
      </div>

      {/* ABOUT SQURES */}
      <article>
        <div className="boxes">
          <div className="box1"></div>
           <div className='Green'>
    <img src="Images/eco2.png" alt=""></img>
  </div>
          <h1>Green Material</h1>
          <p></p>
          <div className="box2"></div>
          <div className='Give'>
            <img src="Images/giving.png" alt=""></img>
          </div>
          <h1>We Give Back</h1>
        </div>

        <h3>
          <i>
            We use easy-to-handle, recyclable and reusable boxes to avoid mining and excessive waste of resources using
            valuable materials. Strictly comply with the rules limiting CWP formaldehyde emissions in the Composite Wood
            Products (CWP) regulations.
          </i>
        </h3>
      </article>
    </section>
  );
}

export default About;

