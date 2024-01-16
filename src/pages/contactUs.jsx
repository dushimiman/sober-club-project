import Aos from "aos";
import React, { useEffect } from "react";
const ContactUs=(()=>{
  useEffect(()=>{
    Aos.init({duration:3000});
  },[])
    return(
<div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Contact - SOBER CLUB</title>
  <meta content name="description" />
  <meta content name="keywords" />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: Moderna
  * Updated: Sep 18 2023 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>SOBER CLUB</span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
              <ul>
                <li><a className="active " href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Services</a></li>
                <li><a className="active" href="/team">Our Team</a></li>
                {/* <li><a href="portfolio.html">Portfolio</a></li> */}
                <li><a href="teams">Incoming and outgoing awards</a></li>
                <li><a href="/prize">Sober Prize</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  <main id="main">
    {/* ======= Contact Section ======= */}
    <section className="breadcrumbs" data-aos="fade-up">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>
      </div>
    </section>{/* End Contact Section */}
    {/* ======= Contact Section ======= */}
    <section className="contact" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map" />
                  <h3>Our Address</h3>
                  <p>Kicukiro, Kigali City, Kagarama</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <strong>Email:</strong> soberclubrw@gmail.com<br />
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-phone-call" />
                  <h3>Call Us</h3>
                  <p>+250788872060</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Section */}
    {/* ======= Map Section ======= */}
    {/* End Map Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer"  data-aos="fade-up">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right" /> <a href="#">Other health activities</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Cultural education</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Other social education without accommodation</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#"> arts and entertainment activities</a></li>
              <li><i className="bx bx-chevron-right" /> <a href="#">Creative</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              Kagarama <br />
              Kigali city, Kicukiro<br />
              Rwanda <br /><br />
              <strong>Phone:</strong> +250788872060<br />
              <strong>Email:</strong> soberclubrw@gmail.com<br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About SOBER CLUB</h3>
            <p>The strength of the Sober Club lies in its diverse membership, each with a unique story of
              triumph over alcohol. Among the members are two pastors who, at the age of 13, baptized the
              Founder of Sober Club Dr. Gamariel Mbonimana and helped embraced a born-again lifestyle.</p>
            <div className="social-links mt-3">
              <a href="https://twitter.com/SoberClub2024" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="https://www.facebook.com/profile.php?id=61555333566358" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="https://www.linkedin.com/in/sober-club-1035602a9/" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>{/* End Footer */}
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</div>
        
)
})

export default ContactUs;