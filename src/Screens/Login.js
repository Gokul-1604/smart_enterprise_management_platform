import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";

import {
  Business,
  LockOutlined,
  Visibility,
  VisibilityOff,
  ArrowForward,
} from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!adminId.trim()) {
      setError("Please enter Admin ID.");
      return;
    }

    if (!password) {
      setError("Please enter Password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/admin"
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const admins = await response.json();

      console.log("Admin data:", admins);

      const admin = admins.find(
        (item) =>
          String(item.adminId).trim().toLowerCase() ===
            adminId.trim().toLowerCase() &&
          String(item.password) === password
      );

      if (admin) {
        console.log("Login successful");

        localStorage.setItem(
          "admin",
          JSON.stringify({
            adminId: admin.adminId,
            name: admin.name,
            role: admin.role,
          })
        );

        navigate("/dashboard");
      } else {
        setError("Invalid Admin ID or Password.");
      }
    } catch (err) {
      console.error("Login error:", err);

      setError(
        "Unable to connect to server. Please make sure Spring Boot is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        position: "relative",
        overflow: "hidden",

        backgroundColor: "#ffffff",

        px: 2,
      }}
    >

      {/* =========================================
          SOFT GLASS BACKGROUND
      ========================================= */}

      <Box
        sx={{
          position: "absolute",

          width: 420,
          height: 420,

          borderRadius: "50%",

          background:
            "rgba(0, 0, 0, 0.035)",

          filter: "blur(80px)",

          top: -220,
          left: -180,
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: 350,
          height: 350,

          borderRadius: "50%",

          background:
            "rgba(0, 0, 0, 0.025)",

          filter: "blur(70px)",

          bottom: -180,
          right: -150,
        }}
      />


      {/* =========================================
          TRANSPARENT LIQUID GLASS LOGIN BOX
      ========================================= */}

      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 430,

          position: "relative",
          zIndex: 2,

          borderRadius: "30px",

          /*
           * IMPORTANT:
           * Transparent glass
           */
          background:
            "rgba(255, 255, 255, 0.30)",

          backdropFilter:
            "blur(25px)",

          WebkitBackdropFilter:
            "blur(25px)",

          border:
            "1px solid rgba(0, 0, 0, 0.12)",

          boxShadow:
            "0 25px 60px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.8)",

          overflow: "hidden",
        }}
      >

        {/* =====================================
            GLASS SHINE
        ===================================== */}

        <Box
          sx={{
            position: "absolute",

            width: 300,
            height: 300,

            borderRadius: "50%",

            background:
              "rgba(255,255,255,0.45)",

            filter: "blur(50px)",

            top: -220,
            right: -120,

            pointerEvents: "none",
          }}
        />


        <CardContent
          sx={{
            p: {
              xs: 3,
              sm: 5,
            },

            position: "relative",
            zIndex: 2,
          }}
        >

          {/* =====================================
              LOGO
          ===================================== */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >

            <Box
              sx={{
                width: 76,
                height: 76,

                borderRadius: "22px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background:
                  "rgba(255,255,255,0.45)",

                border:
                  "1px solid rgba(0,0,0,0.10)",

                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >

              <Business
                sx={{
                  fontSize: 42,
                  color: "#111111",
                }}
              />

            </Box>

          </Box>


          {/* =====================================
              TITLE
          ===================================== */}

          <Typography
            sx={{
              color: "#111111",

              fontSize: {
                xs: "28px",
                sm: "32px",
              },

              fontWeight: 800,

              textAlign: "center",

              letterSpacing: "-0.8px",
            }}
          >
            Smart Enterprise
          </Typography>


          <Typography
            sx={{
              color: "#666666",

              textAlign: "center",

              mt: 1,

              fontSize: "14px",
            }}
          >
            Management Platform
          </Typography>


          <Typography
            sx={{
              color: "#111111",

              textAlign: "center",

              mt: 3,
              mb: 3,

              fontSize: "18px",

              fontWeight: 600,
            }}
          >
            Administrator Login
          </Typography>


          {/* =====================================
              ERROR
          ===================================== */}

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 2,

                borderRadius: "12px",

                background:
                  "rgba(255,255,255,0.65)",

                color: "#111111",

                border:
                  "1px solid rgba(0,0,0,0.10)",
              }}
            >
              {error}
            </Alert>
          )}


          {/* =====================================
              LOGIN FORM
          ===================================== */}

          <Box
            component="form"
            onSubmit={handleLogin}
          >

            {/* ADMIN ID */}

            <TextField
              fullWidth

              label="Admin ID"

              placeholder="Enter Admin ID"

              value={adminId}

              onChange={(e) =>
                setAdminId(e.target.value)
              }

              disabled={loading}

              autoComplete="username"

              sx={{
                mb: 2,

                "& .MuiInputLabel-root": {
                  color: "#555555",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000000",
                },

                "& .MuiOutlinedInput-root": {
                  color: "#111111",

                  borderRadius: "14px",

                  background:
                    "rgba(255,255,255,0.35)",

                  backdropFilter:
                    "blur(10px)",

                  "& fieldset": {
                    borderColor:
                      "rgba(0,0,0,0.18)",
                  },

                  "&:hover fieldset": {
                    borderColor:
                      "rgba(0,0,0,0.40)",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#000000",
                  },
                },

                "& input::placeholder": {
                  color: "#888888",
                  opacity: 1,
                },
              }}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{
                        color: "#555555",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />


            {/* PASSWORD */}

            <TextField
              fullWidth

              label="Password"

              placeholder="Enter Password"

              type={
                showPassword
                  ? "text"
                  : "password"
              }

              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              }

              disabled={loading}

              autoComplete="current-password"

              sx={{
                mb: 1,

                "& .MuiInputLabel-root": {
                  color: "#555555",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000000",
                },

                "& .MuiOutlinedInput-root": {
                  color: "#111111",

                  borderRadius: "14px",

                  background:
                    "rgba(255,255,255,0.35)",

                  backdropFilter:
                    "blur(10px)",

                  "& fieldset": {
                    borderColor:
                      "rgba(0,0,0,0.18)",
                  },

                  "&:hover fieldset": {
                    borderColor:
                      "rgba(0,0,0,0.40)",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#000000",
                  },
                },

                "& input::placeholder": {
                  color: "#888888",
                  opacity: 1,
                },
              }}

              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{
                        color: "#555555",
                      }}
                    />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      edge="end"
                      sx={{
                        color: "#555555",

                        "&:hover": {
                          color: "#000000",
                        },
                      }}
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />


            {/* =====================================
                BLACK LOGIN BUTTON
            ===================================== */}

            <Button
              type="submit"

              fullWidth

              disabled={loading}

              variant="contained"

              endIcon={
                !loading && (
                  <ArrowForward />
                )
              }

              sx={{
                mt: 3,

                height: 54,

                borderRadius: "14px",

                /*
                 * BLACK BUTTON
                 */
                backgroundColor: "#000000",

                color: "#ffffff",

                fontSize: "15px",

                fontWeight: 700,

                textTransform: "none",

                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.20)",

                "&:hover": {
                  backgroundColor: "#1a1a1a",

                  boxShadow:
                    "0 14px 30px rgba(0,0,0,0.25)",

                  transform:
                    "translateY(-1px)",
                },

                "&:disabled": {
                  backgroundColor: "#000000",

                  color: "#ffffff",

                  opacity: 0.7,
                },

                transition:
                  "all 0.2s ease",
              }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#ffffff",
                  }}
                />
              ) : (
                "Login"
              )}
            </Button>

          </Box>


          {/* =====================================
              FOOTER
          ===================================== */}

          <Typography
            sx={{
              mt: 4,

              textAlign: "center",

              color: "#777777",

              fontSize: "11px",
            }}
          >
            Smart Enterprise Management Platform
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;