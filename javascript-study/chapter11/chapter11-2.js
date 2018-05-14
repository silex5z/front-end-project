
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
    
    var pos_initial = {
        lat: 37.571717,
        lng: 126.976479
    }

    var map, infoWindow;

    if(navigator.geolocation){
        //지오로케이션을 사용할 수 있는 경우
        navigator.geolocation.getCurrentPosition(function(position){
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            showLocation(pos);
            
            infoWindow.setPosition(pos);
            infoWindow.setContent('현재 내 위치입니다.');
        }, function(){
            //연결 실패
            
            showLocation(pos_initial);
            handleLocationError(true, infoWindow, pos_initial);
            
            });

            } else {
            //지오로케이션을 사용할 수 없는 경우

            showLocation(pos_initial);                               
            handleLocationError(false, infoWindow, pos_initial);
            
        }
    
    //지오로케이션 오류 처리
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
        '오류: 지오로케이션 연결 실패': 
        '오류: 브라우저에서 지오로케이션을 지원하지 않음');
    }
    
    function showLocation(pos) {
        map = new google.maps.Map(document.getElementById('map'), {
        center     : pos,
        scrollwheel: false,
        zoom       : 17
        });
        
        var marker = new google.maps.Marker({
            map     : map,
            position: pos
        });

        infoWindow = new google.maps.InfoWindow({map: map});
    }
}	// end initMap();
