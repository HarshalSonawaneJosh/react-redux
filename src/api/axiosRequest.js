import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        //work for POST
        //if paramtrs comes then take call to the param ..otherwise go downside with blank object
        url: url,
        method: method,
        headers: headers, //id provides extra data also req,n response or provide metadata  .
        data: params,
        timeout: 1000,
      })
    : axios({
        //works for a GET
        url: url,
        method: method,
        headers: headers,
        params: {},
        timeout: 1000,
      });
}

const GetApiDetails = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return AxiosRequest("http://localhost:3001/details", "GET", headers, {});
};
const PostApiDetails = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return AxiosRequest("http://localhost:3001/details", "POST", headers, data);
};

const GetDetailsById = (id) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return AxiosRequest(
    "http://localhost:3001/details/" + id,
    "GET",
    headers,
    {}
  );
};

const UpdateApiDetails = (data, id) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return AxiosRequest(
    "http://localhost:3001/details/" + id,
    "PUT",
    headers,
    data
  );
};

const DeleteApiDetails = (id) => {
  // const headers = {
  //   "Content-Type": "application/json",
  // };

  return AxiosRequest("http://localhost:3001/details/" + id, "DELETE");
};

export {
  GetApiDetails,
  PostApiDetails,
  GetDetailsById,
  UpdateApiDetails,
  DeleteApiDetails,
};
