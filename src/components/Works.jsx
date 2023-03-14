import React from 'react'
import locationIcon from '../assets/image/svg/location-icon.svg'
import mobile from '../assets/image/svg/mobile.svg'
import smartLock from '../assets/image/svg/smart-lock.svg'

import { Col, Container, Row } from 'react-bootstrap'

const Works = () => {
    return (
        <>
            <section className='py-5'>
                <Container>
                    <div className="text-center">
                        <h3 className='text-darkblue fs_48 fw-bold ff_space'>How it works. </h3>
                        <p className='fs_32 fw-light ff_space'>This is how our products works </p>
                    </div>
                    <Row className='mt-5 justify-content-center'>
                        <Col sm={6} lg={4}>
                            <div className='m-2 h-100 bg-white p-3 d-flex flex-column align-items-center text-center'>
                                <div>
                                    <img className='image_width' src={locationIcon} alt="image" />
                                </div>
                                <h5 className='fs_36 fw-semibold ff_space pt-3'>Find Home </h5>
                                <p className='fs_24 fw-light ff_space mb-0'>Our properties are located at prime areas where by there won’t
                                    be problem with transportation </p>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4 mt-sm-0'>
                            <div className='m-2 h-100 bg-white p-3 d-flex flex-column align-items-center text-center'>
                                <div>
                                    <img className='w-50' src={mobile} alt="image" />
                                </div>
                                <h5 className='fs_36 fw-semibold ff_space pt-3'>Make payments </h5>
                                <p className='fs_24 fw-light ff_space mb-0'>Our estates comes with good network,portable water ,
                                    24hrs light and round the clock security.</p>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='mt-4 mt-lg-0'>
                            <div className='m-2 h-100 bg-white p-3 d-flex flex-column align-items-center text-center'>
                                <div>
                                    <img className='w-50' src={smartLock} alt="image" />
                                </div>
                                <h5 className='fs_36 fw-semibold ff_space pt-3'>Make it Official </h5>
                                <p className='fs_24 fw-light ff_space mb-0'>We have been in business for over 32 years,for client
                                    outside the country you can trust  us to deliver well. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Works