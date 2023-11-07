import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Sheencarousel() {
  return (
    <div>
        <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/sheen/_jcr_content/root/responsivegrid/carousel/teaser.casiocoreimg.jpeg/1661234199475/she-1600-679-2.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/sheen/_jcr_content/root/responsivegrid/carousel/teaser.casiocoreimg.jpeg/1661234199475/she-1600-679-2.jpeg'
        alt='...'
      />
   
    </MDBCarousel>
    </div>
  )
}

export default Sheencarousel