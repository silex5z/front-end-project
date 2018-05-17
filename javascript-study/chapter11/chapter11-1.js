function initMap() {
    // 맵 스타일 객체
    var styleArray = [
        {	
        featureType: 'all',
        stylers    : [
            { saturation: -80 }
        ]
        },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers    : [
            { hue: '#00ffee' },
            { saturation: 50 }
        ]
        },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers    : [
            { visibility: 'off' }
        ]
        }
    ];      

    var my_position = {lat: 37.571717, lng: 126.976479};

    // 맵 객체를 생성하고 id=‘map’에 지도 표시
    var map = new google.maps.Map(document.getElementById('map'), {
        center     : my_position,
        scrollwheel: false,
        zoom       : 17
    });

    var infoWindow = new google.maps.InfoWindow({map: map});
    
        if(navigator.geolocation){
            //지오로케이션을 사용할 수 있는 경우
            navigator.geolocation.getCurrentPosition(function(position){
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('여기가 내 위치입니다.');
                map.setCenter(pos);
            },function(){
                //연결 실패
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            //지오로케이션을 사용할 수 없는 경우
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }	// end initMap();

    //지오로케이션 오류 처리
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
        '오류: 지오로케이션 연결 실패': 
        '오류: 브라우저에서 지오로케이션을 지원하지 않음');
    }