import React from 'react'
import TestimonialCard from './TestimonialCard'
import Slider from 'react-slick'
import style from './style.module.css'
import Heading from '../HeadingContent/page'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
        <section className={style.testimonial}>
        <Heading
        subHeading='Customer'
        heading='Testimonial'
        para=""
      />
            <Slider {...settings}>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div>
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </Slider>
            </section>
        </>
    )
}

export default Testimonial