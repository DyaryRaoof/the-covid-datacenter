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

const initialState = { states: [] };

const statesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES:
      return { ...state, states: action.payload };
    case SET_CURRENT_STATE_CITIES:
      return {
        ...state,
        currentState: state.states.filter((state) => state.id === action.payload),
      };
    default:
      return state;
  }
};

export default statesReducer;
