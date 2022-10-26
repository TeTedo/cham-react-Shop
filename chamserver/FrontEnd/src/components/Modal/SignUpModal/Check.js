const IDCheck = (e) => {
  const reg1 = new RegExp(/[a-z]/, "gi");
  const reg2 = new RegExp(/\d/, "gi");
  const reg3 = new RegExp(/[ㄱ-힣]/, "gi");
  if (
    (!reg1.test(e.target.value) && !reg2.test(e.target.value)) ||
    reg3.test(e.target.value)
  ) {
    if (e.target.value === "") return;
    alert("영어나 숫자만 이용가능합니다.");
    e.target.value = "";
  }
};
const nameCheck = (e) => {
  const reg1 = new RegExp(/[ㄱ-힣]/, "gi");
  const reg2 = new RegExp(/[a-z]/, "gi");
  if (!reg1.test(e.target.value) && !reg2.test(e.target.value)) {
    if (e.target.value === "") return;
    alert("문자만 입력가능합니다");
    e.target.value = "";
  }
};
const nickNameCheck = (e) => {
  const reg1 = new RegExp(/[ㄱ-힣]/, "gi");
  const reg2 = new RegExp(/[a-z]/, "gi");
  const reg3 = new RegExp(/\d/, "gi");
  if (
    !reg1.test(e.target.value) &&
    !reg2.test(e.target.value) &&
    !reg3.test(e.target.value)
  ) {
    if (e.target.value === "") return;
    alert("문자나 숫자만 입력가능합니다");
    e.target.value = "";
  }
};
const mobileCheck = (e) => {
  const reg = new RegExp(/\d/, "gi");
  if (!reg.test(e.target.value)) {
    if (e.target.value === "") return;
    alert("숫자만 입력가능합니다");
    e.target.value = "";
  }
};

export const Check = { IDCheck, nameCheck, nickNameCheck, mobileCheck };
