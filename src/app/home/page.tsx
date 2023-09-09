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

      {/* <Button label = "wywiyi" /> */}
    </>
  )
}

export default page