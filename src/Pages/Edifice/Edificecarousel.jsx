import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Edificecarousel() {
  return (
    <div>
         <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/edifice/_jcr_content/root/responsivegrid/carousel/item_1666861367198.casiocoreimg.jpeg/1666862003806/hero-pc.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/edifice/_jcr_content/root/responsivegrid/carousel/teaser_copy_copy.casiocoreimg.jpeg/1666861855654/eqs-930nis-hero-pc.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/edifice/_jcr_content/root/responsivegrid/carousel/teaser.casiocoreimg.jpeg/1653028614183/ecb-s100hr-hero-pc.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/edifice/_jcr_content/root/responsivegrid/carousel/teaser_1188175624.casiocoreimg.jpeg/1675940023582/ecb-s100-hero-pc.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/edifice/_jcr_content/root/responsivegrid/carousel/teaser_965544614.casiocoreimg.jpeg/1675940023617/heat-gradation-hero-pc.jpeg'
        alt='...'
      />
    </MDBCarousel>
    </div>
  )
}

export default Edificecarousel