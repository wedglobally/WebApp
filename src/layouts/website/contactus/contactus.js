import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import WedGloballyFooter from 'layouts/home/component/footer/Footer';
import SoftBox from 'components/SoftBox';
import WedGloballyHeader from 'layouts/home/component/header/Header';
import backgroundImage from "../../../../src/assets/websiteasset/img/gallery-3.jpg";
import SoftTypography from 'components/SoftTypography';
import SoftInput from 'components/SoftInput';

const ContactUs = () => {
  return (
    <SoftBox>
      <WedGloballyHeader />
      <SoftBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100%',
          p: 2,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <SoftBox
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            padding: 3,
            background: 'rgba(255, 255, 255, 0.2)', // Glassy background
            backdropFilter: 'blur(10px)', // Frosted glass effect
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Shadow for better visibility
            width: '100%',
            maxWidth: '800px', // Adjust width for better responsiveness
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: '#D1A77A',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '10px',
              display: 'inline-block',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: '#FFFFFF',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              padding: '10px',
              display: 'inline-block',
            }}
          >
            We would love to hear from you. Please fill out the form below or reach out to us through our contact information.
          </Typography>

          <SoftBox
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '600px',
              gap: 2,
              background: 'rgba(255, 255, 255, 0.2)', // Glassy background
              backdropFilter: 'blur(10px)', // Frosted glass effect
              borderRadius: '8px',
              padding: 3,
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Shadow for better visibility
            }}
          >
            <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              sx={{ color: '#D1A77A' }}
            >
              Full Name
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="First Name" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              sx={{ color: '#D1A77A' }}
            >
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              sx={{ color: '#D1A77A' }}
            >
             Subject
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Subject" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              rows={4}
              sx={{ color: '#D1A77A', borderRadius: '4px' }}
            >
             Message
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Message" />
        </SoftBox>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                backgroundColor: '#D1A77A', // Background color
                color: 'white', // Text color
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#B8976A', // Darker shade on hover
                },
              }}
            >
              Send Message
            </Button>
          </SoftBox>

          <SoftBox
            sx={{
              marginTop: 4,
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.2)', // Glassy background
              backdropFilter: 'blur(10px)', // Frosted glass effect
              borderRadius: '8px',
              padding: 3,
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Shadow for better visibility
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              Alternatively, you can reach us at:
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              Email: contact@wedglobally.com
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
              Phone: +123-456-7890
            </Typography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <WedGloballyFooter />
    </SoftBox>
  );
};

export default ContactUs;
