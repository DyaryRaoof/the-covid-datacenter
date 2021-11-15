import { Row, Col } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import europe from '../images/europe-map.png';

const countries = [
  { name: 'CZECH REPUBLIC', number: 119, id: 1 },
  { name: 'ITALY', number: 119, id: 2 },
  { name: 'CZECH REPUBLIC', number: 119, id: 3 },
  { name: 'CZECH REPUBLIC', number: 119, id: 4 },
  { name: 'CZECH REPUBLIC', number: 119, id: 5 },
  { name: 'CZECH REPUBLIC', number: 119, id: 6 },
  { name: 'CZECH REPUBLIC', number: 119, id: 7 },
  { name: 'CZECH REPUBLIC', number: 119, id: 8 },
];

const Detail = () => (
  <main>
    <section className="top-section">
      <Row>
        <Col>
          <img className="w-100 opacity-25 ms-4" src={europe} alt="Europe map" />
        </Col>
        <Col>
          <div className=" top-section-content d-flex flex-column justify-content-center align-items-end me-3">
            <h1>Europe</h1>
            <span>6,958</span>
          </div>
        </Col>
      </Row>
    </section>
    <span className="stats">STATS BY COUNTRY</span>
    <section>
      <div className="town">
        {countries.map((country, index) => (
          <div className={index % 2 === 0 ? 'light-background d-flex justify-content-between align-items-center ps-3' : 'd-flex justify-content-between align-items-center ps-3'} key={country.id}>
            <h5>Prague</h5>

            <div className="d-flex  align-items-center justify-content-center text-end my-3 me-2">
              <span className="me-3">965 views</span>

              <div className="d-flex justify-content-end me-2 mt-2">
                <BsArrowRightCircle />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Detail;
