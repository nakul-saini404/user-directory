import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
} from "@mui/material";

function UserDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = state?.user;

  if (!user) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          User not found. Please go back.
        </Typography>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ p: 2, textAlign: "center" }}>
        <Avatar
          src={user.picture.large}
          alt={user.name.first}
          sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5">
            {user.name.first} {user.name.last}
          </Typography>
          <Typography>{user.email}</Typography>
          <Typography>
            {user.location.city}, {user.location.state},{" "}
            {user.location.country}
          </Typography>
          <Typography>Phone: {user.phone}</Typography>
        </CardContent>
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
          Back
        </Button>
      </Card>
    </Container>
  );
}

export default UserDetail;
