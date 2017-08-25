/*    map    */

var myMap;
    ymaps.ready(init);
    function init (){

    myMap = new ymaps.Map("map", {
                        center: [55.749, 37.768],
                        zoom: 16,
                        behaviors: ['drag', 'dblClickZoom', 'multiTouch', 'rightMouseButtonMagnifier'],
                        type: 'yandex#map',
                        controls: ['zoomControl', 'rulerControl', 'smallMapDefaultSet']
                    });
                    
    myPlacemark = new ymaps.Placemark([55.748711, 37.769819],
    {balloonContentBody: '<img src="img/map-marker-image.jpg"><br>г. Москва, Зеленый пр-т, д.3/10, стр.15'},
    {
        hideIconOnBalloonOpen: false,
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [35, 45],
        iconImageOffset: [-17, -45]
    });
            
    myMap.geoObjects.add(myPlacemark);
}