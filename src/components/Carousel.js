import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import pic1 from '../assets/HomescreenGal/galPhoto0.JPG'
import pic2 from '../assets/HomescreenGal/galPhoto1.JPG'
import pic3 from '../assets/HomescreenGal/galPhoto2.JPG'

import '../css/Carousel.css';

function Carousels() {
  return (
    <Carousel style={{ height: '500px', flexDirection: 'column',
    justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', padding: 10 }}>
      <Carousel.Item Stretch >
      <Image src={pic1} alt="Iota Omega Chapter" style={{ height: 500}}/>
        <Carousel.Caption>
          <h3>Welcome to Iota Omega Chapter </h3>
          <h3>Of Omega Psi Phi Inc.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={pic2} alt='Welcome to Iota Omega'  style={{ height: '500px'}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={pic3} alt='Welcome to Iota Omega' style={{ height: '500px'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;

