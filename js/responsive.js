// Art main img src 변경

function changeImageSrc() {
    var imgs = document.getElementsByClassName('art-main-img'); // HTMLCollection 반환
    for (var i = 0; i < imgs.length; i++) {
        var currentSrc = imgs[i].src; // 현재 src 가져오기

        if (window.innerWidth <= 900) {
            // "-2"가 없는 경우에만 추가
            if (!currentSrc.includes('-2')) {
                imgs[i].src = currentSrc.replace(/(\.\w+)$/, '-2$1'); // 파일 확장자 앞에 "-2" 추가
            }
        } else {
            // "-2"가 있는 경우에만 원래대로 복구
            if (currentSrc.includes('-2')) {
                imgs[i].src = currentSrc.replace(/-2(\.\w+)$/, '$1'); // "-2"를 제거
            }
        }
    }
}

// 페이지 로드 시와 창 크기 변경 시 src 변경
window.addEventListener('load', changeImageSrc);
window.addEventListener('resize', changeImageSrc);
