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






const icons = document.querySelectorAll('.list-style i');
const videoWrap = document.querySelectorAll('.video-wrap');

const initialIconsState = Array.from(icons).map(icon => icon.outerHTML);
const parent = icons[0].parentElement;

let isGridViewActive = false; 

function setIconListeners() {
    const updatedIcons = document.querySelectorAll('.list-style i');
    updatedIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            updatedIcons.forEach((i) => i.classList.remove('active'));
            icon.classList.add('active');

            if (icon.classList.contains('ri-layout-grid-fill')) {
                isGridViewActive = true; 
                videoWrap.forEach((vw) => vw.classList.add('grid-view'));
            } else {
                isGridViewActive = false; 
                videoWrap.forEach((vw) => vw.classList.remove('grid-view'));
            }
        });
    });
}

function handleResize() {
    if (window.innerWidth <= 900) {
        icons.forEach((icon) => icon.classList.remove('active'));
        videoWrap.forEach((vw) => vw.classList.remove('grid-view'));
    } else {
        parent.innerHTML = initialIconsState.join('');
        setIconListeners();

        const updatedIcons = document.querySelectorAll('.list-style i');
        updatedIcons.forEach((i) => i.classList.remove('active')); 

        if (isGridViewActive) {
            const gridIcon = document.querySelector('.ri-layout-grid-fill');
            gridIcon.classList.add('active'); 
            videoWrap.forEach((vw) => vw.classList.add('grid-view'));
        } else {
            const menuIcon = document.querySelector('.ri-menu-line');
            menuIcon.classList.add('active');
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize();

setIconListeners();
