import React from "react";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Dashboard = () => {

  // Get logged-in admin
  const adminData = localStorage.getItem("admin");

  const admin = adminData
    ? JSON.parse(adminData)
    : null;


  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
      }}
    >

      {/* HEADER */}

      <Paper
        elevation={2}
        sx={{
          borderRadius: 0,
          px: 3,
          py: 2,
        }}
      >

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >

            <DashboardIcon
              sx={{
                fontSize: 35,
                color: "#1976d2",
              }}
            />

            <Typography
              variant="h5"
              fontWeight={700}
            >
              Dashboard
            </Typography>

          </Box>


          <Box>

            <Typography
              variant="body1"
              fontWeight={600}
            >
              {admin?.name || "Admin"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {admin?.role || "ADMIN"}
            </Typography>

          </Box>

        </Box>

      </Paper>


      {/* MAIN CONTENT */}

      <Box
        sx={{
          p: {
            xs: 2,
            sm: 4,
          },
        }}
      >

        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            mb: 1,
          }}
        >
          Welcome back!
        </Typography>


        <Typography
          color="text.secondary"
          sx={{
            mb: 4,
          }}
        >
          Smart Enterprise Management Platform
        </Typography>


        {/* CARDS */}

        <Grid
          container
          spacing={3}
        >

          {/* USERS */}

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >

            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
              }}
            >

              <CardContent>

                <PeopleIcon
                  sx={{
                    fontSize: 40,
                    color: "#1976d2",
                    mb: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={600}
                >
                  Users
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    mt: 1,
                  }}
                >
                  0
                </Typography>

              </CardContent>

            </Card>

          </Grid>


          {/* PRODUCTS */}

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >

            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
              }}
            >

              <CardContent>

                <InventoryIcon
                  sx={{
                    fontSize: 40,
                    color: "#2e7d32",
                    mb: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={600}
                >
                  Products
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    mt: 1,
                  }}
                >
                  0
                </Typography>

              </CardContent>

            </Card>

          </Grid>


          {/* ORDERS */}

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >

            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
              }}
            >

              <CardContent>

                <ShoppingCartIcon
                  sx={{
                    fontSize: 40,
                    color: "#ed6c02",
                    mb: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={600}
                >
                  Orders
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    mt: 1,
                  }}
                >
                  0
                </Typography>

              </CardContent>

            </Card>

          </Grid>


          {/* ADMIN */}

          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >

            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
              }}
            >

              <CardContent>

                <DashboardIcon
                  sx={{
                    fontSize: 40,
                    color: "#9c27b0",
                    mb: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  fontWeight={600}
                >
                  Admin
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    mt: 1,
                  }}
                >
                  1
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        </Grid>


        {/* SIMPLE CONTENT */}

        <Paper
          elevation={2}
          sx={{
            mt: 4,
            p: 4,
            borderRadius: 3,
          }}
        >

          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mb: 2,
            }}
          >
            Dashboard
          </Typography>

          <Typography color="text.secondary">
            Your admin dashboard is ready.
            More modules can be added here later.
          </Typography>

        </Paper>

      </Box>

    </Box>
  );
};


export default Dashboard;