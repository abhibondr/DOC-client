import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FeedbackService from "../../../services/feedbackService";
import { Divider, Grid } from "@mui/material";

const FeedbackCollection = () => {
  const [feedcolletion, setFeedCollection] = useState([]);

  const handleFeedCollection = async () => {
    const response = await FeedbackService.getAllUsers();
    if (response?.data?.data) setFeedCollection(response?.data?.data);
    console.log("response: ", response?.data?.data);
  };

  useEffect(() => {
    handleFeedCollection();
  }, []);

  return (
    <>
      <h3 style={{ margin: "auto", textAlign: "center" }}>Feedbacks</h3>
      <Grid container>
        {Array.isArray(feedcolletion) &&
          feedcolletion?.map((feed, id) => (
            <Grid key={feed._id} item sx={{ margin: 2 }} xs={12} sm={4} md={3}>
              <Card sx={{ minWidth: 255, maxWidth: 350, padding: 1 }}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary" gutterBottom>
                    Dr.{`${feed.doctorInfo} `}
                  </Typography>
                  <Divider />
                  <Typography variant="h6">
                    Ratings: {`${feed.rating}`}
                  </Typography>
                  <Typography variant="h5">
                    Feedback: {`${feed.text}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default FeedbackCollection;
