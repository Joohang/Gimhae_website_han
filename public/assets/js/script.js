const contactForm = document.getElementById('contactForm');
const thankYouModal = document.getElementById('thankYouModal');

// 2. 폼 제출 이벤트 리스너
contactForm.addEventListener('submit', function(e) {
    // [중요] 브라우저가 페이지를 새로고침하는 것을 막습니다.
    e.preventDefault();

    // 3. 사용자 입력값 가져오기
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const agree = document.getElementById('agree').checked;
    
    // 라디오 버튼(평형) 값 가져오기
    const area = document.querySelector('input[name="area"]:checked').value;

    // 4. 유효성 검사 (조건문)
    if (name.length < 2) {
        alert("성함을 2글자 이상 입력해 주세요.");
        return; // 여기서 중단
    }

    // 연락처 숫자만 추출 (하이픈 제거)
    const purePhone = phone.replace(/[^0-9]/g, "");
    if (purePhone.length < 10 || purePhone.length > 11) {
        alert("올바른 연락처 번호를 입력해 주세요.");
        return; // 여기서 중단
    }

    if (!agree) {
        alert("개인정보 수집 동의가 필요합니다.");
        return; // 여기서 중단
    }

    // 5. 모든 검사 통과 시 모달 창 띄우기
    console.log("신청 데이터:", { name, phone: purePhone, area }); // 확인용 로그
    thankYouModal.style.display = "block";

    // 6. 폼 내용 비우기
    contactForm.reset();
});

// 7. 모달 닫기 기능 (함수 정의)
function closeModal() {
    thankYouModal.style.display = "none";
}

// 8. 바깥 영역 클릭 시 닫기 기능 추가
window.onclick = function(event) {
    if (event.target == thankYouModal) {
        closeModal();
    }
}