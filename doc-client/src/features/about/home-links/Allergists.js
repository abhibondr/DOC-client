import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid, Paper, TextField } from "@mui/material";

const Allergists = () => {
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVvAEFhAgxJ-J8DZU9TBt2ZjBb3GAsFotNQ&usqp=CAU"
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
                Allergists-Immunologist
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
                An allergist-immunologist is trained in evaluation, physical and
                laboratory diagnosis, and management of disorders involving the
                immune system. Selected examples of such conditions include
                asthma, anaphylaxis, rhinitis, eczema, and adverse reactions to
                drugs, foods, and insect stings as well as immune deficiency
                diseases (both acquired and congenital), defects in host
                defense, and problems Related to autoimmune disease, organ
                transplantation, or malignancies of the immune system.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Allergists;
