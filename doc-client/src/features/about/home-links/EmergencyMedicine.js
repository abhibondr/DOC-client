import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";

const EmergencyMedicine = () => {
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbGcHOOvXl-A79cYObNZLR4Aq1-sEUBMuow&usqp=CAU"
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
                Emergency Medicine
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
                An emergency physician focuses on the immediate decision making
                and action necessary to prevent death or any further disability
                both in the pre-hospital setting by directing emergency medical
                technicians and in the emergency department. The emergency
                physician provides immediate recognition, evaluation, care,
                stabilization and disposition of a generally diversified
                population of adult and pediatric patients in response to acute
                illness and injury.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EmergencyMedicine;
