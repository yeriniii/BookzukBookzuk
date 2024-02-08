function Mypage() {
  return (
    <div>
      <h1>OO님 어서오세요!</h1>
      <div>
        <div>
          <img></img>
          <span>이미지등록/수정</span>
        </div>
        <div>
          <span>닉네임 : </span>
          <span>이메일 : </span>
        </div>
      </div>
      <div>
        <span>내가 쓴 글</span>
        <div>
          {/* 내가 쓴 글들을 묶는 div(=목록) */}
          <div>
            <img />
            <span>제목</span>
            <span>내용..</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
