const previewImg = function (inputTag, targetTag) {
  if (inputTag.files[0]) {
    // 파일 읽고 미리보기 띄우기 위함
    const reader = new FileReader();

    //파일 읽기 성공했을때마다 실행
    reader.onload = function (e) {
      //큰 화면에 이미지 띄우기
      targetTag.src = e.target.result;
    };

    // file 읽어오기
    reader.readAsDataURL(inputTag.files[0]);
  } else {
    targetTag.src = "";
  }
};

export default previewImg;
