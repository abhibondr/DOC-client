import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";

const HomeLink = () => {
  const cardstyle = {
    maxWidth: 400,
    height: 300,
    m: "0  auto",
    alignItems: "center",
    marginTop: 10,
  };

  return (
    <>
      <Container>
        <Grid container spacing={5} pt={3}>
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
          <Grid item xs={12} md={6} mt={5}>
            <Card sx={cardstyle}>
              <CardMedia
                sx={{ width: 400, height: 300 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiZ_Za_fFkMiiSuGkTxnG1x_T49_P37rOTg&usqp=CAU"
                title="green iguana"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={5} mt={2}>
          <Grid
            item
            xs={12}
            md={6}
            mt={5}
            className=" order-last order-md-first"
          >
            <Card sx={cardstyle}>
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
        <Grid container spacing={5} mt={2}>
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
          <Grid item xs={12} md={6} mt={5}>
            <Card sx={cardstyle}>
              <CardMedia
                sx={{ width: 400, height: 300 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-ms7M1IGz9MwUo1V6_MaYyVKN0KHGFqOiA&usqp=CAU"
                title="green iguana"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5} mt={2}>
          <Grid
            item
            xs={12}
            md={6}
            mt={5}
            className=" order-last order-md-first"
          >
            <Card sx={cardstyle}>
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
        <Grid container spacing={5} mt={2}>
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
                Neurological Surgeon
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
                A neurological surgeon provides the operative and non-operative
                management (i.e., prevention, diagnosis, evaluation, treatment,
                critical care, and rehabilitation) of disorders of the central,
                peripheral, and autonomic nervous systems, including their
                supporting structures and vascular supply; the evaluation and
                treatment of pathological processes which modify function or
                activity of the nervous system; and the operative and
                non-operative management of pain. A neurological surgeon treats
                patients with disorders of the nervous system.{" "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} mt={5}>
            <Card sx={cardstyle}>
              <CardMedia
                sx={{ width: 400, height: 300 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzkscFdp8qs9dtKNHXaOSbc_gQvfVUuqUQA&usqp=CAU"
                title="green iguana"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeLink;
