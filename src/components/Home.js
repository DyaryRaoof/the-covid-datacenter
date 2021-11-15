import { Row, Col } from 'react-bootstrap';
import './Home.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
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
const Home = () => {
  let alternate = true;
  let nextLightColor = 0;
  const alternateColors = (index) => {
    if (index === nextLightColor && alternate) {
      alternate = false;
      nextLightColor = index + 3;
      return 'light-background grid-item-navlink';
    }
    if (index === nextLightColor && alternate === false) {
      alternate = true;
      nextLightColor = index + 1;
      return 'light-background grid-item-navlink';
    }

    return 'grid-item-navlink';
  };
  return (
    <main>
      <section className="top-section">
        <Row>
          <Col>
            <img className="w-100 opacity-25 ms-4" src={europe} alt="Europe map" />
          </Col>
          <Col>
            <div className=" top-section-content d-flex flex-column justify-content-center align-items-start">
              <h1>Europe</h1>
              <span>6,958</span>
            </div>
          </Col>
        </Row>
      </section>
      <span className="stats">STATS BY COUNTRY</span>
      <section>
        <div className="country-grid">
          {countries.map((country, index) => (
            <NavLink to="/detail" key={country.id} className={alternateColors(index)}>
              <div>
                <div className="d-flex justify-content-end me-2 mt-2">
                  <BsArrowRightCircle />
                </div>
                <div className="d-flex flex-column align-items-end justify-content-end text-end my-3 me-2 single-grid-item">
                  <h1>
                    CZECH
                    <br />
                    REPUBLIC
                  </h1>
                  <span>965</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
