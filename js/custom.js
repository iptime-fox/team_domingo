// Header css 바뀌는 javascript code

const header = document.querySelector('#header');

const stickyHeader = () => {
    const scry = window.scrollY;
    const triggerHeight = window.innerHeight ; // 예: 화면 높이의 1.5배에 해당하는 px
    if (scry > triggerHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

window.addEventListener('scroll', stickyHeader);


// contact 버튼 누르면 page 맨 아래로 이동
const contact = document.querySelector('.contact');

contact.addEventListener('click', function(){
    window.scroll(0, 20000);
});



// 비디오 호버시 play

const videoWraps = document.querySelectorAll('.video-wrap');

videoWraps.forEach((videoWrap) => {
  const video = videoWrap.querySelector('.hover-video');

  videoWrap.addEventListener('mouseenter', () => {
    video.play();
  });

  videoWrap.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // 비디오를 처음으로 되돌림
    video.load(); // poster 이미지가 다시 보이도록 설정
  });
});


// main hero src, title 변경

const videoTitles = document.querySelectorAll('.video-title');
const mainVideo = document.querySelector('.main-video');
const videoText = document.querySelector('.video-text');

videoTitles.forEach(title => {
    title.addEventListener('click', () => {
        // 모든 .ring의 active 클래스를 제거
        document.querySelectorAll('.ring').forEach(ring => ring.classList.remove('active'));
        // 클릭한 타이틀의 .ring에 active 클래스 추가
        title.querySelector('.ring').classList.add('active');
        
        // data-video 속성에서 새 비디오 src 가져오기
        const newVideoSrc = title.getAttribute('data-video');
        const newText = title.getAttribute('data-text');

        // 페이드 아웃
        mainVideo.style.opacity = 0;

        // 일정 시간 후에 비디오와 텍스트를 변경하고 다시 페이드 인
        setTimeout(() => {
            mainVideo.src = newVideoSrc;
            videoText.innerHTML = newText;
            
            // 페이드 인
            mainVideo.style.opacity = 1;
        }, 500); // CSS의 transition과 같은 시간으로 설정 (0.5초)
    });
});



