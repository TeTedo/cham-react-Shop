import axios from "axios";
import { Cookie } from "../../util/cookie";
const signup = ({
  user_id,
  user_pw,
  name,
  nick_name,
  mobile_number,
  email,
  address,
}) => {
  return async (dispatch, getState) => {
    const data = await axios({
      method: "post",
      url: "http://192.168.0.128:8000/signUp",
      data: {
        user_id,

        user_pw,
        name,
        nick_name,
        mobile_number,
        email,
        address,
      },
    });
  };
};

const login = ({ user_id, user_pw }) => {
  return async (dispatch, getState) => {
    const userData = await axios({
      method: "post",
      url: "http://192.168.0.128:8000/login",
      data: { user_id, user_pw },
    });
    if (userData.data.user_id) {
      dispatch({
        type: "LOGIN",
        payload: { ...userData.data },
      });
    }

    if (userData.data === "아이디") alert("올바른 아이디를 입력해주세요.");
    if (userData.data === "비밀번호") alert("올바른 비밀번호를 입력해주세요.");
  };
};
const loginCheck = () => {
  const { getCookie } = Cookie;
  return async (dispatch, getState) => {
    if (window.localStorage.getItem("login") === "true") {
      const userData = await axios({
        method: "post",
        url: "http://192.168.0.128:8000/loginCheck",
        data: {
          access_token: getCookie("access"),
          refresh_token: getCookie("refresh"),
        },
      });
      // 로그인 검사 성공했을때
      if (userData.data) {
        dispatch({
          type: "LOGIN",
          payload: { ...userData.data, user_id: userData.data.user_id.userId },
        });
      }
      // 로그인 검사 실패시
      // else {
      //   dispatch({ type: "LOGOUT" });
      // }
    } else {
      dispatch({ type: "LOGOUT" });
    }
  };
};
const modifyInfo = (data) => {
  return async (dispatch, getState) => {
    const { formData, config, user_id, user_pw } = data;
    const userData = await axios({
      method: "post",
      url: "http://192.168.0.128:8000/login",
      data: { user_id, user_pw },
    });

    if (userData.data.user_id) {
      const modify = await axios.post(
        "http://192.168.0.128:8000/profile/modify",
        formData,
        config
      );
      if (modify) {
        alert("회원정보 수정 성공");
        dispatch({
          type: "LOGIN",
          payload: { ...modify.data },
        });
      }
    }
    if (userData.data === "비밀번호") alert("올바른 비밀번호를 입력해주세요.");
  };
};
const applySeller = (data) => {
  return async (dispatch, getState) => {
    const { user_id, user_pw } = data;
    const userData = await axios({
      method: "post",
      url: "http://192.168.0.128:8000/login",
      data: { user_id, user_pw },
    });

    if (userData.data.user_id) {
      const apply = await axios.post(
        "http://192.168.0.128:8000/profile/applySeller",
        { user_id }
      );
      if (apply.data) {
        alert("판매자 신청 성공");
      } else {
        alert("이미 신청하였습니다.");
      }
    }
    if (userData.data === "비밀번호") alert("올바른 비밀번호를 입력해주세요.");
  };
};
export const loginAction = {
  signup,
  login,
  loginCheck,
  modifyInfo,
  applySeller,
};
