import React from 'react'
import './user.css'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Usercarousel1() {
  return (
    <div>
        <div className='user-caro-1-gill'>

        </div>
        <div className='user-caro-2'>

        <MDBCarousel showControls fade>
        <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser_24602059.casiocoreimg.jpeg/1661234121073/aem-banner-top-g-1920-816.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser_756729378_cop.casiocoreimg.jpeg/1650438031430/aem-banner-top-gw-1920-816.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser_756729378.casiocoreimg.jpeg/1661234121096/aem-banner-top-bg-1920-816.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser.casiocoreimg.jpeg/1661234121214/aem-banner-top-pr-1920-816.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser_347947699.casiocoreimg.jpeg/1661234121239/aem-banner-top-ed1-1920-816.jpeg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.casio.com/content/casio/locales/in/en/products/watches/_jcr_content/root/responsivegrid/carousel/teaser_1369040426.casiocoreimg.jpeg/1661234121261/aem-banner-top-sheen-1920-816.jpeg'
        alt='...'
      />
     
    </MDBCarousel>

        </div>
    </div>
  )
}

export default Usercarousel1