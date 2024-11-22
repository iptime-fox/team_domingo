// Header css 바뀌는 javascript code


const header = document.querySelector('#header');
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

let isHamburgerOpen = false;

const stickyHeader = () => {
    const scry = window.scrollY;
    const triggerHeight = window.innerHeight;

    if (!isHamburgerOpen) {
        if (scry > triggerHeight) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
};

// 햄버거 버튼 클릭 이벤트
hamburger.addEventListener('click', () => {
    isHamburgerOpen = !isHamburgerOpen; 
    nav.classList.toggle('active'); 
    hamburger.classList.toggle('open'); 

    if (isHamburgerOpen) {
        header.classList.add('active');
    } else {
        stickyHeader();
    }
});


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



// main hero src, title 변경 및 자동 전환 기능

const videoTitles = document.querySelectorAll('#main-section .video-title');
const mainVideo = document.querySelector('.main-video');
const videoText = document.querySelector('.video-text');
let currentIndex = 0; 
const switchInterval = 20000;

// 함수: Lottie 애니메이션 초기화
function resetLottieAnimations() {
    const lottiePlayers = document.querySelectorAll('.ring lottie-player');
    lottiePlayers.forEach(player => {
        player.stop();
        player.play(); 
    });
}

// 함수: 비디오와 텍스트 변경
function switchVideo(index) {

    document.querySelectorAll('.ring').forEach(ring => ring.classList.remove('active'));

    const title = videoTitles[index];
    title.querySelector('.ring').classList.add('active');
    
    const newVideoSrc = title.getAttribute('data-video');
    const newText = title.getAttribute('data-text');

    resetLottieAnimations();

    mainVideo.style.opacity = 0;

    setTimeout(() => {
        mainVideo.src = newVideoSrc;
        videoText.innerHTML = newText;

        mainVideo.style.opacity = 1;
    }, 500); 
}

// 클릭 이벤트: 수동 변경
videoTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        currentIndex = index;
        switchVideo(currentIndex);

        resetAutoSwitch();
    });
});

// 자동 전환 타이머 설정
let autoSwitch = setInterval(() => {
    currentIndex = (currentIndex + 1) % videoTitles.length; 
    switchVideo(currentIndex);
}, switchInterval);

// 타이머 리셋 함수
function resetAutoSwitch() {
    clearInterval(autoSwitch); 
    autoSwitch = setInterval(() => {
        currentIndex = (currentIndex + 1) % videoTitles.length; 
        switchVideo(currentIndex);
    }, switchInterval);
}