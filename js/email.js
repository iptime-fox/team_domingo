document.addEventListener('DOMContentLoaded', function () {
  // EmailJS 초기화
  emailjs.init('21w3ctWrNVBWpoogm'); // EmailJS Public Key를 입력

  // 폼 제출 이벤트 핸들러
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault(); // 폼 기본 동작 방지

      // 폼 데이터 가져오기
      const formData = {
        company: document.getElementById('company').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
      };

      // EmailJS로 이메일 전송
      emailjs
        .send('service_vkcg0qq', 'template_ersxl49', formData)
        .then(function (response) {
          alert('문의가 성공적으로 접수되었습니다. 감사합니다.');
          location.href = './index.html';
        })
        .catch(function (error) {
          console.error('이메일 전송 실패:', error);
          alert(
            '죄송합니다, 문의 접수가 실패했습니다. 잠시 후 다시 시도해 주세요.'
          );
        });
    });
});
