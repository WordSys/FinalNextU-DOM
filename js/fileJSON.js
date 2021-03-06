
(function($){

  var data = {
    estudiantes:[
          {codigo:"001",  nombre:"Juan Saavedra"    ,nota:7.52},
          {codigo:"002",  nombre:"Mariano Perron"   ,nota:8.32},
          {codigo:"003",  nombre:"Griselda Ordoqui" ,nota:5.40},
          {codigo:"004",  nombre:"Juliana Massini"  ,nota:6.50},
          {codigo:"005",  nombre:"Pedro Lopez"      ,nota:9.25},
          {codigo:"006",  nombre:"Oscar Robledo"    ,nota:8.25},
          {codigo:"007",  nombre:"Gregorio Cerrano" ,nota:4.25},
          {codigo:"008",  nombre:"Marcela Grimaldi" ,nota:2.25},
          {codigo:"009",  nombre:"German Sosa"      ,nota:7.80},
          {codigo:"010",  nombre:"Ignacio Lezacano" ,nota:9.10}
        ]
      };

  $.ShowActions = $.ShowActions || {}
  $.ShowActions.init = function(estudiantes)
  {
    var estudiantes = data.estudiantes;

    $('#text-codigo').attr('disabled',true);
    $('#text-nombre').focus();
    $('#cerrar').attr('disabled',true);
    $('#registrar').attr('disabled',true);

    var item = estudiantes.length -1;
    var uCod = estudiantes[item].codigo;

    uCod = parseInt(uCod) + 1;
    uCod = '0' + String(uCod);
    $('#text-codigo').val(uCod);

  },
  $.ShowActions.createTable = function()
  {
    var estudiantes = data.estudiantes;
    $('#tabla').empty();
    $('#tabla').html('<thead><tr><th>Código</th><th>Nombre</th><th>Nota</th></tr></thead>');
    for (var i in estudiantes )
    {

      $('#tabla').append(
        '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
      );
    };
    $('#container-table').show();
    $('#tabla').show();
    $('#mostrar').attr('disabled',true);
    $('#cerrar').attr('disabled',false);


  },
  //muestra el promedio de notas
  $.ShowActions.displayAverage = function()
  {
    var estudiantes = data.estudiantes;
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
    $('#tabla').show();
    $('#mostrar').attr('disabled',false);
    $('#cerrar').attr('disabled',false);
  },
  //muestra alumno con mayor nota
  $.ShowActions.displayMax = function()
  {
    var estudiantes = data.estudiantes;
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
        $('#tabla').show();
        $('#cerrar').attr('disabled',false);
        $('#mostrar').attr('disabled',false);
      }
    }
  },
  //muestra alumno con menor nota
  $.ShowActions.displayMin = function()
  {

    var estudiantes = data.estudiantes;
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
        $('#tabla').show();
        $('#cerrar').attr('disabled',false);
        $('#mostrar').attr('disabled',false);
      }
    }
  },
  $.ShowActions.registrar = function()
  {
    var  estudiantes = data.estudiantes;

    var dato = new Object();
    dato.codigo = $('#text-codigo').val();
    dato.nombre = $('#text-nombre').val();
    var nota = $('#text-nota').val();
    dato.nota   = parseFloat(nota);

    if ($('#text-nombre').val() && $('#text-nota').val() )
    {
      estudiantes.push(dato);

      $('#text-nombre').val('');
      $('#text-nota').val('');
      $('#text-nombre').focus();
      $('#cerrar').attr('disabled',true);
      $('#registrar').attr('disabled',true);

      var item = estudiantes.length -1;
      var uCod = estudiantes[item].codigo;

      uCod = parseInt(uCod) + 1;
      uCod = '0' + String(uCod);
      $('#text-codigo').val(uCod);
    }else{
      alert('Es obligatorio insertar datos.');
      $('#text-nombre').val('');
      $('#text-nota').val('');
      $('#text-nombre').focus();
      $('#cerrar').attr('disabled',true);
      $('#registrar').attr('disabled',true);
    }

  },
  $.ShowActions.habilita = function(container)
  {
    $('#' + container).attr('disabled',false);
    $('#' + container).focus();
  },
  $.ShowActions.valida = function(container)
  {
    if (!$(container).empty()) {
        return true;
    }
  },
  $.ShowActions.cerrar = function()
  {
    $('#tabla').hide();
    $('#text-codigo').focus();
    $('#cerrar').attr('disabled',true);
    $('#mostrar').attr('disabled',false);
  }
  })(jQuery);
$.ShowActions.init();



/**
("["+ estudiantes[i].codigo,estudiantes[i].nombre,estudiantes[i].nota +"]");
$('#tabla').html(
  '<tr><td>'+ estudiantes[i].codigo +'</td><td>'+ estudiantes[i].nombre +'</td><td>'+ estudiantes[i].nota +'</td></tr>'
);
*/
