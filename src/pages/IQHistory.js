import React, {useEffect} from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const IQHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
        <Row>
          <h1 className="text-center my-4" style={{textDecoration:'underline', color: '#7851A9'}}>Iota Omega Chapter History</h1>

          <p><strong style={{color: '#CFB53B'}}>Iota Omega: A Rich History to Cherish - A Bright Future to Behold</strong></p>

          <p>As World War I concluded in 1918, the leadership of Omega Psi Phi Fraternity, Inc resumed its efforts to expand its footprint. Grand Basileus J. Alston Atkins identified key areas to establish chapters of the Fraternity. In the five years following the closure of the War, Omega grew vigorously and added an additional twenty-four (24) chapters to its ranks. Among those chapters established during this period, <strong style={{color: '#7851A9'}}>Iota Omega Chapter</strong>, affectionately known as <strong style={{color: '#7851A9'}}>“The Intelligent Que’s”</strong> <strong style={{color: '#CFB53B'}}>was chartered on January 21, 1923.</strong> </p>

          <p>A highly select group of men of esteemed character were selected to be the nucleus of the Chapter. Those stalwart Brothers who birthed Omega in the City of Tuskegee AL included: <strong style={{color: '#CFB53B'}}>John H. Brown, D.B. Fullwood, Richard H. Richardson, James E Scott, and D.B. Taylor</strong>. These men laid the foundation that has molded numerous Omega men who have made substantial contributions to Tuskegee, the State of Alabama, the United States, and beyond. From their lineage directly comes 340 men initiated into the Fraternity through the auspices of Iota Omega and an additional 500 initiates via its advisement to Lambda Epsilon, the Undergraduate Chapter on the Campus of Tuskegee University. </p>

          <p><strong style={{color: '#CFB53B'}}>Iota Omega’s Growth</strong></p>

          <p>In its infancy, Iota Omega Chapter was comprised of leaders and trend-setters in the Tuskegee Community. Its membership grew to contain academic professors, doctors, businessmen, and employees of the newly established U.S. Veterans’ Bureau Hospital (later to be merged into the US military’s Veterans Administration Hospital, now Central Alabama Veterans Health Care System). With the Fraternity conducting Conclaves since 1912, the Chapter’s leadership began envisioning the opportunity to host the Brotherhood at its ensuing 14th Grand Conclave. Just two years after its Charter was established, the Fraternity unanimously voted to hold its Conclave in Tuskegee, AL and Bro. John S. Garrett served as Grand Marshal.</p>

          <p>On December 27, 1925, the Conclave convened on the campus of Tuskegee Institute (University) in Dorothy Hall, hosted by the Brothers of Iota Omega Chapter. At that point, Iota Omega had initiated 8 men into the fold. The Conclave was very well attended by Brothers. 1925 also marked the transformation of Bro. Dr. Carter G. Woodson’s Negro History and Literature Week into Negro Achievement Week, later to more formalized nationally as Black History Month. </p>
          
          <p>From the time of the 14th Grand Conclave until the beginning of World War II, Iota Omega continued to contribute to the Tuskegee community and initiated an additional 25 Brothers. As World War II continued to grow, the US Army Air Forces authorized the formation of a Black fighter pursuit squadron, the first step to the Tuskegee Airmen Experiment. With the training of Black student pilots being conducted at the Tuskegee Army Air Field (now Moton Field) additional Omega men relocated to Tuskegee and Iota Omega during their training tenure. More than eighty (80) Omega men attended training in Tuskegee and were an active part of the Chapter. Bro. George “Spanky” Roberts exemplified his flight skills to the point he was assigned to command the 99th Fighter Squadron in June of 1942.</p>

          <p>As World War II ended, enrollment at colleges across the nation grew, and Iota Omega members felt a need to aid in Omega’s growth and expansion and sought the blessings of the Tuskegee Institute administration and the Fraternity’s national leadership to charter a Chapter on the campus of the
          institute. On December 11, 1947, Tuskegee Institute’s Personnel and Guidance Committed approved Omega Psi Phi’s petition and recommended its approval. With that approval, the Fraternity’s National Headquarters subsequently approved the charter for Lambda Epsilon on December 22, 1947, assigning Iota Omega as its supervising Chapter. This effort for establishment was spearheaded by Iota Omega members: Marshall Cabiness Sr., William Wardell, Dr. Saunders Walker, James C. Gaskin, Dr. John Chenault and George “Spanky” Roberts. The Charter line of twenty-one (21) young men were initiated, thereby jump-starting Lambda Epsilon chapter in 1948.</p>

        </Row>
        <Row>
          <h2 className="text-center my-4" style={{color: '#CFB53B'}}>Iota Omega Hall of Fame</h2>
          <h5 style={{color: '#7851A9'}}>Iota Omega Throughout the Years</h5> 

          <p>From the Chapter’s inception, Iota Omega, “awarded a gold-filled medal for the encouragement of scholarship and cooperated with local charitable organizations.” For the Omega Hall of Fame, five Iota Omega Brother’s have been so honored. Those Brothers include: George C. Branch – Discoveries using quartan strain 1934; John B. Barret – 1925 Conclave Grand Marshall Clinical Laboratory Director, Tuskegee Veterans Hospital; Dr. John W. Chenault, M.D.- Orthopedic Surgeon; William R. Maynard, Treasurer of Tuskegee Cooperative Building and Loan Assoc.; Dr. Charles G. Gomillion – Essay contest winner National Tuberculosis Association in 1934.</p>

          <p>Just as the Brothers in the infancy of Iota Omega exhibited esteemed leadership, the Chapter continued to birth sterling Brothers to the service of Omega and mankind. Among Iota Omega’s lineage are:</p>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother F.C. Alston</h5>
          <ul>
            <li>Created a design of the escutcheon for the cover of the Oracle in 1923 which set the standard for ensuing editions.</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother John B. Barrett</h5>
          <ul>
            <li>Grand Marshall for the 1925 Conclave in Tuskegee, AL</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother George “Spanky” Roberts</h5>
          <ul>
            <li>Commander of The 99th Pursuit Squadron, Tuskegee Airman</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother William Maynard</h5>
          <ul>
            <li>Cashier of Tuskegee Savings Bank</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Dr. Charles G. Gomillion</h5>
          <ul>
            <li>Iota Omega Basileus 1939</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Dr. J.A. Kennedy</h5>
          <ul>
            <li>Dean Arts & Sciences Tuskegee Institute; Instrumental in ending gerrymandering in the South</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Richard B. Collins</h5>
          <ul>
            <li>Keeper of Records & Seal 1939</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Lorenious McDonald, Sr.</h5>
          <ul>
            <li>7th District Keeper of Records & Seal</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Essex B. Lampkin</h5>
          <ul>
            <li>7th District Keeper of Records & Seal</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Dr. Saul T. Wilson</h5>
          <ul>
            <li>Professor of Veterinary Science, Tuskegee University</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Aubrey O. Page</h5>
          <ul>
            <li>Alabama State Representative</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother Dr. William O. Jones</h5>
          <ul>
            <li>Professor of Veterinary Science, Tuskegee University; Most Worshipful Grand Master of P.H.A. Grand Lodge of Alabama</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>Brother William C. Brassfield</h5>
          <ul>
            <li>16th 7th District Representative of Omega Psi Phi Fraternity, Inc. Alabama State Representative of Omega Psi Phi Fraternity, Inc.</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#7851A9'}}>Brother Fred D. Gray, Jr.</h5>
          <ul>
            <li>Civil Rights Attorney and Recipient of Presidential Medal of Freedom, Lifetime Achievement Award Recipient, Omega Psi Phi Lifetime Achievement Award</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#7851A9'}}>Brother Fred D. Gray</h5>
          <ul>
            <li>Alabama State Representative of Omega Psi Phi Fraternity, Inc. 7th District Counselor, 7th District 1st Vice District Representative, State of Alabama 15th State Representative, Omega Psi Phi Fraternity, Inc.</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#7851A9'}}>Brother Joseph T. Williams</h5>
          <ul>
            <li>1983 Initiate of Iota Omega Chapter, 19th 7th District Representative of Omega Psi Phi Fraternity, Inc Chairman of International Membership Selection Program Training - Omega Psi Phi Fraternity, Inc Founders Lifetime Achievement Award Recipient - Omega Psi Phi Fraternity, Inc.</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#7851A9'}}>Brother Rogers Hunt III</h5>
          <ul>
            <li>82nd Grand Conclave - Charles R. Drew Memorial Scholarship Commission Graduate Scholarship Grant Recipient</li>
          </ul>
        </Row>
        <Row>
          <h5 style={{color: '#CFB53B'}}>George C. Branche, M.D.</h5>
          <ul>
            <li>15 years on the neuropsychiatric staff of the U. S. Veterans Hospital of Tuskegee. His discoveries using the quartan strain caused him to be invited to make presentations before the American Psychiatric Association in their National Convention in New York in 1934 and in Chicago in 1939. He is listed in “Who’s who in American Medicine.” </li>
          </ul>
        </Row>
        <Row>
            <h5 style={{color: '#CFB53B'}}>John B. Barrett</h5>
            <ul>
              <li>Was Grand Marshal in 1925, who was an assistant instructor at Massachusetts Institute of Technology in Biology and Public Health. </li>
              <li>For 16 years he has had charge of the Clinical Laboratory at the U. S. Veterans Hospital at Tuskegee.</li>
            </ul>
        </Row>
        <Row>
            <h5 style={{color: '#7851A9'}}>John W. Chenault, M.D.</h5>
            <ul>
              <li>Obtained an M. D. from the University of Minnesota and did graduate work in medicine there. </li>
              <li>Followed this with three years of special studying orthopedic surgery at the University of Chicago and special work in the same field at the University of Iowa</li>
              <li>He was the Director of Orthopedic Surgery at the John A. Andrew Memorial Hospital at Tuskegee.</li>
            </ul>
        </Row>
      <Row>
        <h5 style={{color: '#7851A9'}}>William R. Maynard</h5>
        <ul>
          <li>Was a cashier of Tuskegee Institute Saving Bank. He also Secretary and Treasurer of the Tuskegee Cooperative Building and Loan Association.</li>
        </ul>
      </Row> 
      <Row>            
        <h5 style={{color: '#7851A9'}}>Charles G. Gomillion</h5>
        <ul>
          <li>A teacher of Social Science at Tuskegee University, and winner of the first prize in the first annual essay contest sponsored by the National Tuberculosis Association in 1934.</li>
        </ul>
        <p>Source: The History of Omega Psi Phi Fraternity: A Brotherhood of Negro College Men, 1911 to 1939</p>
      </Row> 
      <Row style={{padding: '1rem'}}>
        <Link to="/chapterlinelist">
          <Button style={{backgroundColor:'#7851A9', borderColor:'#CFB53B', width: '10rem', color: '#CFB53B'}}>IQ Chapter List</Button>
        </Link>
      </Row>
      
    </Container>
  )
}

export default IQHistory

