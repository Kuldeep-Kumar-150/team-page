import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mainImage from '../assets/image/png/mainimage.png'
import twoCircle from '../assets/image/svg/twocircle.svg'
import downArrow from '../assets/image/svg/downarrow.svg'

const HeroSection = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className='flex-column-reverse flex-lg-row align-items-xxl-center mt-5'>
                        <Col lg={5}>
                            <h1 className='fs_64 fw-normal ff_space text-darkblue mt-5 mt-xxl-0'>Helping you find the property of your dreams.</h1>
                            <p className='fs_32 fw-light ff_space mt-3'>Creating quality urban lifestyles,building stronger communities</p>
                            <div className="d-flex align-items-center mt-5">
                                <a href="#" className='get_started_btn fs_24 fw-bold ff_space text-white btn_hover'>Learn More</a>
                                <a href="#" className='ms-5'>
                                    <svg className='w-75' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="25" cy="25" r="25" fill="#0F298B" />
                                        <path d="M19.4698 15.2775L36.271 23.968C37.4552 24.5805 37.499 26.2581 36.3483 26.9316L19.5472 36.7655C18.419 37.4259 17 36.6122 17 35.305L17 16.7806C17 15.5125 18.3434 14.6949 19.4698 15.2775Z" fill="white" stroke="white" stroke-width="0.656716" />
                                    </svg>
                                </a>
                            </div>
                        </Col>
                        <Col className='position-relative' lg={7}>
                            <img className='w-100' src={mainImage} alt="image" />
                            <img className='w-25 position-absolute two_circle d-none d-sm-block' src={twoCircle} alt="image" />
                        </Col>
                    </Row>

                    <Row className='shadow_manual w-100 py-5 my-5'>
                        <Col xs={6} sm={4} md={3} className="d-flex justify-content-center">
                            <div className="d-flex align-items-center">
                                <h2 className='text-darkblue fs_24 fw-bold ff_space'>Location</h2>
                                <img className='ps-2' src={downArrow} alt="downarow" />
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={3}>
                            <div className="d-flex align-items-center">
                                <h2 className='text-darkblue fs_24 fw-bold ff_space'>Property Type</h2>
                                <img className='ps-2' src={downArrow} alt="downarow" />
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={3} className="d-flex justify-content-center">
                            <div className="d-flex align-items-center ps-2 ps-sm-0">
                                <h2 className='text-darkblue fs_24 fw-bold ff_space'>Max Price</h2>
                                <img className='ps-2' src={downArrow} alt="downarow" />
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={3} className="d-flex justify-content-sm-center">
                            <div>
                                <a href="#" className='px-3 py-2 bg_darkgreen text-white d-inline-block rounded-2 fs_24 fw-bold ff_space'><svg className='me-2' width="13" height="13" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="white" />
                                </svg>Search
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HeroSection