import SoftBox from 'components/SoftBox';
import WedgloballyFutureSection from '../feature-section/Index';
import WedGloballyFooter from '../footer/Footer';
import WedGloballyHeader from '../header/Header';
import WedgloballyPeopleSection from '../people-section/Index';
import WedGloballyIndex from '../section/Index';

import corousel1 from "../../../../assets/websiteasset/img/carousel-1.jpg";
import corousel2 from "../../../../assets/websiteasset/img/carousel-2.jpg";
import corousel3 from "../../../../assets/websiteasset/img/carousel-3.png";




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