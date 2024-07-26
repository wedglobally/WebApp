import React from 'react'
import peopleimg from '../../../../assets/websiteasset/img/story-4.jpg'
import '../people-section/Index.css'
import { ImageList, ImageListItem, Box, Typography, Button } from '@mui/material';

export default function WedgloballyPeopleSection() {
  return (
    <>
      <Box className="people-section" sx={{ overflow: 'hidden', textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Supported by real people
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.
        </Typography>
        <Box className="section-img-wrap" sx={{ position: 'relative', margin: '20px auto', width: '80%' }}>
          <img src={peopleimg} alt="peopleimg" style={{ width: '100%', borderRadius: '10px' }} />
          <Box className="background-img" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <svg width="1544" height="379" viewBox="0 0 1544 379" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <path d="M53 222.044C53 208.407 59.9578 195.757 71.913 189.196C139.127 152.312 383.444 35 772 35C1160.56 35 1404.87 152.312 1472.09 189.196C1484.04 195.757 1491 208.407 1491 222.044V268C1491 290.091 1473.09 308 1451 308H93C70.9086 308 53 290.091 53 268V222.044Z" fill="#EEEEEE" />
              </g>
              <defs>
                <filter id="filter0_d" x="0.146282" y="0.146282" width="1543.71" height="378.707" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="18" />
                  <feGaussianBlur stdDeviation="26.4269" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.845 0 0 0 0 0.892895 0 0 0 0 0.975 0 0 0 0.5 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
          </Box>
        </Box>
      </Box>

      <Box className="cta-section" sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          WooCommerce - the most customizable eCommerce platform for building your online business.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#E0B15E', color: 'white', marginTop: '20px' }}>
          GET STARTED
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <ImageList sx={{ width: 600, height: 450 }} variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];
