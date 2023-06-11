import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";

const Cardiologists = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5} mt={2}>
          <Grid item xs={12} md={6} mt={5}>
            <Card
              sx={{
                maxWidth: 400,
                height: 300,
                m: "0  auto",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <CardMedia
                sx={{ width: 400, height: 300 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53esCvV7ef0PiOass5NMJvH4mKd6liWAXQA&usqp=CAU"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                "& > :not(style)": {
                  width: "100%",
                  maxWidth: 700,
                  p: 5,
                },
              }}
            >
              <Typography variant="h3" sx={{ color: "#3d565d", fontSize: 40 }}>
                Cardiologist
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "#c3d9e0",
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  borderRadius: 2,
                  color: "#364343",
                }}
              >
                A cardiologist is a physician who's an expert in the care of
                your heart and blood vessels. They can treat or help you prevent
                a number of cardiovascular problems.A cardiologist is a
                healthcare provider who can treat chest pain, high blood
                pressure and heart failure, as well as problems with your heart
                valves, blood vessels and other heart and vascular issues. They
                can order tests like electrocardiograms, echocardiograms and CTs
                (computed tomography) to find out what’s wrong. With their
                diagnosis, they can order medicine, help you start healthier
                exercise and eating habits or do cardiac catheterization.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cardiologists;
