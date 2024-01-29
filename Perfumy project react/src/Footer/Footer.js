import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact">
          <h3>Contact Us</h3>
          <form action="/action_page.php">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                id="contact-input"
              />
            </div>
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                placeholder="Enter your query"
                id="pwd"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <p style={{ fontSize: "small", padding: "20px", color: "grey" }}>
          The content, design, and images on this website are the property of
          Perfumy and are protected by international copyright laws. Any
          unauthorized reproduction or distribution of material from this site
          without written permission is strictly prohibited. Perfume names,
          product descriptions, and any related content are the exclusive
          property of Perfumy . Reproduction, distribution, or any unauthorized
          use of this information is strictly prohibited. For inquiries
          regarding the use or reproduction of any content on this website,
          please contact us at perfumy@gmail.com
        </p>
        <p style={{ color: "grey" }}>© 2024 Perfumy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
