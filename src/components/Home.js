import { Row, Col } from 'react-bootstrap';
import './Home.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import unitedStates from '../images/united-states-map.png';
import fetchStates from '../api';
import { setCurrentStateCities } from '../redux/states/states';

const Home = () => {
  const states = useSelector((state) => state.statesReducer.states);
  const countryWideCases = useSelector((state) => state.statesReducer.countryWideCases);

  const dispatch = useDispatch();

  useEffect(() => {
    if (states.length === 0) {
      dispatch(fetchStates());
    }
  }, []);

  const navigate = useNavigate();

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

    return 'grid-item-navlink dark-background';
  };

  return (
    <main>
      <section className="top-section">
        <Row>
          <Col>
            <img className="map opacity-25 ms-4" src={unitedStates} alt="Europe map" />
          </Col>
          <Col>
            <div className=" top-section-content d-flex flex-column justify-content-center align-items-start">
              <h1>United States</h1>
              <span>{countryWideCases}</span>
            </div>
          </Col>
        </Row>
      </section>
      <span className="stats">CONFIRMED COVID CASES</span>
      <section>
        <div className="country-grid">
          {states.map((state, index) => (
            <button
              onClick={() => {
                dispatch(setCurrentStateCities(state.id));
                navigate('/detail');
              }}
              type="button"
              to="/deatil"
              key={state.id}
              className={alternateColors(index)}
            >
              <div>
                <div className="d-flex justify-content-end me-2 mt-2">
                  <BsArrowRightCircle />
                </div>
                <div className="d-flex flex-column align-items-end justify-content-end text-end my-3 me-2 single-grid-item">
                  <h1>{state.name}</h1>
                  <span>{state.today_confirmed}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
