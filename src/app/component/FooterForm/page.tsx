import React from 'react'
import style from './style.module.css'
import Slider from 'react-slick'
import Image from 'next/image'

const FooterForm = () => {
  const settings = {
    dots: false,
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
      <section className={style.footerform}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='items-center'>
            <div className="grid grid-cols-2">
              <div>
                <h2>
                  Got an
                  <span> amazing business <br /> idea?</span>
                  Lets bring it to the <br /> market together.
                </h2>

                <Slider  {...settings}>
                  <div>
                    <div className={style.officeBox}>
                      <div className={style.office}>
                        <h5>Abu Dhabi</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum optio.</p>
                      </div>
                      <Image src='/assets/img/dubai-new.webp' alt='logo' width={200} height={300} />
                    </div>
                  </div>
                  <div>
                    <div className={style.officeBox}>
                      <div className={style.office}>
                        <h5>Abu Dhabi</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum optio.</p>
                      </div>
                      <Image src='/assets/img/dubai-new.webp' alt='logo' width={200} height={300} />
                    </div>
                  </div>
                  <div>
                    <div className={style.officeBox}>
                      <div className={style.office}>
                        <h5>Abu Dhabi</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum optio.</p>
                      </div>
                      <Image src='/assets/img/dubai-new.webp' alt='logo' width={200} height={300} />
                    </div>
                  </div>
                  <div>
                    <div className={style.officeBox}>
                      <div className={style.office}>
                        <h5>Abu Dhabi</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nostrum optio.</p>
                      </div>
                      <Image src='/assets/img/dubai-new.webp' alt='logo' width={200} height={300} />
                    </div>
                  </div>

                </Slider>
              </div>
              <div>
                <div>
                  <h5>Got a startup idea & need to get it validated?</h5>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="grid grid-cols-1 mx-5 my-5">
                      <input type="text" placeholder='Name' />
                      <input type="number" placeholder='Phone' />
                      <input type="email" placeholder='Email Address' />
                      <input type="text" placeholder='Tell us about your project (optional)' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FooterForm