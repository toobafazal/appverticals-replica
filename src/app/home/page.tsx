'use client'
import React from 'react'
import Button from '../component/Button/Button'
import Navbar from '../component/Navbar/page'
import Card from '../component/Card/page'
import Banner from '../component/Banner/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from '../component/HeadingContent/page'
import CaseStudies from '../component/caseStudies/page'
import Slider from 'react-slick'
import Process from '../component/Process/page'
import Enqueue from '../component/Enqueue/page'
import Testimonial from '../component/Testimonial/page'
import Image from 'next/image'
import FooterForm from '../component/FooterForm/page'

const page = () => {
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
      <Navbar />
      <Banner />
      <section className='my-20'>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Heading
        subHeading='One Stop Solution'
        heading='Our Top-Notch App Development Services'
        para=""
      />
      <div className="grid grid-cols-4 gap-4">

        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />
        <Card
          label='79989'
          paragraph='hu2uu2u2u2u'
          img="assets/img/product_icon/apple.webp"
          icon='assets/img/product_icon/ic-5.webp'
          overlayCard='ahahhah'
        />

      </div>
      </div>
      </section>
      <Heading
        subHeading='Our Case Studies'
        heading='Some Of The Exceptional Projects'
        para="We Thoroughly Enjoy Bringing Our Strategy, Expertise, And Execution To Action"
      />
      <Slider {...settings}>
        <div>
          <CaseStudies
            bg='/assets/img/crousel/bitbox-bg.webp'
            img='/assets/img/crousel/bitbox-logo.webp'
            para='Bitbox is a unique and feature-rich platform to buy and sell cryptocurrencies. Using this application, users are able to initiate transactions anywhere in US. Think of Bitbox like your very own physical cryptocurrency ATM.'
          />
        </div>
        <div>
          <CaseStudies
            bg='/assets/img/crousel/vtl-bg.webp'
            img='/assets/img/crousel/vtl-logo.webp'
            para='Bitbox is a unique and feature-rich platform to buy and sell cryptocurrencies. Using this application, users are able to initiate transactions anywhere in US. Think of Bitbox like your very own physical cryptocurrency ATM.'
          />
        </div>

      </Slider>
      <Process />
      <Enqueue />
      <Testimonial />
      <Slider {...settings}>
        <div>
          <Image src='/assets/hero/01.webp' alt='logo' width={100} height={100} />
        </div>
        <div>
          <Image src='/assets/hero/02.webp' alt='logo' width={100} height={100} />
        </div>
        <div>
          <Image src='/assets/hero/03.webp' alt='logo' width={100} height={100} />
        </div>
        <div>
          <Image src='/assets/hero/04.webp' alt='logo' width={1000} height={1000} />
        </div>
        <div>
          <Image src='/assets/hero/05.webp' alt='logo' width={1000} height={1000} />
        </div>

      </Slider>
      <FooterForm />
      {/* <Button label = "wywiyi" /> */}
    </>
  )
}

export default page