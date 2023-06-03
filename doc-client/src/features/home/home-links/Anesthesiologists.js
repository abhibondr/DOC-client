import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";

const Anesthesiologists = () => {
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiZ_Za_fFkMiiSuGkTxnG1x_T49_P37rOTg&usqp=CAU"
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
                Anesthesiologist
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
                An anesthesiologist is trained to provide pain relief and
                maintenance, or restoration, of a stable condition during and
                immediately following an operation or an obstetric or diagnostic
                procedure. The anesthesiologist assesses the risk of the patient
                undergoing surgery and optimizes the patient's condition prior
                to, during and after surgery. Anesthesiologists diagnose and
                treat acute, long-standing and cancer pain problems; diagnose
                and treat patients with critical illnesses or severe injuries;
                direct resuscitation in the care of patients with cardiac or
                respiratory emergencies, including the need for artificial
                ventilation; and supervise post-anesthesia recovery.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Anesthesiologists;
