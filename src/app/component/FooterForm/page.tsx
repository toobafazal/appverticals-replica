import React from 'react'
import style from './style.module.css'
import Slider from 'react-slick'
import Image from 'next/image'

const FooterForm = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
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
            <section className={style.footerform}>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='items-center'>
                        <div className="grid grid-cols-2">
                            <h2>
                            Got an
                            <span>amazing business <br /> idea?</span>
                            Lets bring it to the <br /> market together.
                            </h2>
                            {/* <div className={style.links}>
                                <div className={style.left}>

                                </div>
                            </div> */}
                            <Slider  {...settings}>
                                <div>
                                    <div className={style.office}>
                                    <Image src='/assets/img/dubai-new.webp' alt='logo' width={200} height={300} />
                                    </div>
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterForm