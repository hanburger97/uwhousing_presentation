import './map.html'


let houses = [
  {
    "name": "Abode Student Life (Icon)",
    "logo":"abode.png",
    "address":["330 Philip St."],
    "coord": [[43.4765099,-80.5410853]],
    "info":[
      "Laurier kids pulling fire alarm"
    ],
    "rating": "😁😁"
  },
  {
    "name": "WRCI",
    "logo":"wcri.jpeg",
    "address":["268 Philip St."],
    "coord": [[43.4734871,-80.5365315],[43.4738065,-80.5367976], [43.4744561,-80.5372908]],
    "info":[],
    "rating":"😁"
  },
  {
    "name": "KW4Rent",
    "logo":"kw4rent.jpeg",
    "address":["201 Lester St.","202 Lester St.","203 Lester St."],
    "coord": [[43.47201, -80.53328],[43.47249, -80.53321],[43.4724, -80.53379]],
    "info":[
      "slow maintenance",
      "unfinished",
      "key deposit"
    ],
    "rating":"😡😡😡"
  },
  {
    "name": "Domus",
    "logo":"domus.png",
    "address":["8 Hickory St","23 High St.", "330 Spruce St.", "21 Colombia St. W.", "295 Lester B."],
    "coord": [[43.47828, -80.52622],[43.48177, -80.52849], [43.47998, -80.52685], [3.48108, -80.52795],[43.47597, -80.53652]],
    "info":[
      "slow maintenance",
      "unfinished construction",
      "key deposit"
    ],
    "rating":"😡😡"
  },
  {
    "name": "MyRez",
    "logo":"myrez.jpeg",
    "address":["181 Lester St."],
    "coord": [[43.47109, -80.53242]],
    "info":[
      "slow maintenance",
      "unfinished construction",
      "key deposit"
    ],
    "rating":"😡😡😡"
  },
  {
    "name": "Schembri",
    "logo":"schembri.png",
    "address":["35 Colombia St. W.", "1 Colombia St. W.", "347 Spruce St."],
    "coord": [[43.48059, -80.5293],[43.48147, -80.52654],[43.48081, -80.52767]],
    "info":[
      "construction"
    ],
    "rating":"😡"
  }
]

Template.map.onRendered(function () {

  this.autorun(() => {

    var myIcon = L.icon({
      iconUrl: 'images/marker.png',
      iconSize: [38, 44],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });

    var mymap = L.map('mapid').setView([43.4734871,-80.5365315], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiaGFuYnVyZ2VyOTciLCJhIjoiY2pudzh3Nms0MGZ4bjN3a2I2dnpyY2E1MiJ9.iiAVq-ef7XRR1lc3VFVoVg'
    }).addTo(mymap);

    houses.forEach(function (o) {
      var coords = o['coord']

      var i = 0;
      coords.forEach(function (b) {
        // Formatting the output content, this is disgusting yes, but no time for cleaner way
        var content = "<h6>" + o['name'] + "</h6>"
        content += "<img src='images/" + o['logo'] + "' style='max-height: 30px; width:auto' alt='NO LOGO'> "
        content +=  "<br><strong>Address: </strong>"+ o['address'][i]
        content += "<br><strong>Score:</strong><h6 class='d-md-inline'>" + o['rating'] + "</h6>"

        content += "<br> <strong> Notorious for: </strong><br>"
        o['info'].forEach(function (el) {
          content += "<h5 class='d-md-inline'>💩</h5>" + el +"<br>"
        })

        L.marker(
          b,
          {icon: myIcon, title: o['name']}
        ).addTo(mymap).bindPopup(content)
        i++
      })
    })
    


  });
})

