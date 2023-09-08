import React from 'react'
import Button from '../component/Button/Button'
import Navbar from '../component/Navbar/page'
import Card from '../component/Card/page'

const page = () => {
  return (
    <>
      <Navbar />
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
     
      </div>
      {/* <Button label = "wywiyi" /> */}
    </>
  )
}

export default page