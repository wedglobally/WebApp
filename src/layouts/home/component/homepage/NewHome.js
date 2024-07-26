import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import WedGloballyHeader from '../header/Header';
import WedGloballyFooter from '../footer/Footer';
import { Slider } from '@mui/material';
import SwipeableTextMobileStepper from '../corousel';
import BaseLayout from 'layouts/virtual-reality/components/BaseLayout';
import SoftBox from 'components/SoftBox';
import HeroSection from '../hero_section/HeroSection';
import WedGloballyHeroSection from '../hero_section/HeroSection';
import WedGloballyIndex from '../section/Index';
import WedgloballyFutureSection from '../feature-section/Index';
import WedgloballyPeopleSection from '../people-section/Index';
import backgroundImage from "../../../../assets/websiteasset/img/wedding-bg.png";

import corousel1 from "../../../../assets/websiteasset/img/carousel-1.jpg";
import corousel2 from "../../../../assets/websiteasset/img/carousel-2.jpg";
import corousel3 from "../../../../assets/websiteasset/img/carousel-3.png";



const menuItems = [
  { label: 'Home', href: '/wedglobally', className: 'active' },
  { label: 'Our Products', href: '/wedglobally', className: 'active' },
  { label: 'Timeline', href: '#weddingTimeline' },
  { label: 'Gallery', href: '#weddingGallery' },
  {
    label: 'About Us',
    subMenu: [
      { label: 'Vision & Purpose', href: '/wedglobally/about/vision-purpose' },
      { label: 'Key Journey', href: '/wedglobally/about/key-journey' },
      { label: 'Key People', href: '/wedglobally/about/key-people' },
      { label: 'Board of Directors', href: '/wedglobally/about/board-of-directors' },
      { label: 'Investors', href: '/wedglobally/about/investors' },
      { label: 'About Us', href: '/wedglobally/about' },
    ],
  },
  { label: 'Contact Us', href: '/wedglobally/contactus' }
];
const NewHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    
      const images = [
        // "https://via.placeholder.com/800x400?text=Slide+1",
        // "https://via.placeholder.com/800x400?text=Slide+2",
        // "https://via.placeholder.com/800x400?text=Slide+3",
        corousel1,
        corousel2,
        corousel3

      ];
    

    return (
        <SoftBox>
        {/* <DashboardNavbar/> */}
        <WedGloballyHeader/>
        {/* <WedGloballyMenu/> */}
        {/* <Footer/> */}
       
        <SoftBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
                p: 2,
                backgroundImage: `url(${corousel1})`,
                backgroundSize: 'cover', // Adjusts the image to cover the entire box
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
              }}
            >
      {/* <SwipeableTextMobileStepper /> */}
    </SoftBox>

      {/* <WedGloballyHeroSection /> */}
      <WedgloballyFutureSection/>
      <WedGloballyIndex />
      <WedgloballyPeopleSection/>
      <WedGloballyFooter/>
      </SoftBox>
    );
  };
  
  export default NewHome;