import {
  GET_SERIES_REQUEST,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILUER,
} from "../types";

export const getSeriesRequest = () => ({
  type: GET_SERIES_REQUEST,
});

export const getSeriesSuccess = payload => ({
  type: GET_SERIES_SUCCESS,
  payload,
});

export const getSeriesFailure = error => ({
  type: GET_SERIES_SUCCESS,
  error,
});
