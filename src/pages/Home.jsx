import React, { useEffect, useState } from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Directory
      </Typography>

      <TextField
        fullWidth
        label="Search users..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {filteredUsers.map((user, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
