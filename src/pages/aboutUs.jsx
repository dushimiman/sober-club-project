import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from 'antd';
import { AddAboutAction, getAllAboutAction } from "../redux/about/action";
import { useDispatch } from "react-redux";
import Aos from "aos";
const AboutUs=(()=>{
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
const dispatch=useDispatch()
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const createAbout = async (data) => {
          AddAboutAction( data)(dispatch);
        
      };
      useEffect(()=>{
        getAllAboutAction()(dispatch)
      },[dispatch])
      useEffect(()=>{
        Aos.init({duration:3000});
      },[])
 
    return(
<div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>About -  SOBER CLUB,</title>
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
    {/* ======= About Us Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
      <Modal title=<h1 style={{textAlign:"center",fontSize:"24px"}}>Add new Content</h1> footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        style={{ maxWidth: "100%" }}
        onFinish={createAbout}
      >
        <Form.Item
          name="title"
          label={
            <span className="text-[#030229] pl-1 text-sm font-normal">
              Tittle
            </span>
          }
        //   initialValue={userData?.email}
          className="w-full"
        >
          <Input  className="pl-4  w-[100%] text-base" style={{height:"45px"}}/>
        </Form.Item>
        <Form.Item
          label={
            <span className="text-[#030229] pl-1 text-sm font-normal">
              Content Summary
            </span>
          }
          className="w-full"
          name="contentSummary"
          rules={[{ required: true, message: "content summary" }]}
          
          // initialValue={""}
        >
          {}
          <Input
            className="pl-4 h-[42px] w-[100%]"
            style={{height:"45px"}}
          />
        </Form.Item>
        <Form.Item
          name="details"
          label={
            <span className="text-[#030229] pl-1 text-sm font-normal">
              Content Description
            </span>
          }
          className="w-full"
        >
          <Input
            placeholder="Please enter Descriptions"
            className="pl-4 h-[42px] w-[100%] "
            style={{height:"45px"}}
          />
        </Form.Item>
        <Form.Item
          name="picture"
          label={
            <span className="text-[#030229] pl-1 text-sm font-normal">
              Image
            </span>
          }
          className="w-full"
        >
          <Input
            className="pl-4 h-[42px]  w-[100%]"
            style={{height:"45px"}}
          />
        </Form.Item>
      
        <div className="ml-8">
          <button
            type="submit"
            style={{width:"100%", border:"none",backgroundColor:"#1e4356",color:"white",padding:"4px", borderRadius:"8px",fontSize:"20px"}}    
           
          >
              Save
          </button>
        </div>
      </Form>
      </Modal>
        <div className="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
          </ol>
          <button  onClick={showModal}  style={{ width:"100px", border:"none",backgroundColor:"#1e4356",color:"white",padding:"4px", borderRadius:"5px",fontSize:"14px"}} >add new</button>
        </div>
      </div>
    </section>{/* End About Us Section */}
    {/* ======= About Section ======= */}
    <section className="about" >
      <div className="container"  data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <img src="assets/img/3.jpeg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h3>About the book “ The Power of Keeping Sober”</h3>
            <p className="fst-italic">
              This book represents a deeply personal endeavor for Dr. Gamariel Mbonimana, the Managing
              Director of Sober Club and the author of the book "The Power of Keeping Sober."
            </p>
            <ul>
              <li><i className="bi bi-check2-circle" />Struggling
                with alcoholism in the past, the journey led to my resignation from the Rwandan Parliament on
                November 13th, 2022.</li>
              <li><i className="bi bi-check2-circle" />This decision followed concerns raised by President Paul Kagame about a
                fellow parliamentarian who, enjoying parliamentary immunity, had repeatedly been involved in
                drunk driving incidents without facing legal consequences.</li>
              <li><i className="bi bi-check2-circle" /> President Kagame emphasized the principle that those in power should not misuse it to endanger
                lives. This event prompted Dr. Gamariel Mbonimana's reflection on alcohol abuse, leading to the
                cessation of drinking entirely and dedication to the cause.</li>
            </ul>
            <p>
              The Guest of Honour at the official book launch on November 12th, 2023, was Prof. Kabera
              Callixte, the Vice Chancellor of East African University Rwanda. In the accompanying photo,
              Dr. Gamariel Mbonimana is seen with panelists, including Prof. Antoine Nyagahene, a
              prominent Rwandan historian, archeologist, paleontologist, and book writer, who wrote the
              foreword after reading the book.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonials" >
      <div className="container"  >
        <div className="section-title">
          <h2>Key Features of Community Sober Clubs</h2>
        </div>
        <div className="testimonials-carousel swiper" data-aos="fade-up">
          <div className="swiper-wrapper" >
            <div className="testimonial-item swiper-slide">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
              </p><h1>Financial Independence </h1> Each Community Sober Club operates independently, managing its finances to organize activities that align with the principles of sobriety.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
              <p />
            </div>
            <div className="testimonial-item swiper-slide">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
              </p><h1>Diverse Activities </h1> Clubs have the freedom to organize a range of activities tailored to their specific community, promoting sobriety and well-being.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
              <p />
            </div>
            <div className="testimonial-item swiper-slide">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left" />
              </p><h1>Support from Sober Club </h1>As a social enterprise, Sober Club provides support to Community Sober Clubs by supplying books, equipment, and materials based on the club's needs and the availability of resources.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
              <p />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        <p className="description" data-aos="fade-up">
          This book represents a deeply personal endeavor for Dr. Gamariel Mbonimana, the Managing
          Director of Sober Club and the author of the book "The Power of Keeping Sober."
        </p>
        <div className="row" data-aos="fade-up" >
          <div className="col-md-7 pt-4">
            <h3>Get Involved</h3>
            <ul>
              <li><i className="bi bi-check" />	Participate in the Academic Sober Prize: Showcase your initiatives and contribute to a positive change in society. </li>
              <li><i className="bi bi-check" />		Attend Sober Award Ceremonies: Join us in recognizing and celebrating the champions of sobriety. </li>
              <li><i className="bi bi-check" />	o	Explore the Sober Bookstore: Discover inspiring literature that reinforces the benefits of a sober lifestyle and community well-being. </li>
            </ul>
          </div>
          <p className="description">
          </p><h3>Connect with Us: </h3> Follow our comprehensive promotional campaigns on social media, traditional media, and community outreach programs. Be part of a community that values sobriety, responsibility, and holistic well-being
          <p />
          <p className="description">
          </p><h3>Support Us: </h3> Your engagement, support, and collaboration help Sober Club make a meaningful impact on individuals and communities. Together, we can build a society that embraces sobriety and prioritizes community well-being. Welcome to Sober Club, where positive change begins.
          <p />
        </div>
        <div className="col-md-7 pt-4" data-aos="fade-up">
          <h3>Send your support at </h3>
          <ul>
            <li><i className="bi bi-check" />Sober Club Account in Bank of Kigali: 100147673188 RWF</li>
            <li><i className="bi bi-check" />	Momo Pay  *182*8*1*993899#YES  (Sober Club)</li>
            <li><i className="bi bi-check" />	Mobile Money:  0788872060 (MBONIMANA Gamariel) </li>
          </ul>
        </div>
      </div>
    </section>{/* End About Section */}
    {/* ======= Tetstimonials Section ======= */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer"  data-aos="fade-up">
    <div className="footer-top" >
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
              <a href="https://twitter.com/SoberClub1" className="twitter" target="_blank"><i className="bx bxl-twitter" /></a>
              <a href="https://www.facebook.com/profile.php?id=61555333566358" className="facebook" target="_blank"><i className="bx bxl-facebook" /></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="https://www.linkedin.com/in/sober-club-1035602a9/" className="linkedin" target="_blank"><i className="bx bxl-linkedin" /></a>
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

export default AboutUs;