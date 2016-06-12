function initialize() {

  // Exibir mapa;
  var myLatlng = new google.maps.LatLng(-15.7188818,-47.8816529);
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: myLatlng,
    panControl: false,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  }

  // Parâmetros do texto que será exibido no clique;
  var contentString = '<h2>Lago Norte - DF</h2>' +
  '<p style="padding: 0.3em 0;">SHIN CA 02 Lote 40</p>' +
  '<a style="color: #0077cc;" href="https://www.google.com.br/maps/place/Parthenon+Espa%C3%A7o+de+Festas/@-15.718934,-47.8813241,17.63z/data=!4m5!3m4!1s0x935a39099891d7e7:0xe2d486898980e5c9!8m2!3d-15.718888!4d-47.881672?hl=en" target="_blank">Acessar mapa</a>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 700
  });

  // Exibir o mapa na div #mapa;
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Marcador personalizado;
  var image = 'http://www.bettainterativa.com.br/jobs/parthenon/images/ico-pin-map.png';
  var marcadorPersonalizado = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      title: 'Parthenon Festas',
      animation: google.maps.Animation.DROP
  });

  // Exibir texto ao clicar no ícone;
  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
    infowindow.open(map,marcadorPersonalizado);
  });


  // Estilizando o mapa;
  // Criando um array com os estilos
  var styles = [
    {
      stylers: [
        { hue: "#f8d2d2" },
        { saturation: 0 },
        // { saturation: 60 },
        { lightness: 0 },
        // { lightness: -20 },
        { gamma: 2.2 }
        // { gamma: 1.51 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels"
    }
  ];

  // crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
  var styledMap = new google.maps.StyledMapType(styles, {
    name: "Mapa Style"
  });

  // Aplicando as configurações do mapa
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

}

// Função para carregamento assíncrono
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;
