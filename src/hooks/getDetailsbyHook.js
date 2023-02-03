import { GetDetailsById } from "../api/axiosRequest";
import { useEffect, useState } from "react";
export default (props) => {
  const [detailById, setDetailById] = useState({});
  const GetDetailsByHooks = (requestId) => {
    console.log("requestId is----", requestId);

    return GetDetailsById(requestId).then((res) => {
      console.log("response data is-----", res);
      setDetailById(res);
    });
  };
  useEffect(() => {
    GetDetailsByHooks(props);
  }, []);

  return [detailById];
};
