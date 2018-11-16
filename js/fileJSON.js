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
  $.ShowActions.init = function(){
    $('#contenedor').show();
    $('#contenedor').append('<p> Hola ---- !!! </p>');


  },
  //muestra todos los objetos json
  $.ShowActions.createTable = function(estudiantes){

    for (var i in estudiantes){
      var file = [];
      file.push("["+ estudiantes[i].codigo,estudiantes[i].nombre,estudiantes[i].nota +"]");
      console.log(file);
      /**
      $('#tabla').append(
        '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
      );
      $(document).ready( function ()
       {
          $('#tabla').DataTable(
            {
              data: file
            }
          );
        } );


      $('#container-table').show();
      */
    };

  },
  //muestra el promedio de notas
  $.ShowActions.displayAverage = function(estudiantes){
    $('#container-table').hide();
  },
  //muestra alumno con mayor nota
  $.ShowActions.displayMax = function(estudiantes){
    $('#contenedor').hide();
  },
  //muestra alumno con menor nota
  $.ShowActions.displayMin = function(estudiantes){
    $('#contenedor').show();
  }
})(jQuery);

$.ShowActions.init();
