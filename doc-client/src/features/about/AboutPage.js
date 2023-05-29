import React from 'react';
import doctor from "../Images/doctor.png";
import "./about.css";

const AboutPage = () => {
    return (
        <section className='parent'>
            <div className="about my-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-5 d-none d-md-block">
                            <img src={doctor} alt="" />
                        </div>
                        <div className=" para col-md-7 text-white py-5">
                            <h3 className="brand-color text-uppercase">AppointMent</h3>
                            <h1 className="">Make An AppointMent <br /> today </h1>
                            <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its </p>
                            <button className="btn btn-primary">Learn More </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default AboutPage;
