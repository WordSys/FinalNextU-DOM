var estudiantes =
   [
         {"codigo":"001",  "nombre":"Juan Saavedra"    ,"nota":7.52},
         {"codigo":"002",  "nombre":"Mariano Perron"   ,"nota":8.32},
         {"codigo":"003",  "nombre":"Griselda Ordoqui" ,"nota":5.40},
         {"codigo":"004",  "nombre":"Juliana Massini"  ,"nota":6.50},
         {"codigo":"005",  "nombre":"Pedro Lopez"      ,"nota":9.25},
         {"codigo":"006",  "nombre":"Oscar Robledo"    ,"nota":8.25},
         {"codigo":"007",  "nombre":"Gregorio Cerrano" ,"nota":4.25},
         {"codigo":"008",  "nombre":"Marcela Grimaldi" ,"nota":2.25},
         {"codigo":"009",  "nombre":"German Sosa"      ,"nota":7.80},
         {"codigo":"010",  "nombre":"Ignacio Lezacano" ,"nota":9.10}
   ];

function leerJson (json){
  for (var i = 0; i < json.length; i++) {
    alert(json[i].codigo + json[i].nombre + json[i].nota);
  }
}
leerJson(estudiantes);
