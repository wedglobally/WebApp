import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import { Navigate, useNavigate } from 'react-router-dom';

import { Grid, Box, Typography, TextField, Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import 'animate.css/animate.min.css';
import carousel1 from "../../../../assets/websiteasset/img/carousel-1.jpg";
import carousel2 from "../../../../assets/websiteasset/img/carousel-2.jpg";
import carousel3 from "../../../../assets/websiteasset/img/carousel-3.png";
import tampbg1 from "../../../../assets/websiteasset/img/tamp-bg-1.png";
import bride from "../../../../assets/websiteasset/img/bride.jpg";

import Groom from "../../../../assets/websiteasset/img/Groom.jpg";
import Groomsmen1 from "../../../../assets/websiteasset/img/Groomsmen-1.png";
import Groomsmen2 from "../../../../assets/websiteasset/img/groomsmen-2.png";
import Groomsmen3 from "../../../../assets/websiteasset/img/Groomsmen-3.png";
import Groomsmen4 from "../../../../assets/websiteasset/img/groomsmen-4.png";

import attendancebg from "../../../../assets/websiteasset/img/attendance-bg.png";
import bgflower from "../../../../assets/websiteasset/img/bg-flower.png";
import story1 from "../../../../assets/websiteasset/img/story-1.jpg";
import story2 from "../../../../assets/websiteasset/img/story-2.jpg";
import story3 from "../../../../assets/websiteasset/img/story-3.jpg";
import story4 from "../../../../assets/websiteasset/img/story-4.jpg";

import gallery1 from "../../../../assets/websiteasset/img/gallery-1.jpg";
import gallery2 from "../../../../assets/websiteasset/img/gallery-2.jpg";
import gallery3 from "../../../../assets/websiteasset/img/gallery-3.jpg";
import gallery4 from "../../../../assets/websiteasset/img/gallery-4.jpg";
import gallery5 from "../../../../assets/websiteasset/img/gallery-5.jpg";
import gallery6 from "../../../../assets/websiteasset/img/gallery-6.jpg";
import gallery7 from "../../../../assets/websiteasset/img/gallery-7.jpg";
import gallery8 from "../../../../assets/websiteasset/img/gallery-8.jpg";


import weddingbg from "../../../../assets/websiteasset/img/wedding-bg.png";
import weddingdatebg from "../../../../assets/websiteasset/img/wedding-date-bg.jpg";
import footer from "../../../../assets/websiteasset/img/footer-bg.jpg";

import bridesmaid1 from "../../../../assets/websiteasset/img/bridesmaid-1.png";
import bridesmaid3 from "../../../../assets/websiteasset/img/bridesmaid-3.png";
import bridesmaid4 from "../../../../assets/websiteasset/img/bridesmaid-4.png";

import about1 from "../../../../assets/websiteasset/img/about-1.jpg";
import bridesmaidteam2 from "../../../../assets/websiteasset/img/bridesmaid-team-2.png";
import team1bg from "../../../../assets/websiteasset/img/team-1-bg.png";

import $ from 'jquery';


import "../../../../assets/websiteasset/css/bootstrap.min.css";
import "../../../../assets/websiteasset/lib/lightbox/css/lightbox.min.css";
import "../../../../assets/websiteasset/lib/animate/animate.min.css";
import "../../../../assets/websiteasset/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";




// Example data for profiles
const profilesData = [
  { id: 1, name: "John Doe", age: 28, city: "New York", imageUrl: "path-to-image.jpg", description: "..." },
  { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles", imageUrl: "path-to-image.jpg", description: "..." },
  // Add more profiles as needed
];

const itemsPerPage = 8; // Number of profiles per page

const WeddingMatchmakingHome = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [user] = useAuthState(auth);
  // Function to handle page change
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Function to handle search
  const handleSearch = () => {
    // Implement search logic based on searchQuery
    console.log("Search query:", searchQuery);
  };

  const handleSignInClick=()=>{
    const navigate = useNavigate();
    // Conditionally redirect based on user state
  };
  return (
    <Container maxWidth="lg">
        {/* <html
  key="1"
  lang="en"
> */}
  {/* <head>
    <meta charSet="utf-8" />
    <title>
      WedGlobally
    </title>
    <meta
      content="width=device-width, initial-scale=1.0"
      name="viewport"
    />
    <meta
      content=""
      name="keywords"
    />
    <meta
      content=""
      name="description"
    />
    <link
      href="https://fonts.googleapis.com"
      rel="preconnect"
    />
    <link
      crossOrigin=""
      href="https://fonts.gstatic.com"
      rel="preconnect"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:wght@400;500;600&family=Petit+Formal+Script&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link
      href="../../../../assets/websiteasset/lib/animate/animate.min.css"
      rel="stylesheet"
    />
    <link
      href="../../../../assets/websiteasset/css/lightbox.min.css"
      rel="stylesheet"
    />
    <link
      href="../../../../assets/websiteasset/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="../../../../assets/websiteasset/css/style.css"
      rel="stylesheet"
    />
  </head> */}
  {/* <body
    data-bs-spy="scroll"
    data-bs-target="#navBar"
    id="weddingHome"
  > */}
    <div
      className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      id="spinner"
    >
      <div
        className="spinner-grow text-primary"
        role="status"
      />
    </div>
    <div className="container-fluid sticky-top px-0">
      <div className="container-fluid">
        <div className="container px-0">
          <nav
            className="navbar navbar-light navbar-expand-xl"
            id="navBar"
          >
            <a
              className="navbar-brand"
              href="index.html"
            >
              <h4 className="text-primary display-6 fw-bold mb-0">
                Wed
                <strong className="text-secondary">
                  Globally
                </strong>
              </h4>
            </a>
            <button
              className="navbar-toggler py-2 px-3"
              data-bs-target="#navbarCollapse"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div
              className="collapse navbar-collapse py-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto border-top">
                <a
                  className="nav-item nav-link active"
                  href="#weddingHome"
                >
                  Home
                </a>
                <a
                  className="nav-item nav-link"
                  href="#weddingAbout"
                >
                  About
                </a>
                <a
                  className="nav-item nav-link"
                  href="#weddingStory"
                >
                  Story
                </a>
                <a
                  className="nav-item nav-link"
                  href="#weddingTimeline"
                >
                  Timeline
                </a>
                <a
                  className="nav-item nav-link"
                  href="#weddingGallery"
                >
                  Gallery
                </a>
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <a
                  className="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4"
                  href="/WedGlobally/authentication/sign-in"
                  onClick={handleSignInClick}
                >
                   {user ? (<> {user.displayName} </> ) : ( <> Sign In </>)}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="container-fluid carousel-header px-0">
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselId"
      >
        <ol className="carousel-indicators">
          <li
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#carouselId"
          />
          <li
            data-bs-slide-to="1"
            data-bs-target="#carouselId"
          />
          <li
            data-bs-slide-to="2"
            data-bs-target="#carouselId"
          />
        </ol>
        <div
          className="carousel-inner"
          role="listbox"
        >
          <div className="carousel-item active">
            <img
              alt="Image"
              className="img-fluid"
              src={carousel1}
            />
            <div className="carousel-caption">
              <div
                className="p-3 mx-auto animated zoomIn"
                style={{
                  maxWidth: '900px'
                }}
              >
                <div
                  className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style={{
                    borderStyle: 'double'
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-0"
                    style={{
                      letterSpacing: '3px'
                    }}
                  >
                    Planning For Wedding ??
                  </h4>
                </div>
                <h1 className="display-1 text-capitalize text-white mb-3">
                  Find Your Perfect Match{' '}
                  <i className="fa fa-heart text-primary" />
                  {' '}
                </h1>
                <div
                  className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                  style={{
                    borderStyle: 'double'
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-0"
                    style={{
                      letterSpacing: '3px'
                    }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                    href="#"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="Image"
              className="img-fluid"
              src={carousel2}
            />
            <div className="carousel-caption">
              <div
                className="p-3 mx-auto animated zoomIn"
                style={{
                  maxWidth: '900px'
                }}
              >
                <div
                  className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                  style={{
                    borderStyle: 'double'
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-0"
                    style={{
                      letterSpacing: '3px'
                    }}
                  >
                    Find Love In Every Detail
                  </h4>
                </div>
                <h1 className="display-1 text-capitalize text-white mb-3">
                  {' '}
                  <i className="fa fa-heart text-primary" />
                  {' '}
                </h1>
                <div
                  className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style={{
                    borderStyle: 'double'
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-0"
                    style={{
                      letterSpacing: '3px'
                    }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                    href="#"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="Image"
              className="img-fluid bg-secondary"
              src={carousel3}
            />
            <div className="carousel-caption">
              <div
                className="p-3 mx-auto animated zoomIn"
                style={{
                  maxWidth: '900px'
                }}
              >
                <div
                  className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style={{
                    borderStyle: 'double'
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-0"
                    style={{
                      letterSpacing: '3px'
                    }}
                  >
                    Love Beyond Oceans
                  </h4>
                </div>
                <h1 className="display-1 text-capitalize text-white mb-3">
                  {' '}
                  <i className="fa fa-heart text-primary" />
                  {' '}
                </h1>
                <div
                  className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                  style={{
                    borderStyle: 'double'
                  }}
                >
                  <h4
                    className="text-white text-uppercase fw-bold mb-0"
                    style={{
                      letterSpacing: '3px'
                    }}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                    href="#"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselId"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          />
          <span className="visually-hidden">
            Previous
          </span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselId"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          />
          <span className="visually-hidden">
            Next
          </span>
        </button>
      </div>
    </div>
    <div
      className="container-fluid position-relative py-5"
      id="weddingAbout"
    >
      <div
        className="position-absolute"
        style={{
          right: '0',
          top: '-35px'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          left: '0',
          top: '-10px',
          transform: 'rotate(150deg)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div className="container position-relative py-5">
        <div
          className="mx-auto text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: '800'
          }}
        >
          <h1 className="text-primary display-1">
            Welcome to WedGlobally!
          </h1>
          <h4 className="text-dark mb-0">
            The New Gen Matchmaking Platform
          </h4>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="row g-4 align-items-center">
              <div
                className="col-lg-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="d-flex">
                  <div className="text-end my-auto pe-4">
                    <h3 className="text-primary mb-3">
                      AI-driven Matchmaking
                    </h3>
                    <p
                      className="text-dark mb-0"
                      style={{
                        lineHeight: '30px'
                      }}
                    >
                      Discover meaningful connections with our AI-driven matchmaking service.
                    </p>
                  </div>
                  <img
                    alt=""
                    className="img-fluid img-border"
                    src={bride}
                  />
                </div>
              </div>
              <div
                className="col-lg-2 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fa fa-heart fa-5x text-primary" />
                </div>
              </div>
              <div
                className="col-lg-5 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="d-flex">
                  <img
                    alt=""
                    className="img-fluid img-border"
                    src={Groom}
                  />
                  <div className="my-auto ps-4">
                    <h3 className="text-primary mb-3">
                      Psycometric Compatibility
                    </h3>
                    <p
                      className="text-dark mb-0"
                      style={{
                        lineHeight: '30px'
                      }}
                    >
                      Unlock deeper connections with psychometric compatibility analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid position-relative overflow-hidden bg-secondary py-5">
      <img
        alt=""
        className="img-fluid position-absolute top-0"
        src={bgflower}
        style={{
          opacity: '0.5',
          right: '-15px',
          transform: 'rotate(270deg)'
        }}
      />
      <img
        alt=""
        className="img-fluid position-absolute"
        src={bgflower}
        style={{
          bottom: '10px',
          left: '-15px',
          opacity: '0.5',
          transform: 'rotate(90deg)'
        }}
      />
      <div className="container py-5 position-relative">
        <div className="row g-5 align-items-center">
          <div
            className="col-xl-6 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="border-white bg-primary"
              style={{
                borderStyle: 'double'
              }}
            >
              <img
                alt=""
                className="img-fluid w-100"
                src={about1}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="wow fadeIn"
              data-wow-delay="0.3s"
            >
              <h5 className="text-uppercase text-primary fw-bold mb-4">
                About Us
              </h5>
              <h1 className="display-5 text-white mb-4">
                We Make Your Every Moment
              </h1>
              <p className="text-white fs-5 mb-4">
                Welcome to WedGlobally, the New-Gen online matchmaking platform dedicated to connecting people around the world. Founded by a dynamic team of professionals from diverse backgrounds, our vision is to help individuals find long-lasting, sustainable, and meaningful relationships that can lead to life partnerships or marriage. Our culturally sensitive and technologically advanced platform is designed to foster connections that transcend borders, bringing people together for enduring and fulfilling relationships.
              </p>
              <div className="tab-class bg-primary p-4">
                <ul className="nav d-flex mb-4">
                  <li className="nav-item">
                  </li>
                  <li className="nav-item">
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show p-0 active"
                    id="tab-1"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="me-4">
                            <img
                              alt=""
                              className="img-fluid w-100 img-border"
                              src={bride}
                            />
                          </div>
                          <div className="text-start my-auto">
                            <div className="d-flex">
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                href=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                href=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                href=""
                              >
                                <i className="fab fa-instagram" />
                              </a>
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"
                                href=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show p-0"
                    id="tab-2"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="me-4">
                            <img
                              alt=""
                              className="img-fluid w-100 img-border"
                              src={Groom}
                            />
                          </div>
                          <div className="text-start my-auto">
                            <h5 className="text-white fw-bold">
                              Anthony
                            </h5>
                            <p className="text-white mb-3">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <div className="d-flex">
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                href=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                href=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-2"
                                href=""
                              >
                                <i className="fab fa-instagram" />
                              </a>
                              <a
                                className="btn btn-primary btn-primary-outline-0 btn-sm-square me-0"
                                href=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-5">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0">
                  <a
                    className="btn btn-primary btn-primary-outline-0 py-3 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-inline-block ms-4 me-3">
                    <i className="fa fa-phone fa-2x text-success border border-2 border-white p-2" />
                  </div>
                  <div className="d-flex flex-column flex-nowrap">
                    <h5 className="text-dark fw-bold mb-2">
                      Call Us Anytime
                    </h5>
                    <h4 className="text-primary mb-0">
                      +44
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-fluid story position-relative py-5"
      id="weddingStory"
    >
      <div
        className="position-absolute"
        style={{
          right: '0',
          top: '-35px'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          left: '0',
          top: '-15px',
          transform: 'rotate(150deg)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div className="container position-relative py-5">
        <div
          className="text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h5 className="text-uppercase text-primary fw-bold mb-4">
            Story
          </h5>
          <h1 className="display-4">
            Build Your Unique Love Story
          </h1>
        </div>
        <div className="story-timeline">
          <div
            className="row wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
              <div className="d-inline-flex align-items-center h-100">
                <img
                  alt=""
                  className="img-fluid w-100 img-border"
                  src={story1}
                />
              </div>
            </div>
            <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                <h4 className="mb-2 text-dark">
                  First Meet
                </h4>
                <p
                  className="text-uppercase text-primary mb-2"
                  style={{
                    letterSpacing: '3px'
                  }}
                >
                  AI Based Search
                </p>
                <p className="m-0 fs-5">
                  AI-based search feature delivers tailored results using advanced algorithms to enhance user experience.
                </p>
              </div>
            </div>
          </div>
          <div
            className="row flex-column-reverse flex-md-row wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                <h4 className="text-dark mb-2">
                  First Date
                </h4>
                <p
                  className="text-uppercase text-primary mb-2"
                  style={{
                    letterSpacing: '3px'
                  }}
                >
                  Find Compatible Matches
                </p>
                <p className="m-0 fs-5">
                  Discover compatible matches effortlessly through our advanced matchmaking algorithms.
                </p>
              </div>
            </div>
            <div className="col-md-6 border-start border-top border-secondary p-4">
              <div className="d-inline-flex align-items-center h-100">
                <img
                  alt=""
                  className="img-fluid w-100 img-border"
                  src={story2}
                />
              </div>
            </div>
          </div>
          <div
            className="row wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
              <div className="d-inline-flex align-items-center h-100">
                <img
                  alt=""
                  className="img-fluid w-100 img-border"
                  src={story3}
                />
              </div>
            </div>
            <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                <h4 className="text-dark mb-2">
                  Proposal
                </h4>
                <p
                  className="text-uppercase text-primary mb-2"
                  style={{
                    letterSpacing: '3px'
                  }}
                >
                  Personalized Insights
                </p>
                <p className="m-0 fs-5">
                  Leverage advanced technology to facilitate deeper understanding between individuals, enhancing compatibility through personalized insights and communication tools
                </p>
              </div>
            </div>
          </div>
          <div
            className="row flex-column-reverse flex-md-row wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                <h4 className="text-dark mb-2">
                  Enagagement
                </h4>
                <p
                  className="text-uppercase text-primary mb-2"
                  style={{
                    letterSpacing: '3px'
                  }}
                >
                  Deeper Connection
                </p>
                <p className="m-0 fs-5">
                  Foster meaningful interactions post-match through innovative features and personalized tools on WedGlobally, promoting deeper connections and relationship development.
                </p>
              </div>
            </div>
            <div className="col-md-6 border border-end-0 border-secondary p-4">
              <div className="d-inline-flex align-items-center h-100">
                <img
                  alt=""
                  className="img-fluid w-100 img-border"
                  src={story4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid wedding-date-bg position-relative py-5">
      <div
        className="position-absolute"
        style={{
          right: '0',
          top: '-100px'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          left: '0',
          top: '-80px',
          transform: 'rotate(150deg)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="container py-5 wow zoomIn"
        data-wow-delay="0.1s"
      >
        <div
          className="wedding-date text-center bg-light p-5"
          style={{
            border: '15px solid rgba(253, 93, 93, 0.5)',
            borderStyle: 'double !important'
          }}
        >
          <div className="wedding-date-content">
            <div
              className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
              style={{
                borderStyle: 'double'
              }}
            >
              <h4
                className="text-dark text-uppercase fw-bold mb-0"
                style={{
                  letterSpacing: '3px'
                }}
              >
                Coming Soon !!
              </h4>
            </div>
            <h1 className="display-4" />
            <p className="text-dark fs-5" />
            <a
              className="btn btn-primary btn-primary-outline-0 py-3 px-5"
              href="#"
            >
              Contact Us
            </a>
          </div>
          <div
            className="position-absolute"
            style={{
              opacity: '0.5',
              right: '-30px',
              top: '15%',
              transform: 'rotate(320deg)',
              zIndex: '1'
            }}
          >
            <img
              alt=""
              className="img-fluid"
              src={attendancebg}
            />
          </div>
          <div
            className="position-absolute"
            style={{
              left: '-10px',
              opacity: '0.5',
              top: '15%',
              transform: 'rotate(-320deg)',
              zIndex: '1'
            }}
          >
            <img
              alt=""
              className="img-fluid"
              src={attendancebg}
            />
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-fluid wedding-timeline bg-secondary position-relative overflow-hidden py-5"
      id="weddingTimeline"
    >
      <div
        className="position-absolute"
        style={{
          left: '-100px',
          opacity: '0.5',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={weddingbg}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          opacity: '0.5',
          right: '-160px',
          rotate: '335deg',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={weddingbg}
        />
      </div>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 text-white">
            Wedding Planing{' '}
          </h1>
        </div>
        <div className="position-relative wedding-content">
          <div className="row g-4">
            <div className="col-6 col-md-6 col-xl-3 border border-bottom-0">
              <div
                className="text-center p-3 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="mb-4 p-3 d-inline-flex">
                  <i className="fas fa-menorah text-primary fa-3x" />
                </div>
                <h3 className="text-dark">
                  Event Management
                </h3>
              </div>
            </div>
            <div className="col-6 col-md-6 col-xl-3 border border-top-0 border-start-0">
              <div
                className="text-center p-3 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="mb-4 p-3 d-inline-flex">
                  <i className="fas fa-photo-video text-primary fa-3x" />
                </div>
                <h3 className="text-dark">
                  Photoshoot
                </h3>
              </div>
            </div>
            <div className="col-6 col-md-6 col-xl-3 border border-bottom-0 border-end-0">
              <div
                className="text-center p-3 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="mb-4 p-3 d-inline-flex">
                  <i className="fas fa-dungeon text-primary fa-3x" />
                </div>
                <h3 className="text-dark">
                  Reception
                </h3>
              </div>
            </div>
            <div className="col-6 col-md-6 col-xl-3 border border-top-0">
              <div
                className="text-center p-3 wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="mb-4 p-3 d-inline-flex">
                  <i className="fas fa-ring text-primary fa-3x" />
                </div>
                <h3 className="text-dark">
                  Ceremony
                </h3>
              </div>
            </div>
          </div>
          <div
            className="position-absolute heart-circle "
            style={{
              bottom: '0',
              left: '-18px'
            }}
          >
            <div className="border border-2 border-primary rounded-circle p-1 bg-secondary" />
          </div>
          <div
            className="position-absolute heart-circle"
            style={{
              right: '-17px',
              top: '18px'
            }}
          >
            <div className="border border-2 border-primary rounded-circle p-1 bg-secondary" />
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-fluid gallery position-relative py-5"
      id="weddingGallery"
    >
      <div
        className="position-absolute"
        style={{
          right: '0',
          top: '-95px'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          left: '0',
          top: '-80px',
          transform: 'rotate(150deg)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div className="container position-relative py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: '800px'
          }}
        >
          <h1 className="display-2 text-dark">
            Wedding Gallery
          </h1>
        </div>
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery1}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-1"
                    href={gallery1}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery2}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-2"
                    href={gallery2}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery3}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-3"
                    href={gallery3}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery4}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-4"
                    href={gallery4}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery5}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-5"
                    href={gallery5}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery6}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-6"
                    href={gallery6}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery7}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-7"
                    href={gallery7}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="gallery-item">
              <div className="gallery-img">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src={gallery8}
                />
                <div className="hover-style" />
                <div className="search-icon">
                  <a
                    className="my-auto"
                    data-lightbox="Gallery-8"
                    href={gallery8}
                  >
                    <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3" />
                  </a>
                </div>
              </div>
              <div
                className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                style={{
                  borderStyle: 'double'
                }}
              >
              </div>
            </div>
          </div>
          <div
            className="col-12 text-center wow fadeIn"
            data-wow-delay="0.2s"
          >
            <a
              className="btn btn-primary btn-primary-outline-0 py-3 px-5 me-2"
              href="#"
            >
              View All{' '}
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid team position-relative py-5">
      <div
        className="position-absolute"
        style={{
          bottom: '-80px',
          right: '0'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          bottom: '-90px',
          left: '0',
          transform: 'rotate(150deg)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          right: '0',
          top: '-100px'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div
        className="position-absolute"
        style={{
          left: '0',
          top: '-80px',
          transform: 'rotate(150deg)'
        }}
      >
        <img
          alt=""
          className="img-fluid"
          src={tampbg1}
        />
      </div>
      <div className="container py-5">
        <div
          className="mb-5 text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: '800px'
          }}
        >
          <h1 className="display-2 text-dark">
            Brides & Grooms
          </h1>
        </div>
        <div className="row g-4">
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={bridesmaid1}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    Amelia Alex
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Bridesmaid
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={bridesmaidteam2}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    Amelia Alex
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Bridesmaid
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={bridesmaid3}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    Amelia Alex
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Bridesmaid
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={bridesmaid4}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    Amelia Alex
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Bridesmaid
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={Groomsmen1}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    David John
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Groomsmen
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={Groomsmen2}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    David John
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Groomsmen
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={Groomsmen3}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    David John
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Groomsmen
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="team-item">
              <div className="team-img">
                <div className="team-img-main">
                  <img
                    alt=""
                    className="img-fluid w-100"
                    src={Groomsmen4}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-30px',
                    left: '-100px',
                    transform: 'rotate(50deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
                <div
                  className="team-img-bg position-absolute"
                  style={{
                    bottom: '-40px',
                    right: '-120px',
                    transform: 'rotate(-30deg)',
                    zIndex: '1'
                  }}
                >
                  <img
                    alt=""
                    className="img-fluid"
                    src={team1bg}
                  />
                </div>
              </div>
              <div className="team-content">
                <div className="d-flex flex-column p-4">
                  <h5 className="text-white display-6 mb-1">
                    David John
                  </h5>
                  <h5 className="text-white fs-5 mb-0">
                    Groomsmen
                  </h5>
                </div>
              </div>
              <div className="team-social d-flex flex-column">
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0 mb-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="btn btn-light btn-light-outline-0"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-fluid RSVP-form py-5"
      id="weddingRsvp"
    >
      <div className="container py-5">
        <div
          className="mb-5 text-center mx-auto wow fadeIn"
          data-wow-delay="0.1s"
          style={{
            maxWidth: '800px'
          }}
        >
          <h1 className="display-2 text-primary">
            Contact Form
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              className="p-5 border-secondary position-relative"
              style={{
                borderStyle: 'double'
              }}
            >
              <div
                className="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2 wow fadeIn"
                data-wow-delay="0.1s"
                style={{
                  borderStyle: 'double',
                  left: '50%',
                  top: '0',
                  transform: 'translate(-50%, -50%)',
                  width: '75%'
                }}
              >
              </div>
              <form>
                <div className="row gx-4 gy-3">
                  <div
                    className="col-lg-6 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="form-group">
                      <label
                        className="form-label text-dark"
                        htmlFor="Examplename"
                      >
                        First Name
                      </label>
                      <input
                        className="form-control py-3 border-0"
                        id="Examplename"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    className="col-lg-6 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="form-group">
                      <label
                        className="form-label text-dark"
                        htmlFor="Examplename"
                      >
                        Last Name
                      </label>
                      <input
                        className="form-control py-3 border-0"
                        id="Examplename"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    className="col-lg-6 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="form-group">
                      <label
                        className="form-label text-dark"
                        htmlFor="Examplename"
                      >
                        Enter Your Email
                      </label>
                      <input
                        className="form-control py-3 border-0"
                        id="Examplename"
                        placeholder="Enter Your Email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div
                    className="col-lg-6 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="form-group">
                      <label
                        className="form-label text-dark"
                        htmlFor="Examplename"
                      >
                        Enter Your Phone
                      </label>
                      <input
                        className="form-control py-3 border-0"
                        id="Examplename"
                        placeholder="Enter Your Phone"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="form-group">
                      <label
                        className="form-label text-dark"
                        htmlFor="exampleselect"
                      >
                        Number Of Guests
                      </label>
                      <select
                        className="form-control bg-white text-dark py-3 border-0"
                        id="exampleselect"
                        placeholder="Number Of Guests"
                      >
                        <option>
                          Only Me
                        </option>
                        <option>
                          02 Guests
                        </option>
                        <option>
                          03 Guests
                        </option>
                        <option>
                          04 Guests
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="col-12 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="form-group">
                      <label
                        className="form-label text-dark"
                        htmlFor="exampletextarea"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control border-0"
                        cols="30"
                        id="exampletextarea"
                        name="text"
                        placeholder="Message"
                        rows="5"
                      />
                    </div>
                  </div>
                  <div
                    className="col-12 text-center wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <button className="btn btn-primary btn-primary-outline-0 py-3 px-5">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row g-5 justify-content-center text-center">
            <div
              className="col-md-4 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div
                className="p-4 border-secondary"
                style={{
                  borderStyle: 'double'
                }}
              >
                <h4>
                  Call Us Now
                </h4>
                <a
                  className="text-dark"
                  href="#"
                >
                  +44
                </a>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div
                className="p-4 border-secondary"
                style={{
                  borderStyle: 'double'
                }}
              >
                <h4>
                  Reach Us
                </h4>
                <p className="mb-0 text-dark">
                  www.wedglobally.com
                </p>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div
                className="p-4 border-secondary"
                style={{
                  borderStyle: 'double'
                }}
              >
                <h4>
                  Where
                </h4>
                <p className="mb-0 text-dark">
                  Nexus, University of Leeds
                </p>
              </div>
            </div>
            <div
              className="col-12 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div
                className="border-secondary"
                style={{
                  borderStyle: 'double'
                }}
              >
                <iframe
                  className="w-100"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  style={{
                    height: '450px',
                    marginBottom: '-6px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-4 text-start">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">
                Links
              </h4>
              <a
                className="btn-link"
                href="#"
              >
                {' '}About
              </a>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Gallery
              </a>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Story
              </a>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Timeline
              </a>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Contact Us
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="footer-item">
              <h4 className="mb-4 text-white">
                Wed
                <strong className="text-primary">
                  Globally
                </strong>
              </h4>
              <div className="btn-link d-flex justify-content-center">
                <a
                  className="btn btn-md-square btn-light btn-light-outline-0 me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-md-square btn-light btn-light-outline-0 me-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-md-square btn-light btn-light-outline-0 me-2"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn btn-md-square btn-light btn-light-outline-0 me-0"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-end">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">
                Follow Us
              </h4>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Faceboock
              </a>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Instagram
              </a>
              <a
                className="btn-link"
                href="#"
              >
                {' '}Twitter
              </a>
              <h4 className="my-4 text-white">
                Contact Us
              </h4>
              <a
                className="btn-link"
                href="#"
              >
                <i className="fas fa-envelope text-secondary me-2" />
                {' '}contact@wedglobally.com
              </a>
              <a
                className="btn-link"
                href="#"
              >
                <i className="fas fa-phone text-secondary me-2" />
                {' '}(+44){' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-light">
              <a href="#">
                <i className="fas fa-copyright text-light me-2" />
                www.wedglobally.com
              </a>
              , All right reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end text-white">
            Designed By{' '}
            <a
              className="border-bottom"
              href="https://htmlcodex.com"
            >
              WedGlobally
            </a>
            {' '}Distributed By{' '}
            <a href="">
              WedGlobally
            </a>
          </div>
        </div>
      </div>
    </div>
    <a
      className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
      href="#"
    >
      <i className="fa fa-arrow-up" />
    </a>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
    <script src="../../../../assets/websiteasset/lib/wow/wow.min.js" />
    <script src="../../../../assets/websiteasset/lib/easing/easing.min.js" />
    <script src="../../../../assets/websiteasset/lib/waypoints/waypoints.min.js" />
    <script src="../../../../assets/websiteasset/lib/lightbox/js/lightbox.min.js" />
    <script src="../../../../assets/websiteasset/js/main.js" />
  
  {/* </body> */}
{/* </html> */}
    </Container>
  );
};

export default WeddingMatchmakingHome;
