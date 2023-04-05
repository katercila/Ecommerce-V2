import React from "react";
import "../styling/Home.css";


function Home() {
  return (
    <main>
      <div className="intro">
        <h1>Recordable</h1>
        <p>Katerin Ercila Fernandez</p>
        {/* <button>Learn More</button> */}
      </div>
     <div className="MainPic">
      <img src="Images/vinyl.png" alt=""></img>
      </div>
      <div className="achievements">
        <div className="work">
          <i className="fas fa-atom"></i>
          <p className="work-heading">Quality</p>
          <p className="work-text">Quality products guaranteed. We focus on delivering the best materials to our buyers.</p>
        </div>
        <div className="work">
          <i className="fas fa-skiing"></i>
          <p className="work-heading">Lower Carbon Emission</p>
          <p className="work-text">Each product is packaged in a reasonable size, which can reduce the carbon emissions generated during the transportation of the product.</p>
        </div>
        <div className="work">
          <i className="fas fa-ethernet"></i>
          <p className="work-heading">Equality</p>
          <p className="work-text">Here at Recorable we work as one. We treat everyone as if they are the CEO of the company. </p>
        </div>
      </div>
      <div className="about-me">
        <video width="800px" autoPlay loop>
          <source src="Images/record2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
}

export default Home;


