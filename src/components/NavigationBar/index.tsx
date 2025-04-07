// src/components/NavBar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Stack } from "@mui/material";
import { useAppContext } from "../../context/appContext";

const NavBar = () => {
  const { state, dispatch } = useAppContext();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#f5f3ff",
        paddingY: 2,
        paddingX: 5,
        boxShadow: "none",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* Left - Brand */}
        <Typography variant="h5" sx={{ color: "#4f46e5", fontWeight: 700 }}>
          {state.userName}
        </Typography>

        {/* Center - Menu Items */}
        <Stack direction="row" spacing={4}>
          {["Home", "About", "Destination", "Blog"].map((item) => (
            <Button
              key={item}
              sx={{
                color: item === "Home" ? "#4f46e5" : "#6b7280",
                fontWeight: item === "Home" ? 600 : 400,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>

        {/* Right - Auth Buttons */}
        <Box>
          <Button
            sx={{
              color: "#6b7280",
              textTransform: "none",
              fontSize: "16px",
              marginRight: 2,
            }}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4f46e5",
              textTransform: "none",
              fontSize: "16px",
              paddingX: 3,
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#4338ca",
              },
            }}
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
