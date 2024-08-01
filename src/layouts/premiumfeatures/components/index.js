import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DiamondIcon from "@mui/icons-material/Diamond";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const plans = [
    {
      title: "Basic",
      price: "$9.99/month",
      features: ["Basic Support", "Access to limited features"],
      icon: <ThumbUpIcon fontSize="large" color="primary" />,
    },
    {
      title: "Standard",
      price: "$19.99/month",
      features: ["Standard Support", "Access to more features", "Weekly updates"],
      icon: <VerifiedUserIcon fontSize="large" color="secondary" />,
    },
    {
      title: "Premium",
      price: "$49.99/month",
      features: ["Priority Support", "Access to all features", "Daily updates", "Premium resources"],
      icon: <StarIcon fontSize="large" color="warning" />,
    },
    {
      title: "Platinum",
      price: "$99.99/month",
      features: [
        "24/7 Support",
        "Access to all features",
        "Real-time updates",
        "Exclusive resources",
        "Personalized support",
      ],
      icon: <DiamondIcon fontSize="large" color="error" />,
    },
  ];

const PremiumFeatures = () => {
  return (
    <DashboardLayout>
    <SoftBox p={3}>
      <SoftTypography variant="h4" fontWeight="bold" mb={2} align="center">
        Premium Features
      </SoftTypography>
      <Grid container spacing={3}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <SoftBox display="flex" justifyContent="center" mb={2}>
                  {plan.icon}
                </SoftBox>
                <SoftTypography variant="h5" fontWeight="bold" align="center">
                  {plan.title}
                </SoftTypography>
                <SoftTypography variant="h6" color="textSecondary" align="center" mb={2}>
                  {plan.price}
                </SoftTypography>
                <SoftBox mb={2}>
                  {plan.features.map((feature, idx) => (
                    <SoftBox display="flex" alignItems="center" mb={1} key={idx}>
                      <CheckCircleIcon color="success" />
                      <SoftTypography variant="body1" ml={1}>
                        {feature}
                      </SoftTypography>
                    </SoftBox>
                  ))}
                </SoftBox>
                <SoftBox display="flex" justifyContent="center">
                  <SoftButton variant="contained" color="primary">
                    Choose {plan.title}
                  </SoftButton>
                </SoftBox>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SoftBox>
    <Footer/>
    </DashboardLayout>
  );
};

export default PremiumFeatures;
