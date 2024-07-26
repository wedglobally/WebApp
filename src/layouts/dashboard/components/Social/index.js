var React = require('react');
var ReactDOM = require('react-dom');
import prashanth from "assets/images/Wedglobally/prashanth.png";
import tanweer from "assets/images/Wedglobally/tanweer.png";
import kasif from "assets/images/Wedglobally/kasif.png";



import { Carousel } from 'react-bootstrap';
import CarouselItem from 'react-bootstrap/CarouselItem'


const SocialMediaProfile = () => {
    // Sample data for the person's details
    const person1 = {
        name: 'Prashanth Dantu',
        age: 31,
        location: 'Leeds, United Kingdom',
        imageUrl: prashanth
    };
    const person2 = {
        name: 'Tanweer Hassan',
        age: 31,
        location: 'Leeds, United Kingdom',
        imageUrl: tanweer
    };
    const person3 = {
        name: 'Kasif',
        age: 31,
        location: 'Leeds, United Kingdom',
        imageUrl: kasif
    };
//https://react-bootstrap.netlify.app/docs/components/carousel/#example
    return (
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={person1.imageUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>{person1.name}</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={person2.imageUrl}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>{person2.name}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={person3.imageUrl}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>{person3.name}</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
          );
        
        
      
};

export default SocialMediaProfile;