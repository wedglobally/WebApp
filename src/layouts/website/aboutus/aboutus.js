import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SoftBox from 'components/SoftBox';

import backgroundImage from "../../../../src/assets/websiteasset/img/gallery-2.jpg";
import WedGloballyHeader from 'layouts/home/component/header/Header';
import WedGloballyFooter from 'layouts/home/component/footer/Footer';

const AboutUs = () => {
  return (
    <SoftBox>
      <WedGloballyHeader/>
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
        <Box 
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            p: 4,
            maxWidth: '800px',
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Welcome to WedGlobally! Our mission is to connect people around the world through the celebration of love and marriage. With a dedicated team of professionals, we strive to provide the best services for planning and executing weddings that reflect your unique story.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Our platform offers a range of tools and resources to help you plan every aspect of your special day. From venue selection to vendor management, we have ve got you covered. Our goal is to make your wedding planning process as seamless and enjoyable as possible.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            At WedGlobally, we believe in the power of love and the importance of celebrating it. We are committed to supporting you every step of the way, ensuring that your wedding day is everything you have dreamed of and more.
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Thank you for choosing WedGlobally. We look forward to being a part of your journey.
          </Typography>
        </Box>
      </SoftBox>
      <WedGloballyFooter/>
    </SoftBox>
  );
};

export default AboutUs;
