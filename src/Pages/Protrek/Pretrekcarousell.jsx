import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Pretrekcarousell() {
  return (
    <div>
        <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/protrek/_jcr_content/root/responsivegrid/carousel/item_1666859479775.casiocoreimg.jpeg/1666859708026/prg-340-hero-pc.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/protrek/_jcr_content/root/responsivegrid/carousel/teaser.casiocoreimg.jpeg/1661234181582/prt-b50-hero-pc-m.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/protrek/_jcr_content/root/responsivegrid/carousel/teaser_632447940.casiocoreimg.jpeg/1661234181602/hero-pc-prg-30.jpeg'
        alt='...'
      />
    </MDBCarousel>
    </div>
  )
}

export default Pretrekcarousell