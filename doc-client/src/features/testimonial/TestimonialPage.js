import React from 'react';
import "./Testimonial.css"
const TestimonialPage = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h1>Testimonials</h1>
                <p className="text-center"><b>What's Our Patient Says</b></p>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="profile">
                            <img src="https://cdn.shopify.com/s/files/1/1953/0533/files/dr.two-intro.png?v=1678111041" className="user" />
                            <blockquote>Dr. Amit Kumar Jaiswal is one of the most famed Surgical Oncosurgeon.
                                He has a thriving experience of 21 years & has performed many successful Cancer surgeries till date.
                                Dr. Amit Kumar Jaiswal has done his MBBS from Lokmanya Tilak Municipal Medical College, Mumbai, MS  from Lokmanya Tilak Municipal Medical College,
                                Mumbai & DNB from  National Board of Examinations, New Delhi.
                            </blockquote>
                            <h3>Dr. Disha Kumar Jaiswal <span>Aesthetics</span></h3>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUJOvKqn9T_LvJDd9GyGJFoXhECg12vG_MSBSsiakOJSGdgs4mUENppw---7mJwhRjNg&usqp=CAU" className="user" />
                            <blockquote>Dr Y K Mishra is one of the renowned & most experienced cardiac surgeons in India.
                                With an experience of over 32 years, he is widely recognised & has successfully performed over 14,000 open heart surgeries, & more than 500 robotic surgeries.
                                In addition to his clinical work, he also has a keen interest in training, education &research work & has been invited as a guest lecturer from all around the world.
                            </blockquote>
                            <h3>Dr Y K Mishra <span>Cardiac Surgeon</span></h3>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="profile">
                            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&w=1000&q=80" className="user" />
                            <blockquote>Dr. Vipul Nanda is one of the best Plastic & Cosmetic Surgeons in India.
                                He has 19 years of experience in his field.
                                He did his MBBS & MS from AIIMS and M.Ch from PGI Chandigarh. He did his MRCS from the UK.
                                Dr. Nanda undertook advanced fellowships under world leaders in cosmetic and plastic surgery in Spain, Japan, U.K. & USA.
                                He is associated with numerous hospitals in India.
                            </blockquote>
                            <h3>Dr. Vipul Nanda <span>Plastic Surgeon</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default TestimonialPage;