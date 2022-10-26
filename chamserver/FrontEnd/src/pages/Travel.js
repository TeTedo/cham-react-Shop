import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiAction } from "redux/middleware/apiAction";

const Travel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiAction.callAirData());
  }, []);
  return <div>Travel</div>;
};

export default Travel;
