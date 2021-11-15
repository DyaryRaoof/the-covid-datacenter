const GET_STATES = 'the-covid-datacenter/states/GET_STATES';

export const getStates = (payload) => ({
  type: GET_STATES,
  payload,
});

const initialState = { states: [] };

const statesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATES:
      return { ...state, states: action.payload };
    default:
      return state;
  }
};

export default statesReducer;
