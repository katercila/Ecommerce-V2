import React from "react";
import '../styling/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="left section">
          <h2>Get In Touch</h2>
          <div className="content">
            <p>Recordable</p>
            <p>825 Central Ave Charlotte, NC 28204 704-331-0788</p>
            <p>info@recordables.com</p>
            <div className="social">
              <a href="https://www.facebook.com">
                <img src="Images/_facebook.png" width="24px" alt="Facebook" />
              </a>
              <a href="https://www.twitter.com">
                <img src="Images/_twitter.png" width="24px" alt="Twitter" />
              </a>
              <a href="https://www.instagram.com">
                <img src="Images/_instagram.png" width="24px" alt="Instagram" />
              </a>
              <a href="https:/www.github.com">
                <img src="Images/_github.png" width="24px" alt="GitHub" />
              </a>
              <a href="https:/www.reddit.com">
                <img src="Images/_reddit.png" width="24px" alt="Reddit" />
              </a>
            </div>
          </div>
        </div>

        <div className="center section"> </div>

        <div className="right section">
          <h2>Subscribe</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email*</div>
              </div>
              <input type="email" required />
              <div className="btn">
                <button type="submit">SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



