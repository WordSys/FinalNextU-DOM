var estudiantes = [
    {"codigo":"001","nombre":"Juan Saavedra","nota":7.52},
    {"codigo":"002","nombre":"Mariano Perron","nota":8.32},
    {"codigo":"003","nombre":"Griselda Ordoqui","nota":5.40},
    {"codigo":"004","nombre":"Juliana Massini","nota":6.50},
    {"codigo":"005","nombre":"Pedro Lopez","nota":9.25},
    {"codigo":"006","nombre":"Oscar Robledo","nota":8.25},
    {"codigo":"007","nombre":"Gregorio Cerrano","nota":4.25},
    {"codigo":"008","nombre":"Marcela Grimaldi","nota":2.25},
    {"codigo":"009","nombre":"German Sosa","nota":7.80},
    {"codigo":"010","nombre":"Ignacio Lezacano","nota":9.10}
  ];

(function($){
  $.ShowActions = $.ShowActions || {}
  $.ShowActions.createTable = function(estudiantes)
  {
    $('#tabla').empty();
    $('#tabla').html('<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>');
    for (var i in estudiantes)
    {

      $('#tabla').append(
        '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
      );
    };
    $('#container-table').show();
    $('#mostrar').attr('disabled',true);
  },
  //muestra el promedio de notas
  $.ShowActions.displayAverage = function(estudiantes){
    var c = 0;
    var p = 0;
    var e = 0;
      for(var i in estudiantes){
        c = c + estudiantes[i].nota;
        e = i;
      }
      p = c / e;
    $('#tabla').html(
      '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>'
      + '<tr><td></td><td>'+ "Nota Promedio" +'</td><td>'+ p.toFixed(2) +'</td></tr>'
    );
    $('#mostrar').attr('disabled',false);
  },
  //muestra alumno con mayor nota
  $.ShowActions.displayMax = function(estudiantes){
    var arreglo = [];
    for(var i in estudiantes){
      arreglo[i] = estudiantes[i].nota;
    }
    var max = Math.max.apply(null,arreglo);
    for (var i in estudiantes) {
      if ( max == estudiantes[i].nota ){
        $('#tabla').html(
          '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>'
          + '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
        );
        $('#container-table').show();
        $('#mostrar').attr('disabled',false);
      }
    }
  },
  //muestra alumno con menor nota
  $.ShowActions.displayMin = function(estudiantes){

    var arreglo = [];
    for(var i in estudiantes){
      arreglo[i] = estudiantes[i].nota;
    }
    var min = Math.min.apply(null,arreglo);
    for (var i in estudiantes) {
      if ( min == estudiantes[i].nota ){
        $('#tabla').html(
          '<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>'
          + '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
        );
        $('#container-table').show();
        $('#mostrar').attr('disabled',false);
      }
    }
  }
})(jQuery);

/**
("["+ estudiantes[i].codigo,estudiantes[i].nombre,estudiantes[i].nota +"]");
$('#tabla').html(
  '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
);
*/
