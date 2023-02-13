import axios from "axios";
const reportError = (data) => {
  return async (dispatch, getState) => {
    const error = await axios.post(
      "http://ec2-15-165-160-2.ap-northeast-2.compute.amazonaws.com:8000/error",
      {
        ...data,
      }
    );
    if (error.data === true) {
      alert("제출 성공");
    } else {
      alert("제출 실패");
    }
  };
};

export const errAction = { reportError };
