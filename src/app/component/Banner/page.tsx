'use client'
import React from 'react'
import style from './style.module.css'
import Button from '../Button/Button'
import Slider from "react-slick";
import Image from 'next/image';

const Banner: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 0,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    };

    return (
        <section className={style.banner}>
            <div className="container">
                <div className="row items-center">
                    <div className="grid grid-cols-1">
                        <div className={style.bannerContent}>
                            <h4>Perfect Blend of Technology & Creativity!</h4>
                            <h1>Top-Notch App Development Company </h1>
                            <div className='flex p-8'>
                                <Button label="Have an Idea, Let's Talk" />
                                <Button label="Have an Idea, Let's Talk" />
                            </div>
                        </div>
                        <Slider className={style.companyLogo} {...settings}>
                            <div>
                                <Image src='/assets/hero/01.webp' alt='logo' width={147} height={47} />
                            </div>
                            <div>
                                <Image src='/assets/hero/02.webp' alt='logo' width={147} height={47} />
                            </div>
                            <div>
                                <Image src='/assets/hero/03.webp' alt='logo' width={147} height={47} />
                            </div>
                            <div>
                                <Image src='/assets/hero/04.webp' alt='logo' width={147} height={47} />
                            </div>
                            <div>
                                <Image src='/assets/hero/05.webp' alt='logo' width={147} height={47} />
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
            <video src="assets/hero/Top-Notch.mp4" autoPlay muted loop playsInline />
        </section>
    )
}

export default Banner