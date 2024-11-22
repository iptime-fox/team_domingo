// Art main img src 변경

function changeImageSrc() {
    const imgs = document.getElementsByClassName('art-main-img'); // HTMLCollection 반환


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


const artText = document.getElementsByClassName('art-res');
const environmentText = document.getElementsByClassName('environment-res');
const partnersText = document.getElementsByClassName('partners-res');

function addBreak() {
    if (window.innerWidth <= 900) { // 원하는 브레이크포인트 설정
        Array.from(artText).forEach(element => {
            element.innerHTML = `
            뛰어난 감각과 메타포에 대한 이해를 경험으로 녹여내어<br>문화예술 작품의 강점을 극대화시킨 영상을 만듭니다.
            `;
        });

        Array.from(environmentText).forEach(element => {
            element.innerHTML = `
            환경에 대한 관심을 영상을 통하여 보여주며,<br> 
            환경운동에 대한 관심과 참여율을 높히는 것을 목표로 합니다.
            `;
        });

        Array.from(partnersText).forEach(element => {
            element.innerHTML = `
            우리는 문화예술, 환경 보호, 생물다양성 보전, 공공 안전, 교육 분야에서 <br>다양한 기관들과 협력해왔으며, 각 분야의 전문 파트너들과 함께 <br>예술적 깊이를 더하는 프로젝트를 성공적으로 이끌어왔습니다.
            `;
        });

    } else {
        Array.from(artText).forEach(element => {
            element.innerHTML = `
            뛰어난 감각과 메타포에 대한 이해를 경험으로 녹여내어 문화예술 작품의 강점을 극대화시킨 영상을 만듭니다.
            `;
        });

        Array.from(environmentText).forEach(element => {
            element.innerHTML = `
            환경에 대한 관심을 영상을 통하여 보여주며, 환경운동에 대한 관심과 참여율을 높히는 것을 목표로 합니다.
            `;
        });

        Array.from(partnersText).forEach(element => {
            element.innerHTML = `
            우리는 문화예술, 환경 보호, 생물다양성 보전, 공공 안전, 교육 분야에서 다양한 기관들과 협력해왔으며, <br>각 분야의 전문 파트너들과 함께 예술적 깊이를 더하는 프로젝트를 성공적으로 이끌어왔습니다.
            `;
        });

    }
}

window.addEventListener('resize', addBreak);
addBreak(); // 초기 호출

