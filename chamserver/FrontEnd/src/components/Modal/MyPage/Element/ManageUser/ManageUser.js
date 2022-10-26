import React, { useEffect } from "react";
import { WholeWrap, Nav, ComponentSpan } from "../MyPageStyledComponents";
import MyPagePagination from "../MyPagePagination";
import ManageUserCom from "./ManageUserCom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "redux/middleware/userAction";
const ManageUser = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);
  const allUserData = useSelector((state) => state.getAllUserData);
  useEffect(() => {
    dispatch(userAction.getAllUserData(userData?.user_id));
  }, []);
  return (
    <WholeWrap>
      <Nav>
        <ComponentSpan>프로필</ComponentSpan>
        <ComponentSpan>아이디</ComponentSpan>
        <ComponentSpan>타입</ComponentSpan>
        <ComponentSpan></ComponentSpan>
      </Nav>
      <MyPagePagination component={ManageUserCom} data={{ ...allUserData }} />
    </WholeWrap>
  );
};

export default ManageUser;
