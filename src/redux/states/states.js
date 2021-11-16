const GET_STATES = 'the-covid-datacenter/states/GET_STATES';
const SET_CURRENT_STATE_CITIES = 'the-covid-datacenter/states/SET_CURRENT_STATE_CITIES';

export const getStates = (payload) => ({
  type: GET_STATES,
  payload,
});

export const setCurrentStateCities = (payload) => ({
  type: SET_CURRENT_STATE_CITIES,
  payload,
});

const initialState = { states: [], countryWideCases: 0, currentState: { name: '', today_confirmed: 0, sub_regions: [] } };

const statesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES:
      return {
        ...state,
        states: action.payload.regions,
        countryWideCases: action.payload.today_confirmed,
        currentState: action.payload.regions[0],
      };
    case SET_CURRENT_STATE_CITIES:
      return {
        ...state,
        currentState: state.states.filter((state) => state.id === action.payload)[0],
      };
    default:
      return state;
  }
};

export default statesReducer;
