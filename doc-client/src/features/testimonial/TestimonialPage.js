import React from "react";
import "./Testimonial.css";
import Footer from "../footer/Footer";
import Slider from "react-slick";

const TestimonialPage = () => {
  var settings = {
    dots: true,
    // arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="testimonials">
      <div style={{ margin: "30px" }}>
        <h1> Testimonials</h1>
        <h2 className="text-center fw-bold "> From Docter's Desk </h2>
        <Slider {...settings}>
          <div className="cardholder col-md-4 text-center">
            <div className="profile m-2">
              <img alt="" src="/images/docImg1.jpg" className="user" />
              <blockquote>
                Dr. Disha Kumar Jaiswal is one of the most famed Surgical
                Oncosurgeon. He has a thriving experience of 21 years & has
                performed many successful Cancer surgeries till date. Dr. Amit
                Kumar Jaiswal has done his MBBS from Lokmanya Tilak Municipal
                Medical College, Mumbai, MS from Lokmanya Tilak Municipal
                Medical College, Mumbai & DNB from National Board of
                Examinations, New Delhi.
              </blockquote>
              <h3>
                Dr. Disha Kumar Jaiswal <span>Aesthetics</span>
              </h3>
            </div>
          </div>
          <div className="cardholder col-md-4 text-center">
            <div className="profile m-2">
              <img alt="" src="/images/docImg2.jpeg" className="user" />
              <blockquote>
                Dr Y K Mishra is one of the renowned & most experienced cardiac
                surgeons in India. With an experience of over 32 years, he is
                widely recognised & has successfully performed over 14,000 open
                heart surgeries, he also has a keen interest in training,
                education &research work & has been invited as a guest lecturer
                from all around the world.
              </blockquote>
              <h3>
                Dr Y K Mishra <span>Cardiac Surgeon</span>
              </h3>
            </div>
          </div>
          <div className="cardholder col-md-4 text-center">
            <div className="profile m-2">
              <img src="/images/docImg3.jpg" className="user" alt="" />
              <blockquote>
                Dr. Vipul Nanda is one of the best Plastic & Cosmetic Surgeons
                in India. He has 19 years of experience in his field. He did his
                MBBS & MS from AIIMS and M.Ch from PGI Chandigarh. He did his
                MRCS from the UK. Dr. Nanda undertook advanced fellowships under
                world leaders in cosmetic and plastic surgery in Spain, Japan,
                U.K. & USA. He is associated with numerous hospitals in India.
              </blockquote>
              <h3>
                Dr. Vipul Nanda <span>Plastic Surgeon</span>
              </h3>
            </div>
          </div>
          <div className="cardholder col-md-4 text-center">
            <div className="profile m-2">
              <img alt="" src="/images/docimg4.jpeg" className="user" />
              <blockquote>
                Dr. Disha Kumar Jaiswal is one of the most famed Surgical
                Oncosurgeon. He has a thriving experience of 21 years & has
                performed many successful Cancer surgeries till date. Dr. Amit
                Kumar Jaiswal has done his MBBS from Lokmanya Tilak Municipal
                Medical College, Mumbai, MS from Lokmanya Tilak Municipal
                Medical College, Mumbai & DNB from National Board of
                Examinations, New Delhi.
              </blockquote>
              <h3>
                Dr. Disha Kumar Jaiswal <span>Aesthetics</span>
              </h3>
            </div>
          </div>
          <div className="cardholder col-md-4 text-center">
            <div className="profile m-2">
              <img alt="" src="/images/docImg5.webp" className="user" />
              <blockquote>
                Dr Y K Mishra is one of the renowned & most experienced cardiac
                surgeons in India. With an experience of over 32 years, he is
                widely recognised & has successfully performed over 14,000 open
                heart surgeries, & more than 500 robotic surgeries. In addition
                to his clinical work, he also has a keen interest in training,
                education &research work & has been invited as a guest lecturer
                from all around the world.
              </blockquote>
              <h3>
                Dr Y K Mishra <span>Cardiac Surgeon</span>
              </h3>
            </div>
          </div>
          <div className="cardholder col-md-4 text-center">
            <div className="profile m-2">
              <img src="/images/docImg6.webp" className="user" alt="" />
              <blockquote>
                Dr. Vipul Nanda is one of the best Plastic & Cosmetic Surgeons
                in India. He has 19 years of experience in his field. He did
                hisz MBBS & MS from AIIMS and M.Ch from PGI Chandigarh. He did
                his MRCS from the UK. Dr. Nanda undertook advanced fellowships
                under world leaders in cosmetic and plastic surgery in Spain,
                Japan, U.K. & USA. He is associated with numerous hospitals in
                India.
              </blockquote>
              <h3>
                Dr. Vipul Nanda <span>Plastic Surgeon</span>
              </h3>
            </div>
          </div>
        </Slider>
      </div>

      {/* customers review */}

      <div style={{ margin: "30px" }}>
        <h2 className="text-center fw-bold pt-4 my-5">
          What our Patient's say
        </h2>
        <Slider {...settings}>
          <div className="col-md-4 text-center">
            <div className="custPro m-2">
              <blockquote>
                “ The process was very easy and convenient. I was able to
                schedule an appointment quickly and easily, and the doctor was
                able to provide me with the care I needed. The service was very
                affordable and I would definitely recommend it to anyone looking
                for a convenient way to see a doctor.”
              </blockquote>
              <h3>
                Nikita Deshmukh <span>28,Pune</span>
              </h3>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="custPro m-2">
              <blockquote>
                Initially, I was a little skeptical of consulting a doctor
                online. But the consultation turned out to be honest and cool,
                the doctor's behavior was friendly. The best part is that I
                saved so much time and money!
              </blockquote>
              <h3>
                Ruturaj Singh <span>40, Mumbai </span>
              </h3>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="custPro m-2">
              <blockquote>
                Dr. Chakraborty is so concerned about his patient. I sincerely
                wish him the best. He always takes the time to understand the
                problem and on the basis of that he takes the decision and
                explains it very well. And if you miss out on anything, you can
                come back with more questions.
              </blockquote>
              <h3>
                Priyanka Patil <span>30, Nagpur</span>
              </h3>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="custPro m-2">
              <blockquote>
                Amazingly easy and convenient. Great service for the same price
                as a clinic visit, without the hassle of having to drive to the
                doctor's clinic. Couldn't be any happier.
              </blockquote>
              <h3>
                Shrikant Shinde <span>46, Nashik</span>
              </h3>
            </div>
          </div>
        </Slider>
      </div>

      <Footer />
    </section>
  );
};

export default TestimonialPage;
