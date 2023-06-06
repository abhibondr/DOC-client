import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";

const Dermatologist = () => {
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-ms7M1IGz9MwUo1V6_MaYyVKN0KHGFqOiA&usqp=CAU"
                title="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                "& > :not(style)": {
                  width: "100%",
                  maxWidth: 600,
                  p: 5,
                },
              }}
            >
              <Typography variant="h3" sx={{ color: "#3d565d", fontSize: 40 }}>
                Dermatologist
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
                All dermatologists are medical doctors, with additional
                specialty training. Dermatologists diagnose and treat skin
                cancers, melanomas, moles and other tumors. They care for the
                mucous linings of the mouth, nose and eyes. They are trained to
                recognize how other diseases – like heart or kidney problems –
                might manifest themselves in and through a patient’s skin.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dermatologist;
