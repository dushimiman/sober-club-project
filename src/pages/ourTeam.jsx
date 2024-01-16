import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { AddAwardAction, getAllAwardAction } from "../redux/award/action";
import Aos from "aos";
const OurTeam=(()=>{
    const {award}=useSelector((state)=>state)
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
    const createAward = async (data) => {
        await  AddAwardAction( data)(dispatch);
        handleOk()
        
      };
      useEffect(()=>{
        getAllAwardAction()(dispatch)
      },[dispatch])
      useEffect(()=>{
        Aos.init({duration:3000});
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
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1 className="text-light"><a href="index.html"><span>Sober Club</span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/service">Services</a></li>
          {/* <li><a href="portfolio.html">Portfolio</a></li> */}
          <li><a href="/teams">Incoming and outgoing awards</a></li>
          <li><a href="/prize">Sober Prize</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  <main id="main">
    {/* ======= Our Team Section ======= */}
    <section className="breadcrumbs">
      <div className="container">
      <Modal title=<h1 style={{textAlign:"center",fontSize:"24px"}}>Add new Content</h1> footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        style={{ maxWidth: "100%" }}
        onFinish={createAward}
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
              Team name
            </span>
          }
          className="w-full"
          name="owner"
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
           {award.isFetching?<Spin/>:"Save"}
          </button>
        </div>
      </Form>
      </Modal>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Our Team</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Our Team</li>
          </ol>
          <button  onClick={showModal}  style={{ width:"100px", border:"none",backgroundColor:"#1e4356",color:"white",padding:"4px", borderRadius:"5px",fontSize:"14px"}} >add new </button>
        </div>
      </div>
    </section>{/* End Our Team Section */}
    {/* ======= Team Section ======= */}
    <section className="team" >
      <div className="container">
        <div className="row" data-aos="fade-up">
        {/* {award?.all?.data?.data?.map((el)=>(
 <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
    
 <div className="member">
   <div className="member-img">
     <img src={el?.picture} className="img-fluid" alt />
     <div className="social">
       <a href><i className="bi bi-twitter" /></a>
       <a href><i className="bi bi-facebook" /></a>
       <a href><i className="bi bi-instagram" /></a>
       <a href><i className="bi bi-linkedin" /></a>
     </div>
   </div>
   <div className="member-info">
     <h4>{el?.title}</h4>
     <span>{el?.owner}</span>
     <p>{el?.details}</p>
   </div>
 </div>
</div>
            ))} */}
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
            <div className="member">
              <div className="member-img">
                <img src="assets/img/4.jpeg" className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sober Club Managing Director</h4>
                <span>Dr. MBONIMANA Gamariel , PhD</span>
                <p>Baptized the
                  Founder of Sober Club Dr. Gamariel Mbonimana and who resigned in Parliament because of alcohol</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
            <div className="member">
              <div className="member-img">
                <img src="assets/img/7.jpg" className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Goodrich Business Group </h4>
                {/* <span>Accountant</span> */}
                <p>Thank you so much Amb Dr.  Francis for having organized a such important event and for the medal and  certificate bestowed to me. Together we can do more and reach far!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
            <div className="member">
              <div className="member-img">
                <img src="assets/img/6.jpeg" className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sober Club financed and presented   the best animation awards</h4>
                {/* <span>Product Manager</span> */}
                <p>Sober Club financed and presented   the best animation awards , one of the awards  given by Rwanda International Students Film Festival.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
            <div className="member">
              <div className="member-img">
                <img src="assets/img/5.jpeg" className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                {/* <span>CTO</span> */}
                <p>Dr. Gamariel was awarded a medal and certificate of appreciation due to Sober  Club success stories .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Team Section */}
  </main>{/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" >
    <div className="footer-top" >
      <div className="container" data-aos="fade-up">
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
    export default OurTeam;
