import './map.html'


let houses = [
  {
    "name": "Abode Student Life (Icon)",
    "logo":"abode.png",
    "address":"330 Philip St.",
    "coord": [[43.4772287,-80.5408601]],
    "info":[],
    "rating": "😁😁"
  },
  {
    "name": "WRCI",
    "logo":"wcri.jpeg",
    "address":"268 Philip St.",
    "coord": [[43.4734871,-80.5365315],[43.4738065,-80.5367976], [43.4744561,-80.5372908]],
    "info":[],
    "rating":"😡"
  },
  {
    "name": "KW4Rent",
    "logo":"kw4rent.jpeg",
    "address":"251 Lester St.",
    "coord": [[43.4734881,-80.5369966],[43.4737512,-80.5351717],[43.4737973,-80.5343809]],
    "info":[
      "slow_maintenance",
      "unfinished",
      "key_deposit"
    ],
    "rating":"😡😡😡"
  }
]

Template.map.onRendered(function () {

  this.autorun(() => {

    var myIcon = L.icon({
      iconUrl: 'images/marker.png',
      iconSize: [38, 44],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });

    var mymap = L.map('mapid').setView([43.4753186, -80.5459518], 15);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiaGFuYnVyZ2VyOTciLCJhIjoiY2pudzh3Nms0MGZ4bjN3a2I2dnpyY2E1MiJ9.iiAVq-ef7XRR1lc3VFVoVg'
    }).addTo(mymap);

    houses.forEach(function (o) {
      var coords = o['coord']
      coords.forEach(function (b) {

        // Formatting the output content, this is disgusting yes, but no time for cleaner way
        var content = "<h5>" + o['name'] + "</h5>"
        content +=  o['address'] + "<br><br>"
        content += "<img src='images/" + o['logo'] + "' style='max-height: 15px; width:auto' alt='NO LOGO'> "
        content += "<br><br><strong>Score:</strong><h6 class='d-md-inline'>" + o['rating'] + "</h6>"


        L.marker(
          b,
          {icon: myIcon, title: o['name']}
        ).addTo(mymap).bindPopup(content).openPopup()
      })
    })
    


  });
})

