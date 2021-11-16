import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import unitedStates from '../images/united-states-map.png';
import fetchStates from '../api';

import './Details.css';

const Detail = () => {
  const dispatch = useDispatch();
  const singleState = useSelector((state) => state.statesReducer.currentState);

  useEffect(() => {
    if (singleState.name === '') {
      dispatch(fetchStates());
    }
  }, []);

  return (
    <main>
      <section data-testid="section" className="top-section">
        <div className="d-flex justify-content-between">
          <div>
            <img className="map opacity-25 ms-4" src={unitedStates} alt="Europe map" />
          </div>
          <div>
            <div className=" top-section-content d-flex flex-column justify-content-center align-items-end me-3">
              <h1 className="text-end">{singleState.name}</h1>
              <span>{singleState.today_confirmed}</span>
            </div>
          </div>
        </div>
      </section>
      <span className="stats">TODAYS CONFIRMED CASES</span>
      <section>
        <div className="town">
          {singleState.sub_regions.map((city, index) => (
            <div className={index % 2 === 0 ? 'light-background d-flex justify-content-between align-items-center ps-3' : 'd-flex justify-content-between align-items-center ps-3'} key={city.id}>
              <h5>{city.name}</h5>
              <div className="d-flex  align-items-center justify-content-center text-end my-3 me-2">
                <span className="me-3">{`${city.today_confirmed} cases`}</span>
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
};

export default Detail;
