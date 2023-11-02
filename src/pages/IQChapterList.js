import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

const IQHistory = () => {
  return (
    <Container>
        <Row>
          <h1 className="text-center my-4" style={{textDecoration:'underline', color: '#7851A9'}}>Iota Omega Chapter Line List</h1>
          <p>As World War I concluded in 1918, the leadership of Omega Psi Phi Fraternity, In. resumed its efforts to expand its footprint. Grand Basilesus J. Alston Atkins identified key areas to establish chapters of the fraternity. In the five years following the closuere </p>
        </Row>
        <Row>
          <h2 className="text-center my-4" style={{color: '#7851A9'}}>Iota Omega Hall of Fame</h2>
          <h3 style={{color: '#CFB53B'}}>George C. Branche, M.D.</h3>
          <ul>
            <li>15 years on the neuropsychiatric staff of the U. S. Veterans Hospital of Tuskegee. His discoveries using the quartan strain caused him to be invited to make presentations before the American Psychiatric Association in their National Convention in New York in 1934 and in Chicago in 1939. He is listed in “Who’s who in American Medicine.” </li>
          </ul>
        </Row>
        <Row>
            <h3 style={{color: '#CFB53B'}}>John B. Barrett</h3>
            <ul>
              <li>Was Grand Marshal in 1925, who was an assistant instructor at Massachusetts Institute of Technology in Biology and Public Health. </li>
              <li>For 16 years he has had charge of the Clinical Laboratory at the U. S. Veterans Hospital at Tuskegee.</li>
            </ul>
        </Row>
        <Row>
            <h3 style={{color: '#CFB53B'}}>John W. Chenault, M.D.</h3>
            <ul>
              <li>Obtained an M. D. from the University of Minnesota and did graduate work in medicine there. </li>
              <li>Followed this with three years of special studying orthopedic surgery at the University of Chicago and special work in the same field at the University of Iowa</li>
              <li>He was the Director of Orthopedic Surgery at the John A. Andrew Memorial Hospital at Tuskegee.</li>
            </ul>
        </Row>
      <Row>
        <h3 style={{color: '#CFB53B'}}>William R. Maynard</h3>
        <ul>
          <li>Was a cashier of Tuskegee Institute Saving Bank. He also Secretary and Treasurer of the Tuskegee Cooperative Building and Loan Association.</li>
        </ul>
      </Row> 
      <Row>            
        <h3 style={{color: '#CFB53B'}}>Charles G. Gomillion</h3>
        <ul>
          <li>A teacher of Social Science at Tuskegee University, and winner of the first prize in the first annual essay contest sponsored by the National Tuberculosis Association in 1934.</li>
        </ul>
        <p>Source: The History of Omega Psi Phi Fraternity: A Brotherhood of Negro College Men, 1911 to 1939</p>
      </Row> 
      <Row style={{padding: '1rem'}}>
        <Button style={{backgroundColor:'#7851A9', borderColor:'#CFB53B', width: '10rem', color: '#CFB53B'}}>IQ Chapter List</Button>
      </Row>
    </Container>
  )
}

export default IQHistory

