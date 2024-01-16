import Aos from "aos";
import React, { useEffect } from "react";

const HomePage=(()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
    return(
        <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Sober Club</title>
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
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
              <h1 className="text-light"><a href="index.html"><span>Sober Club</span></a></h1>
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
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex justify-cntent-center align-items-center">
          <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval={5000}>
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Sober Club</span></h2>
                <p className="animate__animated animate__fadeInUp">Sober Club, a dedicated social enterprise deeply committed to community well-being to address
                  critical issue of substance abuse within our community, utilizing 'The Power of Keeping Sober as
                  a cornerstone resource.</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Imbaraga z'Ubushobozi</h2>
                <p className="animate__animated animate__fadeInUp">The book, available in Kinyarwanda under the title “Imbaraga
                  z’Ubushishozi,” and very soon in English under the title “ The Power of Keeping Sober” is a
                  key component in our strategy to combat alcohol and drug-related challenges.</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Isn't just a social company</h2>
                <p className="animate__animated animate__fadeInUp">The Sober Club isn't just a social company; it's a movement towards redemption, moderation,
                  and a healthier way of living. Through shared experiences, professional guidance, and a
                  collective commitment, this club stands as a beacon of hope for those seeking a life beyond the
                  influence of alcohol. Join the Sober Club and become a part of a community that celebrates
                  transformation, resilience, and the power of choosing a sober, fulfilling life.</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">SOBER CLUB, a community benefit company</h2>
                <p className="animate__animated animate__fadeInUp">SOBER CLUB, a community benefit company,located in Kicukiro District (Kigali-Rwanda),
                  with primary social objectives whose surpluses are re-invested, for that purpose, in the business
                  or in the community rather than being driven by the need to maximize profit for its shareholders
                  or owners (LAW N° 019/2023 OF 30/03/2023 AMENDING LAW N° 007/2021 OF 05/02/2021
                  GOVERNING COMPANIES IN RWANDA, Article 1:33),</p>
                <a href className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
            </a>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= Services Section ======= */}
          <section className="services">
            <div className="container">
              <h1>OUR APPROACHES</h1>
              <div className="row" data-aos="fade-up">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                  <div className="icon-box icon-box-pink">
                    <div className="icon"><i className="bx bxl-dribbble" /></div>
                    <h4 className="title"><a href>Prevention</a></h4>
                    <p className="description">Implement preventive measures to stop the onset of substance abuse within
                      the community.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  data-aos-delay={100}>
                  <div className="icon-box icon-box-cyan">
                    <div className="icon"><i className="bx bx-file" /></div>
                    <h4 className="title"><a href>Fighting</a></h4>
                    <p className="description">Actively combat existing cases of drug and alcohol abuse by providing
                      necessary support and resources.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  data-aos-delay={200}>
                  <div className="icon-box icon-box-green">
                    <div className="icon"><i className="bx bx-tachometer" /></div>
                    <h4 className="title"><a href>Addressing</a></h4>
                    <p className="description">Address the underlying causes and consequences of substance abuse,
                      offering assistance to affected individuals.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  data-aos-delay={200}>
                  <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bx-world" /></div>
                    <h4 className="title"><a href>Awareness</a></h4>
                    <p className="description">Conduct community-wide awareness programs to educate and empower
                      individuals, emphasizing the importance of a sober lifestyle.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up"  >
                  <div className="icon-box icon-box-blue">
                    <div className="icon"><i className="bx bx-world" /></div>
                    <h4 className="title"><a href>Community Engagement</a></h4>
                    <p className="description">Facilitate community engagement initiatives to encourage
                      active participation in combating substance abuse.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Services Section */}
          {/* ======= Why Us Section ======= */}
          <section className="why-us section-bg" data-aos="fade-up" date-aos-delay={200}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 video-box">
                  <img src="assets/img/1.jpeg" className="img-fluid" alt />
                  {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-fingerprint" /></div>
                    <h4 className="title"><a href>Distribution of "Imbaraga z’Ubushishozi" ("The Power of Keeping Sober"):</a></h4>
                    <p className="description">Provide community members with access to the invaluable insights offered by the book
                      in Kinyarwanda. One book costs $20.</p>
                  </div>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-gift" /></div>
                    <h4 className="title"><a href>Educational Initiatives</a></h4>
                    <p className="description">Conduct workshops, seminars, and awareness campaigns to
                      disseminate knowledge about the dangers of substance abuse and promote a healthy
                      lifestyle.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-gift" /></div>
                    <h4 className="title"><a href>Support Services</a></h4>
                    <p className="description">Establish support programs to assist individuals struggling with
                      substance abuse, offering counseling and rehabilitation services.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon"><i className="bx bx-gift" /></div>
                    <h4 className="title"><a href>Collaboration</a></h4>
                    <p className="description">Foster partnerships with local organizations, government bodies, and
                      community leaders to create a united front against substance abuse.
                       Crosscutting areas: Perform any other activities related to its core areas such as other health
                      activities, Cultural education, other social education without accommodation, creative, arts, and
                      entertainment activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Why Us Section */}
          {/* ======= Features Section ======= */}
          <section className="features">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Our Team</h2>
                <p>The strength of the Sober Club lies in its diverse membership, each with a unique story of
                  triumph over alcohol.</p>
              </div>
              <div className="row" data-aos="fade-up" >
                <div className="col-md-5">
                  <img src="assets/img/8.jpg" className="img-fluid" alt />
                </div>
                <div className="col-md-7 pt-4">
                  <h3>The Diverse Members</h3>
                  <p className="fst-italic">
                    Among the members are two pastors who, at the age of 13, baptized the
                    Founder of Sober Club Dr. Gamariel Mbonimana and helped embraced a born-again lifestyle,
                    and two secondary students who were chased together with him for their commitment to prayer
                    at the age of 17. The club also includes two individuals who were present during Mbonimana's
                    first encounter with alcohol at 26 and the Owner of the bar where he tested alcohol for the first
                    time , as well as those in Parliament where he voluntarily resigned due to the impact of alcohol
                    on his life.
                  </p>
                  <ul>
                    <li><i className="bi bi-check" /> Highlighting the personal connections that led to this transformative journey, the
                      club also welcomes two pastors from EPR (Presbyterian Church in Rwanda), where Dr.
                      Mbonimana currently finds solace in prayer.</li>
                    <li><i className="bi bi-check" /> The circle is completed with the inclusion of the
                      barwoman, the very person where Dr. Mbonimana consumed alcohol for the last time,
                      psychologists who could give advice in guidance and counseling, medical doctors as well other
                      Sober Club fans, friends, sponsors and Partners.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>{/* End Features Section */}
          <section className="features">
            <div className="container" >
              <div className="section-title">
                <h2>Enhanced Core Initiatives of Sober Club</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
              </div>
              <div className="row" data-aos="fade-up" >
                <div className="col-md-7 pt-4">
                  <h3>1. University Sober Club</h3>
                  <ul>
                    <li><i className="bi bi-check" /> The Student Sober Club will initially launch in universities, engaging students in activities that promote a culture of sobriety and community development.</li>
                    <li><i className="bi bi-check" /> Members of the university club will have unique opportunities to participate in the prestigious Academic Sober Prize competition.</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up" >
                <div className="col-md-7 pt-4">
                  <h3>2.	Secondary School Sober Club</h3>
                  <ul>
                    <li><i className="bi bi-check" />Expanding our reach, the Student Sober Club will extend its influence to secondary schools, fostering early awareness of the benefits of a sober lifestyle and community engagement</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-7 pt-4">
                  <h3>3.	Primary School Sober Club</h3>
                  <ul>
                    <li><i className="bi bi-check" />The influence of the Student Sober Club will reach primary schools, where we aim to instill foundational values of sobriety and community well-being.</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-7 pt-4">
                  <h3>	4.	Academic Sober Prize</h3>
                  <ul>
                    <li><i className="bi bi-check" />Purpose: To recognize and promote university-led initiatives cultivating a culture of sobriety and community development</li>
                    <li><i className="bi bi-check" />	Eligibility: Open to all admitted university students with projects focusing on sobriety and community development</li>
                    <li><i className="bi bi-check" />Selection Process: Rigorous evaluation by a panel of university lecturers and deans of students.</li>
                    <li><i className="bi bi-check" />Prizes: Beyond accolades, recipients receive substantial support, mentorship opportunities, networking events, and resources for project enhancement.</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-7 pt-4">
                  <h3>5.	Sober Awards</h3>
                  <ul>
                    <li><i className="bi bi-check" />	A distinguished program acknowledging individuals and organizations contributing significantly to the promotion of a sober lifestyle and community well-being.</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up" >
                <div className="col-md-7 pt-4">
                  <h3>6.	Sober Bookstore</h3>
                  <ul>
                    <li><i className="bi bi-check" />	Explore our collection of literature promoting the power of sobriety and community development, including "The Power of Keeping Sober" ("Imbaraga z'Ubishishozi") and other upcoming releases.</li>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-md-7 pt-4">
                  <h3>7.	Story Books for Primary Students</h3>
                  <ul>
                    <li><i className="bi bi-check" />	Sober Club contributes to the educational development of young minds by writing and providing storybooks for primary students, fostering values of sobriety </li>
                  </ul>
                </div>
              </div>
              <div className="row" >
                <div className="col-md-7 pt-4">
                  <h3>	8.	Annual Recognition Event</h3>
                  <ul>
                    <li><i className="bi bi-check" />	Best Student Academic Sober Prize: Recognizing outstanding achievements in promoting sobriety and community development.</li>
                    <li><i className="bi bi-check" />		Journalist Sober Award: Acknowledging journalists contributing to the promotion of a sober lifestyle.</li>
                    <li><i className="bi bi-check" />Community Sober Award: Recognizing exemplary individuals within the community who champion sobriety and community well-being</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer"  data-aos="fade-up" >
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

export default HomePage;