import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Divider, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:9999/api/admin/getAllDoctors")
      .then((response) => {
        console.log("response data: ", response.data.data);
        setDoctors(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>Doctors </h3>
      <Grid container>
        {Array.isArray(doctors) &&
          doctors?.map((doctor, id) => (
            // <div key={doctor._id} style={{ margin: 30 }}>
            <Grid
              key={doctor._id}
              item
              sx={{ margin: 2 }}
              xs={12}
              sm={4}
              md={3}
            >
              <Card sx={{ minWidth: 255, maxWidth: 350, padding: 1 }}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    Dr.{`${doctor.firstName} ${doctor.lastName}`}
                  </Typography>
                  <Divider />
                  <Typography variant="h6">
                    Specialization: {`${doctor.specialization}`}
                  </Typography>
                  <Typography variant="h5">
                    Qualifications: {`${doctor.qualifications}`}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Experience:{` ${doctor.experience}`}
                  </Typography>
                  <Typography variant="body2">
                    Fees Per consultation: {`${doctor.feesPerCunsaltation}`}
                  </Typography>
                  <Typography variant="body1">
                    Mobile: {`${doctor.phone}`}
                  </Typography>
                  <Typography variant="body1">
                    Timing:{" "}
                    {`${doctor.timings.startTime}    to ${doctor.timings.endTime}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="medium"
                    variant="outlined"
                    onClick={() => navigate(`bookAppointment/${doctor._id}`)}
                  >
                    Book Appointment
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            // </div>
          ))}
      </Grid>
    </>
  );
};

export default Doctors;
