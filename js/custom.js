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
    window.scroll(0, 9000);
});

