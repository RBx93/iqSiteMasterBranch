import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Just from '../assets/Founders/founder-just.jpg'
import Coleman from '../assets/Founders/founder-coleman.jpg'
import Cooper from '../assets/Founders/founder-cooper.jpg'
import Love from '../assets/Founders/founder-love-.jpg'

const HistoryOfOppf = () => {
  return (
        <Container>
        <Row>
          <h1 className="text-center my-4" style={{textDecoration:'underline', color: '#7851A9'}}>History Of Omega Psi Phi Fraternity Inc.</h1>
          <p>On a stormy Friday evening, November 17, 1911, three Howard University undergraduate students, with the assistance of their faculty adviser, gave birth to the Omega Psi Phi Fraternity. This event occurred in the office of biology <strong style={{color:'#CFB53B'}}>Professor Ernest E. Just</strong>, the faculty adviser, in the Science Hall (now known as Thirkield Hall). The three liberal arts students were <strong style={{color:'#CFB53B'}}>Edgar A. Love, Oscar J. Cooper and Frank Coleman</strong>. From the initials of the Greek phrase meaning <strong style={{color:'#7851A9'}}>“friendship is essential to the soul,”</strong> the name Omega Psi Phi was derived. Omega Psi Phi Fraternity, Inc. is the first international fraternal organization founded on the campus of a historically black college. <strong style={{color:'#7851A9'}}>Manhood, Scholarship, Perseverance and Uplift</strong> were adopted as Cardinal Principles.
          <br/><br/>
          On November 23, 1911, Edgar A. Love became the first Grand Basileus (National President). Oscar J. Cooper and Frank Coleman were selected to be the Grand Keeper of the Records (National Secretary) and Grand Keeper of Seals (National Treasurer), respectively. Eleven undergraduate men were selected to become the charter members. Alpha chapter was organized with fourteen charter members on December 15, 1911. Brothers Edgar A. Love, Oscar J. Cooper and Frank Coleman were elected the chapter’s first Basileus, Keeper of Records, and Keeper of Seals, respectively. Brother Cooper became the fraternity’s second Grand Basileus in 1912 and authorized the investigation of establishing a second chapter on the campus of Lincoln University located in Pennsylvania. Brother Love was elected as the third Grand Basileus in 1912 and served until 1915. In 1912, Howard University officials did not initially recognize the fraternity as a national organization and Omega Psi Phi’s leadership refused to accept limited recognition. As a result, the fraternity operated without official sanction, until the university withdrew its opposition in 1914, the same year Beta chapter was chartered at Lincoln University.
          <br/><br/>
          Omega Psi Phi was incorporated under the laws of the District of Columbia on October 28, 1914. Brother George E. Hall, the fourth Grand Basileus, authorized the establishment of Gamma chapter in Boston. Brother Clarence F. Holmes served as Omega’s sixth Grand Basileus. Under his leadership, the fraternity’s first official hymn, “Omega Men Draw Nigh,” was written by Otto Bohannon. Omega played a vital role when the United States entered World War I in 1917 by having several brothers in the first class of black soldiers graduate from Camp Fort Des Moines, a military training facility located in Iowa. Several Omegas, including Campbell C. Johnson, John Purnell and founders Frank Coleman and Edgar A. Love are among its graduates. A year later in 1918, retired Colonel Charles Young, rode 500 miles on horseback, from Wilberforce, Ohio, to the nation’s capital, to show he was always fit for duty.
          <br/><br/>
          Stanley Douglas served as editor to the first Oracle which was published in the spring of 1919. In 1919, Raymond G. Robinson, the seventh Grand Basileus, established Delta chapter on the campus of Meharry Medical School which is located in Nashville, Tennessee. Stanley Douglas served as Editor of the Oracle which was first published in the spring of 1919. When Robinson left office in 1920 there were ten chapters in operation. Harold H. Thomas, the eighth Grand Basileus, was elected at the Nashville Grand Conclave in 1920.During this Conclave, Carter G. Woodson inspired the establishment of National Achievement Week to promote the study of Negro life and history. The Atlanta Grand Conclave in 1921 brought an end the fraternity’s first decade. Omega built a strong and effective force of men dedicated to its cardinal principles of manhood, scholarship, perseverance, and uplift.
          </p>
          <br/><br/>
        </Row>

        <Row xs={1} sm={1} fluid style={{backgroundColor: '#7851A9', color: 'white', padding: '1rem'}}>
          <Col className='col-sm-4'>
            <img src= {Just} class="img-fluid" alt="DR. ERNEST E. JUST" style={{height: 400}}/>
          </Col>
          <Col className='col-sm-8'>
            <h2>DR. ERNEST E. JUST (1883-1941)</h2>
            <p>
              Ernest E. Just was born in Charleston, South Carolina. Brother Jst graduated from several schools the Industrial School of the State College, in Orangeburg, South Carolina, Kimball Union Academy, Meriden, New Hampshire Bachelor of Arts Degree,and  Dartmouth College (Phi Beta Kappa). Brother Just in 1915 earned his Doctor of Philosophy Degree, University of Chicago.  
              <br/>
              <br/>
              Brother Just was awarded the Spingarn Medal by the NAACP, in 1916 became the 19th honoree in the U.S. Postal Service’s Black Heritage Stamp Series on February 1, 1996.
            </p>
          </Col>
        </Row>
        <Row xs={1} sm={1} style={{backgroundColor: '#CFB53B', color: 'white', padding: '1rem'}}>
          <Col className='col-sm-4'>
            <img src= {Coleman} class="img-fluid" alt="Frank Coleman" style={{height: 400}}/>
          </Col>
          <Col className='col-sm-8'>
            <h2 >PRO. FRANK COLEMAN (1890-1967)</h2>
            <p>Frank Coleman was born in Washington, D.C. Graduated from the M Street High School in  Washington, D.C. and then went on to recieve his Bachelor of Science Degree, Howard University. Professor Coleman in 1913 recieve his Master of Science Degree, and later going on to study at the University of Chicago Advanced Training, he then became a professor at the University of Pennsylvania and head of the Physics Department, Howard University and also served in the U.S. Army Officer, World War I</p>
          </Col>
        </Row>
        <Row xs={1} sm={1} style={{backgroundColor: '#7851A9', color: 'white', padding: '1rem'}}>
          <Col className='col-sm-4'>
            <img src= {Love} class="img-fluid" alt="BISHOP EDGAR A. LOVE" style={{height: 400}}/>
          </Col>
          <Col className='col-sm-8'>
            <h2>BISHOP EDGAR A. LOVE (1891-1974)</h2>
            <p>Edgar A. Love was born in Harrrisonburg, Virginia. Brother Love graduated from the Academy of Morgan College and later reciving a Bachelor of Arts Degree, Howard University. Later brother Love pursued another degree in 1913 and recieved a Bachelor of Divinity Degree, Howard University, 1916 Bachelor of Sacred Theology Degree, Boston University, 1918 Doctor of Divinity Degree (Honorary), Morgan College, 1935 U.S. Army Chaplain, World War I Bishop, Methodist Church </p>
          </Col>
        </Row>
        <Row xs={1} sm={1} style={{backgroundColor: '#CFB53B', color: 'white', padding: '1rem'}}>
          <Col className='col-sm-4'>
            <img src= {Cooper} class="img-fluid" alt="DR. OSCAR J. COOPER" style={{height: 400}}/>
          </Col>
          <Col className='col-sm-8'>
            <h2>DR. OSCAR J. COOPER (1888-1972)</h2>
            <p>
              Oscar J. Cooper was born in Washington, D.C. Graduated from the M Street High School, Washington, D.C. Bachelor of Science Degree, Howard University, 1913 Doctor of Medicine Degree, Howard University, 1917 Practiced medicine in Philadelphia, PA for 50 years
            </p>
          </Col>
        </Row>
        </Container>
  )
}

export default HistoryOfOppf