import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
} from "../type";

import {
  GetApiDetails,
  PostApiDetails,
  UpdateApiDetails,
  DeleteApiDetails,
} from "../../api/axiosRequest";

export const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      console.log("response data is-----", res);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

export const PostApiAction = (request) => {
  //reqst used to get data  .
  return function (dispatch) {
    return PostApiDetails(request).then((res) => {
      console.log("response data is-----", res);
      dispatch({
        type: POST_DETAILS,
        payload: "",
      });
    });
  };
};

export const UpdateApiAction = (request, id) => {
  return function (dispatch) {
    return UpdateApiDetails(request, id).then((res) => {
      console.log("response data is-----", res);
      dispatch({
        type: UPDATE_DETAILS,
        payload: request,
      });
    });
  };
};

export const DeleteApiAction = (id) => {
  return function (dispatch) {
    return DeleteApiDetails(id).then((res) => {
      console.log("response data is-----", res);
      dispatch({
        type: DELETE_DETAILS,
        payload: id,
      });
    });
  };
};

/*
import { ACTIONS, GET_DETAILS } from "../type";
import GetApiDetails from "../../api/axiosRequest";

export const fetchDetailsInitiate = () => ({
  type: ACTIONS.GET_DETAILS,
});

export const fetchDetailsSuccess = () => ({
  type: ACTIONS.GET_DETAILS_SUCCESS,
});

export const fetchDetailsFailure = () => ({
  type: ACTIONS.GET_DETAILS_FAILURE,
});
 */
