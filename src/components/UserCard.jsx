import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  const [favorite, setFavorite] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(saved.some((fav) => fav.login.uuid === user.login.uuid));
  }, [user]);

  const toggleFavorite = () => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorite) {
      saved = saved.filter((fav) => fav.login.uuid !== user.login.uuid);
    } else {
      saved.push(user);
    }
    localStorage.setItem("favorites", JSON.stringify(saved));
    setFavorite(!favorite);
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Avatar
        src={user.picture.large}
        alt={user.name.first}
        sx={{ width: 64, height: 64, mr: 2 }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Link
          to={`/user/${user.login.uuid}`}
          state={{ user }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="h6">
            {user.name.first} {user.name.last}
          </Typography>
        </Link>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">
          {user.location.city}, {user.location.country}
        </Typography>
      </CardContent>
      <IconButton onClick={toggleFavorite} color="error">
        {favorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </Card>
  );
}

export default UserCard;
