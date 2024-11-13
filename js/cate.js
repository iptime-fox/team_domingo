// cate active 토글 설정

const cateBoxes = document.querySelectorAll('.cate-box');
const videos = document.querySelectorAll('.video-wrap');

cateBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        cateBoxes.forEach((b) => b.classList.remove('active'));
        
        box.classList.add('active');
        
        const category = box.getAttribute('data-category');
        
        videos.forEach((video) => {
            if (category === 'all' || video.getAttribute('data-category') === category) {
                video.classList.remove('hidden');
            } else {
                video.classList.add('hidden');
            }
        });
    });
});




// .list-style 내의 모든 i 요소를 변수로 설정합니다.
const icons = document.querySelectorAll('.list-style i');
const videoWrap = document.querySelectorAll('.video-wrap');

// 각 i 요소에 클릭 이벤트를 추가합니다.
icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // 모든 i 요소에서 'active' 클래스를 제거합니다.
        icons.forEach((i) => i.classList.remove('active'));

        // 클릭한 i 요소에만 'active' 클래스를 추가합니다.
        icon.classList.add('active');

        // ri-layout-grid-fill 아이콘이 활성화된 경우 'grid-view' 클래스를 추가
        if (icon.classList.contains('ri-layout-grid-fill')) {
            videoWrap.forEach((vw) => vw.classList.add('grid-view'));
        } else {
            // 다른 경우 'grid-view' 클래스를 제거하여 원래 스타일로 전환
            videoWrap.forEach((vw) => vw.classList.remove('grid-view'));
        }
    });
});