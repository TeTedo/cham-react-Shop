import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "redux/middleware/userAction";
import { ComponentWrap, ComponentSpan, Img } from "../MyPageStyledComponents";
const ManageUserCom = ({ data }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);
  const select = useRef();
  useEffect(() => {
    switch (data.type) {
      case "A":
        select.current.value = "A";
        break;
      case "S":
        select.current.value = "S";
        break;
      case "C":
        select.current.value = "C";
        break;
      default:
        break;
    }
  }, []);
  const changeType = () => {
    dispatch(
      userAction.changeUserType({
        user_id: data.user_id,
        type: select.current.value,
      })
    ).then(() => {
      dispatch(userAction.getAllUserData(userData.user_id));
    });
  };
  return (
    <ComponentWrap>
      <ComponentSpan>
        <Img src={data.profile_img} />
      </ComponentSpan>
      <ComponentSpan>{data.user_id}</ComponentSpan>
      <ComponentSpan>
        <select ref={select}>
          <option value="A">admin</option>
          <option value="S">seller</option>
          <option value="C">client</option>
        </select>
      </ComponentSpan>
      <ComponentSpan>
        <button onClick={changeType}>변경</button>
      </ComponentSpan>
    </ComponentWrap>
  );
};

export default ManageUserCom;
