import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RECLAMATION from '../assets/MandatedPrograms/RECLAMATION.jpg';
import SCHOLARSHIP from '../assets/MandatedPrograms/scholarship.jpg';
import TALENTHUNT from '../assets/MandatedPrograms/TalentHunt.jpg';
import HEALTH from '../assets/MandatedPrograms/Q5K Run2.jpg';
import MEMORIAL from '../assets/MandatedPrograms/MEMORIAL.jpg';
import SOCIAL from '../assets/MandatedPrograms/SOCIAL.jpg';
import NAACP from '../assets/MandatedPrograms/naacp.png';
import COLLEGE from '../assets/MandatedPrograms/College.jpg';
import WEEK from '../assets/MandatedPrograms/Week.jpg';
import VOTER from '../assets/MandatedPrograms/Voters.jpg';
import '../css/Ourprograms.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OurPrograms() {
  const cardData = [
    // Create an array with data for 10 cards
    {
      title: 'ACHIEVEMENT WEEK',
      imageSrc: WEEK,
      description: 'Observed each November and is designed to recognize those individuals at the local and international levels who have contributed to community uplift. A High School Essay Contest is to be held in conjunction with Achievement Week.',
      header:'ACHIEVEMENT WEEK',
    },
    {
        title: 'SCHOLARSHIP',
        imageSrc: SCHOLARSHIP,
        description: 'Promotes academic excellence among the undergraduate members. Graduate chapters provide financial assistance to student members and non-members.',
        header:'SCHOLARSHIP',
    },
    {
        title: 'SOCIAL ACTION',
        imageSrc: SOCIAL,
        description: 'Chapters participate in activities that will uplift their communities. Some of the activities include: voter registration, Assault on Illiteracy; Habitat for Humanity; mentoring; and participation in fundraisers for charitable org.',
        header:'SOCIAL ACTION',
    },
    {
        title: 'TALENT HUNT',
        imageSrc: TALENTHUNT,
        description: 'Provides exposure, encouragement and financial assistance to talented young people participating in the performing arts. Winners are awarded recognition and may be given college scholarships. Click here to visit website.',
        header:'TALENT HUNT',
    },
    {
        title: 'VOTER REGISTRATION, EDUCATION & MOBILIZATION',
        imageSrc: VOTER,
        description: 'Chapters facilitate and participate in activities that uplift their communities through the power of the vote.',
        header:'VOTER REGISTRATION, EDUCATION & MOBILIZATION',
    },
    {
        title: 'MEMORIAL SERVICE',
        imageSrc: MEMORIAL,
        description: 'March 12th of each year chapters conduct an appropriate service to recall the memory of those members who have entered into Omega Chapter.',
        header:'MEMORIAL SERVICE',
    },
    {
        title: 'HEALTH INITIATIVES',
        imageSrc: HEALTH,
        description: 'Chapters facilitate, participate and coordinate activities that promote good health practices. Some of the programs are the Charles Drew Blood Drive and partnership with the American Diabetes Association.',
        header:'HEALTH INITIATIVES',
    },
    {
        title: 'NAACP',
        imageSrc: NAACP,
        description: 'Every district and chapter of the fraternity is required to maintain a Life Membership at Large in the NAACP. All members of the fraternity are encouraged to join the NAACP.',
        header:'NAACP',
    },
    {
        title: 'COLLEGE ENDOWMENT FUND',
        imageSrc: COLLEGE,
        description: 'Each year the fraternity gives at least $50,000 to historically black college and universities in furtherance of Omega’s commitment to provide philanthropic support.',
        header:'COLLEGE ENDOWMENT FUND',
    },
    {
        title: 'RECLAMATION AND RETENTION',
        imageSrc: RECLAMATION,
        description: 'A concerted effort at the international, district and local levels to retain active brothers and return inactive brothers to full participatory status.',
        header:'RECLAMATION AND RETENTION',
    }
  ];

  return (
    <Container className='Container main'>
      <h1 className="text-center my-4" style={{textDecoration:'underline'}}>Our Mandated Programs</h1>
      <Row xs={1} md={2} xl={3} fluid>
        {cardData.map((card, index) => (
          <Col key={index}>
            <Card style={{ border: '1px solid transparent', width: '25rem', padding: '.05rem'}}>
              <Card.Img variant="top" src={card.imageSrc}  style={{height: 425}} />
              <Card.Body>
                <Card.Title className='text-center'>{card.title}</Card.Title>
                <Card.Text className='float-xl-end'>{card.description}</Card.Text>
                <Button variant="btn btn-secondary" >Learn More -{'>'}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
