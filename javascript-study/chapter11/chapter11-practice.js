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

    var pos1 = {lat: 37.579681, lng: 126.980337};
    var pos2 = {lat: 37.578286, lng: 126.979935};

    // 맵 객체를 생성하고 id=‘map’에 지도 표시
    var map = new google.maps.Map(document.getElementById('map'), {
        center     : pos1,
        scrollwheel: false,
        zoom       : 17,
        styles     : styleArray
    });

    // // 마커 객체 생성
    var marker1 = new google.maps.Marker({
        map     : map,
        position: pos1,
        title   : '국립 현대 미술관 서울관'
    });

    var marker2 = new google.maps.Marker({
        map     : map,
        position: pos2,
        title   : '아프리카 미술관'
    });
    
    var infoWindow1 = new google.maps.InfoWindow({map: map});
    var infoWindow2 = new google.maps.InfoWindow({map: map});
    
    infoWindow1.setPosition(pos1);
    infoWindow1.setContent('국립 현대 미술관 서울관');

    infoWindow2.setPosition(pos2);
    infoWindow2.setContent('아프리카 미술관');
}