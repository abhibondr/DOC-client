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
                            <p className="phase-1">Our vision is to create healthier families, workplaces, and communities. We work towards a single mission — to provide trusted health care for the many. From rural areas to urban cities, from the bottom of the income pyramid to employees of leading corporations, our primary health care packages can help families to live healthier, happier and more productive lives.</p>
                            <br />
                            <h3 className="brand-color ">AppointMent</h3><br />
                            <h1 >Make An AppointMent <br /> today </h1><br />
                            <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its </p><br />
                            <button className="btn btn-primary">Learn More </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default AboutPage;
