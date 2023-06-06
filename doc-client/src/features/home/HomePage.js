import React from "react";
import "./homepage.css";
// import { Container } from "@mui/material";
import Input from "@mui/material/Input";
import Search from "@mui/icons-material/Search";
// import img from "../../../public/"
import image from "./home.jpg";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  return (
    <>
      {/* <Container > */}
      <div style={{ position: "relative" }}>
        <img
          // src="https://assets.lybrate.com/q_auto,f_auto,h_400,w_700,g_auto,c_fill/eagle/uploads/cca97c80d89ae5468547088748abbee7/48780e.jpg"
          // src="../../../public/home.jpeg"
          // src="./home.jpg"
          src={image}
          // className="img-fluid"
          className="img-thumbnail"
          style={{ width: "100%", height: 700 }}
          alt="imagedcfdf"
        />

        <div className="backgroud-text">
          View Doctors, Book an Appointment
          <br />
          <span className="backgroud-text-para">
            Find the best doctors,clinics & hospitals in the nearest to you.
          </span>
          <br />
          <Box m={3}>
            <TextField
              color="primary"
              placeholder="search"
              variant="outlined"
              size="small"
              autoFocus
            />
            <Search color="info" style={{ margin: 4, fontSize: 32 }} />
          </Box>
        </div>
      </div>
      <Container
        sx={{ marginTop: 10, marginBottom: 10, justifyContent: "center" }}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={4} sm={6}>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                height={209}
                variant="top"
                src="https://talema.com/wp-content/uploads/blog/medical-device/medical-devices-hospital.jpg"
              />
              <Card.Body>
                <Card.Title>Medical Equipments</Card.Title>
                <Card.Text>
                  Complete range of medical equipments and Laboratory services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card style={{ width: "20rem" }}>
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
            <Card style={{ width: "20rem" }}>
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
      <Divider />
    </>
  );
};

export default HomePage;
