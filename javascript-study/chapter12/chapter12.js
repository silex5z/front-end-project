//API 요청 URL 변수
var url = 'http://api.openweathermap.org/data/2.5/weather?q=seoul,kr&APPID=ff09a15d02d683d98e0fc482ffed1a29';

// 로딩 이미지 표시
$('#weather-info .load-img').show();

$(document).ready(function(){
    $('.btn').on('click', function(){
        getGeolocation();
    })
    initWidget(url);
});

function initWidget(url){
    // console.log(url);
    $.getJSON(url, function(data){
        // 날씨 data 객체
        var sys     = data.sys;
        var city    = data.name;
        var weather = data.weather;
        var main    = data.main;

        var wmain   = weather[0].main;
        var wId     = weather[0].id;
        var icon    = weather[0].icon;
        var country = sys.country;
        var temp    = main.temp;
        var tempMin = main.temp_min;
        var tempMax = main.temp_max;

        // 날씨 아이콘 표시
        var iconUrl = 'http://openweathermap.org/img/w/' + icon;

        // 날씨 정보 표시
        $('#weather-info > .city').html(city + "/" + country);
        $('#weather-info .icon').html("<img src ='" + iconUrl + ".png'>");
        $('#weather-info .w-id').html(wmain);
        $('#weather-info .temp-min').html(parseInt(tempMin-273.15) + '&deg' + ' min');
        $('#weather-info .temp-max').html(parseInt(tempMax-273.15) + '&deg' + ' max');
        $('#weather-info .temp').html(parseInt(temp-273.15) + '&deg');

        // 데이터 로딩 후 로딩 이미지 제거
        $('#weather-info .load-img').hide();

    }).fail(function(){
        alert('loading error');
    })
}

function getGeolocation() {
    if(navigator.geolocation){
        //지오로케이션을 사용할 수 있는 경우
        navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
                url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +
            '&lon=' + lng + '&APPID=ff09a15d02d683d98e0fc482ffed1a29';
            initWidget(url);
        },function(){
            //연결 실패
            handleLocationError(true);
            });
    } else {
        //지오로케이션을 사용할 수 없는 경우
        handleLocationError(false);
    }
}

function handleLocationError(browserHasGeolocation) {
    initWidget(url);
    alert(browserHasGeolocation ?     
    '오류: 지오로케이션 연결 실패': 
    '오류: 브라우저에서 지오로케이션을 지원하지 않음');
}

