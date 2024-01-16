import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import {  } from "../redux/award/action";
import { AddWebServiceAction, getAllWebServiceAction } from "../redux/manageServices/action";
import Aos from "aos";
const Services=(()=>{
    const {webService}=useSelector((state)=>state)
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
    const createWebService = async (data) => {
        await  AddWebServiceAction( data)(dispatch);
        handleOk()
        
      };
      useEffect(()=>{
        getAllWebServiceAction()(dispatch)
      },[dispatch])
      useEffect(()=>{
        Aos.init({duration:3000});
      },[])
    return(
<div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Services - SOBER CLUB</title>
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
    {/* ======= Our Services Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
      <Modal title=<h1 style={{textAlign:"center",fontSize:"20px"}}>Add new Services</h1> footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        style={{ maxWidth: "100%" }}
        onFinish={createWebService}
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
          name="details"
          label={
            <span className="text-[#030229] pl-1 text-sm font-normal">
              Description
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
        
      
        <div className="ml-8">
          <button
            type="submit"
            style={{width:"100%", border:"none",backgroundColor:"#1e4356",color:"white",padding:"4px", borderRadius:"8px",fontSize:"20px"}}    
           
          >
           {webService.isFetching?<Spin/>:"Save"}
          </button>
        </div>
      </Form>
      </Modal>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Our Services</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Our Services</li>
          </ol>
          <button
            type="submit"
            style={{width:"100px", border:"none",backgroundColor:"#1e4356",color:"white",padding:"4px", borderRadius:"8px",fontSize:"14px"}}    
           onClick={showModal}
          >
              Add new
          </button>
        </div>
      </div>
    </section>{/* End Our Services Section */}
    {/* ======= Services Section ======= */}
    <section className="services">
      <div className="container" data-aos="fade-up">
        <h4>Meet Social SOBER CLUB TEAM Members</h4>
        <div className="row">
            {/* {webService?.all?.data?.data.map((el)=>(
                 <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
                 <div className="icon-box icon-box-blue">
                   <div className="icon"><i className="bx bxl-dribbble" /></div>
                   <h4 className="title"><a href>{el?.title}</a></h4>
                   <p className="description">{el?.details}</p>
                 </div>
               </div>
            ))} */}
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
            <div className="icon-box icon-box-pink">
              <div className="icon"><i className="bx bxl-dribbble" /></div>
              <h4 className="title"><a href>Managing Director: Dr. Gamariel MBONIMANA</a></h4>
              <p className="description">Former MP who resigned in Parliament because of alcohol</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" >
            <div className="icon-box icon-box-cyan">
              <div className="icon"><i className="bx bx-file" /></div>
              <h4 className="title"><a href>The two pastors who baptized him (Dr. Gamariel,Founder of Sober Club) at the
                  age of 13.</a></h4>
              <p className="description">Spiritual mentors contributing guidance and support.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  >
            <div className="icon-box icon-box-green">
              <div className="icon"><i className="bx bx-tachometer" /></div>
              <h4 className="title"><a href>The two secondary students with whom he was chased together because of praying
                  at the age of 17.</a></h4>
              <p className="description">Peers providing understanding and shared struggles.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>The two persons who allured him to test and enjoy alcohol at the age of 26.</a></h4>
              <p className="description">Individuals who highlight the challenges of temptation.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  >
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>The barman where he tested alcohol for the first time at the age of 26.</a></h4>
              <p className="description">A unique perspective from someone involved in the alcohol industry.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  >
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>The two Pastors from EPR where he currently prays.</a></h4>
              <p className="description">Advocate for change in a public or professional setting.Advocate for change in a public or professional setting.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" >
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>The barwoman where he drank alcohol for the last time.</a></h4>
              <p className="description">Symbol of closure and moving forward.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  data-aos="fade-up">
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Two clinical psychologists who practice guidance and counseling.</a></h4>
              <p className="description">Professional mental health support for a holistic recovery.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch"  data-aos="fade-up">
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Two Medical Doctors</a></h4>
              <p className="description">These explain to the public the side effects of alcohol on health.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world" /></div>
              <h4 className="title"><a href>Two Singers</a></h4>
              <p className="description">Professional Singers who entertain the participants</p>
            </div>
          </div>
          <h3 className="title"><a href>Local and international celebrities from around the world</a></h3>
          <p className="description" data-aos="fade-up">These individuals not only act as Fans, Friends, Sponsors, and Partners for Social Sober Club events but also serve as inspiring figures who support soberness and sobriety as a healthier way of living . Their participation highlights the global impact of "Keeping Sober" and reinforces the message of strength, resilience, and a thriving sober lifestyle. So far Sober Club is represented in East Africa, South Africa,
            West Africa, North Africa, Europe, Middle East, Asia, USA and Canada. 
            These members assist Sober Club to achieve activities related to  <b> Fostering Collective Transformation, Guidance and Inspiration, Support and Encouragement, Educational Advocacy, Media Amplification, Community Well-being and Financial Support.</b></p>
        </div>
      </div>
    </section>
    <section className="service-details">
      <div className="container">
        <h5 className="card-title"><a href="#">Our Vision</a></h5>
        <p className="description" data-aos="fade-up">Sober Club envisions a healthier life, more conscious, and vibrant future for all people , and we
          invite you to be part of this transformative journey.</p>
        <div className="row" >
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/11.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Education Initiatives</a></h5>
                <p className="card-text">Develop and implement projects aligned with the Department of Students,
                  promoting a distinctive culture of community development through innovative
                  educational programs.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/13.png" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Leveraging ICT for Empowerment</a></h5>
                <p className="card-text">Initiate and leverage Information and Communication Technology (ICT) to
                  empower individuals, fostering a unique sense of community well-being through
                  innovative digital initiatives.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/14.png" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Promoting Sustainable Agriculture Practices</a></h5>
                <p className="card-text">Undertake projects that promote sustainable agricultural practices, contributing to
                  both environmental consciousness and community development in a distinctive
                  way.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/service-details-4.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Financial Literacy and Responsible Banking Initiatives</a></h5>
                <p className="card-text">Implement initiatives related to financial literacy and responsible banking,
                  cultivating a unique atmosphere of financial responsibility within the community.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/15.jpg" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Addressing Substance Abuse and Rehabilitation</a></h5>
                <p className="card-text">IDevelop and execute projects aimed at addressing substance abuse and supporting
                  rehabilitation efforts, emphasizing a unique and comprehensive approach to
                  recovery.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div className="card">
              <div className="card-img">
                <img src="assets/img/16.png" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="#">Health and Well-being Initiatives</a></h5>
                <p className="card-text">Launch initiatives that promote overall health and well-being, offering a
                  distinctive perspective on community health programs.</p>
                <div className="read-more"><a href="#"><i className="bi bi-arrow-right" /> Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer"  data-aos="fade-up">
    {/* <div class="footer-newsletter">
<div class="container">
  <div class="row">
    <div class="col-lg-6">
      <h4>Our Newsletter</h4>
      <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
    </div>
    <div class="col-lg-6">
      <form action="" method="post">
        <input type="email" name="email"><input type="submit" value="Subscribe">
      </form>
    </div>
  </div>
</div>
    </div> */}
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
    export default Services;
