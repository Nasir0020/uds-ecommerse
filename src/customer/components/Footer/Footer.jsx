import React from "react";
import { Grid, Typography, Link } from "@mui/material"; // Import Grid and Link from MUI

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              About
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Blog
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Press
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Jobs
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Partners
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solution
          </Typography>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Insights
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Support
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Guide
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              API status
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Claim
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Privacy
            </Typography>
          </div>
          <div>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Terms
            </Typography>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2025 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made by UDS
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com/" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
