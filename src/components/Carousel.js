import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image';
import pic1 from '../assets/HomescreenGal/galPhoto0.JPG'
import pic2 from '../assets/HomescreenGal/galPhoto1.JPG'
import pic3 from '../assets/HomescreenGal/galPhoto2.JPG'
import pic4 from '../assets/HomescreenGal/galPhoto3.JPG'
import pic5 from '../assets/HomescreenGal/galPhoto4.JPG'
import pic6 from '../assets/HomescreenGal/galPhoto5.JPG'
import pic7 from '../assets/HomescreenGal/galPhoto6.JPG'
import pic8 from '../assets/HomescreenGal/galPhoto7.JPG'
import pic9 from '../assets/HomescreenGal/galPhoto8.JPG'
import pic10 from '../assets/HomescreenGal/galPhoto9.JPG'
import pic11 from '../assets/HomescreenGal/galPhoto10.JPG'
import pic12 from '../assets/HomescreenGal/galPhoto11.JPG'
import pic13 from '../assets/HomescreenGal/galPhoto12.JPG'
import '../css/Carousel.css';
const imagesUrls = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13 ]

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
      <Image src={pic1} alt="Iota Omega Chapter" fluid />
        <Carousel.Caption>
          <h3>Welcome to Iota Omega Chapter</h3>
          <h4>Of Omega Psi Phi Inc.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={pic2} alt='Welcome to Iota Omega' fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={pic3} alt='Welcome to Iota Omega' fluid />
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

