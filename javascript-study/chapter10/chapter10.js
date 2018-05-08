var banner = document.getElementById('banner'),
img       = banner.getElementsByTagName('img'),
toggle    = document.getElementById('toggle'),
sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
var cast          = [];

// 풍선 객체 생성 함수 
function set_balloon(num){
    // 풍선의 속성 값을 랜덤으로 생성
    var x     = Math.floor(Math.random() * (500-10) + 10),     // 10에서 500 사이의 값
        y     = Math.floor(Math.random() * (400-120) + 120),
        size  = Math.floor(Math.random() * (200-100) + 100),
        angle = Math.floor(Math.random() * (360-0) + 0),
        speed = Math.random() * (2-0) + 0;

    // 풍선 객체
    cast[num] = {
        x    : x,
        y    : -y,
        size : size,
        angle: angle,
        speed: speed
    };
}

// 풍선 객체 초기화 함수
function ball_init(){
    for(var i = 0; i < img.length; i++){
        set_balloon(i);
        img[i].style.left = '-9999px';
        img[i].style.top  = '-9999px';
    }
}

// 풍선 애니메이션 함수
function animate_balloon(){
    for(var i = 0; i < img.length; i++){
        // 풍선 속성 변경
        img[i].style.left      = cast[i].x + 'px';
        img[i].style.top       = cast[i].y + 'px';
        img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)';

        // 풍선이 화면 안에 있으면
        if(cast[i].y < parseInt(banner_height)){
            cast[i].y     += 1 + cast[i].speed;
            cast[i].angle += cast[i].speed;
        } else {
            set_balloon(i);
        }
    }
}

function bgm_init(){
    var bgm      = new Audio();
        bgm.src  = 'images/bgm.mp3';
        bgm.loop = true;
    document.body.appendChild(bgm);
}

ball_init();
setInterval(function(){
    animate_balloon();
}, 1000/30);
bgm_init();

// 사운드 버튼 이벤트 핸들러
sound_btn.onclick = function(event){
    var attr = sound_btn.getAttribute('class');
    var bgm  = document.getElementsByTagName('audio');

    if(attr == 'active'){
        // 사운드 off
        sound_btn.removeAttribute('class');
        sound_btn.setAttribute('src', 'images/sound_off.png');
        bgm[0].pause();
    } else {
        // 사운드 on
        sound_btn.setAttribute('class', 'active');
        sound_btn.setAttribute('src', 'images/sound_on.png');
        bgm[0].play();
    }
    event.stopPropagation();
}

// 배너 열기/닫기 이벤트 핸들러
toggle.onclick = function(){
    var attr = banner.getAttribute('class');

    if(attr == 'active'){
        //배너 닫기
        banner.removeAttribute('class');
        toggle.innerHTML = '배너 열기';
        return false;
    } else {
        //배너 열기
        banner.setAttribute('class','active');
        toggle.innerHTML = '배너 닫기';
        return false;
    }
}

// 배너 링크 처리
banner.onclick = function(){
    window.open('https://csslick.github.io/', '_blank');
}