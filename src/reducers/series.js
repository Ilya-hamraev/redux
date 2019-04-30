import {
  GET_SERIES_REQUEST,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILUER,
} from "../types";

const initialState = {
  series: [],
  loadingState: "idle",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIES_REQUEST:
      return { ...state, loadingState: "loading" };

    case GET_SERIES_SUCCESS:
      return {
        ...state,
        series: action.payload,
        loadingState: "loading_success",
      };

    case GET_SERIES_FAILUER:
      return {
        ...state,
        error: action.payload,
        loadingState: "loading_failure",
      };

    default:
      return state;
  }
};
