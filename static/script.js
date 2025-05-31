// 예시 학생 데이터
const studentData = {
  "20230123_홍길동": {
    id: "20230123@school.edu",
    pw: "hong1234"
  },
  "20230124_김철수": {
    id: "20230124@school.edu",
    pw: "chulsoo5678"
  },
  "20230125_이영희": {
    id: "20230125@school.edu",
    pw: "lee0912"
  }
    "20230126_민정원": {
    id: "20230126@school.edu",
    pw: "jungwon123"
  }
}
document.getElementById("searchBtn").addEventListener("click", function () {
  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();
  const resultBox = document.getElementById("result");

  // 입력값 유효성 검사
  if (studentId === "" || studentName === "") {
    resultBox.innerHTML = `<p style="color: red;">학번과 이름을 모두 입력해주세요.</p>`;
    return;
  }

  // 키 생성 및 검색
  const key = `${studentId}_${studentName}`;
  const student = studentData[key];

  if (student) {
    resultBox.innerHTML = `
      <p><strong>아이디:</strong> ${student.id}</p>
      <p><strong>비밀번호:</strong> ${student.pw}</p>
    `;
  } else {
    resultBox.innerHTML = `<p style="color: red;">일치하는 계정을 찾을 수 없습니다.</p>`;
  }
});
