import { GET_LIST_CARS } from '../../actions/carsActions';

const initialState = {
  getCarsListResult: false,
  getCarsListLoading: false,
  getCarsListError: false,
};

const cars = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CARS:
      return { ...state, getCarsListResult: action.payload.data, getCarsListLoading: action.payload.loading, getCarsListError: action.payload.errorMessage };
    default:
      return state;
  }
};
export default cars;
