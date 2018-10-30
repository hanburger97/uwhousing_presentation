import './map.html'


let houses = [
  {
    "name": "WCRI",
    "address":"",
    "coord": [[1,-1]],
    "info":[]
  },
  {
    "name": "KW4Rent",
    "address":"",
    "coord": [[1,-1]],
    "info":[]
  }
]

function seedMarkers(){
  
}

Template.map.onRendered(function () {

  this.autorun(() => {
    var mymap = L.map('mapid').setView([43.4753186, -80.5459518], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiaGFuYnVyZ2VyOTciLCJhIjoiY2pudzh3Nms0MGZ4bjN3a2I2dnpyY2E1MiJ9.iiAVq-ef7XRR1lc3VFVoVg'
    }).addTo(mymap);

  });
})

