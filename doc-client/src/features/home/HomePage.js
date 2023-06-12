import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Divider, Grid } from "@mui/material";
import Card from "react-bootstrap/Card";
import Footer from "../footer/Footer";
import "./homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="position-relative">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-flex w-100  carItem img-fluid"
              src="https://nividous.com/wp-content/uploads/2022/05/how-automation-significantly-improves-patient-scheduling-nividous-1024x446.jpg"
              alt="First slide"
            />

            <Carousel.Caption className="caption">
              <h3>View Doctors, Book an Appointment</h3>
              <p>
                Find the best doctors,clinics & hospitals in the nearest to you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-flex w-100 carItem"
              src="https://t3.ftcdn.net/jpg/02/38/73/06/240_F_238730671_D7HoHQrLIJSJk5RpfrO8SWy29UGa2ER6.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="caption">
              <h3>View Doctors, Book an Appointment</h3>
              <p>
                Find the best doctors,clinics & hospitals in the nearest to you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000} className="vid">
            <video width="100%" autoPlay className="carItem " loop>
              <source src="/images/doctor3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <Carousel.Caption className="caption">
              <h3>View Doctors, Book an Appointment</h3>
              <p>
                Find the best doctors,clinics & hospitals in the nearest to you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container sx={{ marginTop: 10, marginBottom: 10 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={4} sm={6}>
              <Card className="cardStyle">
                <Card.Img
                  height={209}
                  variant="top"
                  src="https://talema.com/wp-content/uploads/blog/medical-device/medical-devices-hospital.jpg"
                />
                <Card.Body>
                  <Card.Title>Medical Equipments</Card.Title>
                  <Card.Text>
                    Complete range of medical equipments and Laboratory
                    services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Card className="cardStyle">
                <Card.Img
                  height={209}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUhbrk_SzWd9vwEKhOD6Is_Mb5FYSqxsXkA&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Doctor at home</Card.Title>
                  <Card.Text>
                    Video Consultation and Home visits are available on demand.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>

            <Grid item xs={12} md={4} sm={6}>
              <Card className="cardStyle">
                <Card.Img
                  height={209}
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlnjvsneaKVD4wb8YvXSopE463RDDBmFhcA&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>ICU Facility</Card.Title>
                  <Card.Text>
                    With the capacity to provide ICU facilities and expert care.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
      <Divider />
    </>
  );
};

export default HomePage;
