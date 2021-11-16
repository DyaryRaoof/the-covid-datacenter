import axios from 'axios';
import { getStates } from '../redux/states/states';

export const getCurrentDate = () => {
  const t = new Date();
  const date = t.getDate();
  const month = t.getMonth();
  const year = t.getFullYear();

  return `${year}-${month}-${date}`;
};

const BASE_URL = `https://api.covid19tracking.narrativa.com/api/${getCurrentDate()}/country/us`;

const fetchSates = () => async (dispatch) => {
  const result = await axios.get(BASE_URL);
  dispatch(getStates(result.data.dates[getCurrentDate()].countries.US));
};

export default fetchSates;
