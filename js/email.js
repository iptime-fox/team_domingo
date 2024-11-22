document.addEventListener("DOMContentLoaded", function () {
    // EmailJS 초기화
    emailjs.init("21w3ctWrNVBWpoogm"); // EmailJS Public Key를 입력

    // 폼 제출 이벤트 핸들러
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // 폼 기본 동작 방지

        // 폼 데이터 가져오기
        const formData = {
            company: document.getElementById("company").value,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };

        // EmailJS로 이메일 전송
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(function (response) {
                alert("이메일이 성공적으로 전송되었습니다!");
            })
            .catch(function (error) {
                console.error("이메일 전송 실패:", error);
                alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
            });
    });
});
