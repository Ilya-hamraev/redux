import {
  GET_SERIES_REQUEST,
  GET_SERIES_SUCCESS,
  GET_SERIES_FAILUER,
} from "./types";

import { getSeriesSuccess, getSeriesFailure } from "./actions";

export const tvmazeFetchMiddleware = store => next => action => {
  if (action.type === GET_SERIES_REQUEST) {
    fetch("http://api.tvmaze.com/shows/180/episodes")
      .then(response => response.json())
      .then(series => {
        store.dispatch(getSeriesSuccess(series));
      })
      .catch(error => {
        store.dipatch(getSeriesFailure(error));
      });
  }
  return next(action);
};
