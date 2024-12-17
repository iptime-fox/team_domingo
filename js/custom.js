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

contact.addEventListener('click', function () {
  window.scroll(0, 20000);
});







// 비디오 호버시 재생되는 이벤트

document.querySelectorAll('.video-wrap').forEach((videoWrap) => {
  const iframe = videoWrap.querySelector('iframe');
  const thumbnail = videoWrap.querySelector('.thumbnail');
  const videoSrc = iframe.src;

  // 호버 시작: 데스크톱에서 영상 재생
  videoWrap.addEventListener('mouseenter', () => {
      if (!isMobile()) {
         
          thumbnail.style.opacity = '0';
          thumbnail.style.pointerEvents = 'none';

      
          iframe.src = videoSrc + '&autoplay=1';
          iframe.style.display = 'block';
      }
  });

  // 호버 종료: 데스크톱에서 영상 정지
  videoWrap.addEventListener('mouseleave', () => {
      if (!isMobile()) {
         
          thumbnail.style.opacity = '1';
          thumbnail.style.pointerEvents = 'auto';

         
          iframe.src = videoSrc.split('&autoplay=1')[0];
          iframe.style.display = 'none';
      }
  });

  // 모바일: 클릭 이벤트 처리
  videoWrap.addEventListener('click', () => {
      if (isMobile()) {
          if (iframe.style.display === 'block') {
       
              thumbnail.style.opacity = '1';
              thumbnail.style.pointerEvents = 'auto';
              iframe.src = videoSrc.split('&autoplay=1')[0];
              iframe.style.display = 'none';
          } else {
      
              thumbnail.style.opacity = '0';
              thumbnail.style.pointerEvents = 'none';
              iframe.src = videoSrc + '&autoplay=1';
              iframe.style.display = 'block';
          }
      }
  });
});

// 모바일 환경 감지 함수
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}









// main hero src, title 변경 및 자동 전환 기능


const videoTitles = document.querySelectorAll('#main-section .video-title');
const mainVideo = document.querySelector('.main-video');
const videoText = document.querySelector('.video-text');
let currentIndex = 0;
const switchInterval = 20000;

// 함수: Lottie 애니메이션 초기화
function resetLottieAnimations() {
  const lottiePlayers = document.querySelectorAll('.ring lottie-player');
  lottiePlayers.forEach((player) => {
    player.stop();
    player.play();
  });
}

// 함수: 비디오와 텍스트 변경
function switchVideo(index) {
  document
    .querySelectorAll('.ring')
    .forEach((ring) => ring.classList.remove('active'));

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

// 기존 JavaScript 코드에서 비디오 클릭을 막고 제목만 클릭 가능하게 설정
videoTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    currentIndex = index;
    switchVideo(currentIndex);

    resetAutoSwitch();
  });
});

// 비디오 영역 클릭을 방지하기 위한 이벤트 리스너 추가
mainVideo.addEventListener('click', (event) => {
  event.preventDefault(); // 클릭 시 아무 동작도 일어나지 않도록
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

