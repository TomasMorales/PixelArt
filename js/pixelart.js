var myPixelDraw={
	colorPicked: 0,
    cellColor:'#ecf0f1',
	defaultCells: 30,
	coloring: false,

	init:function(container){
      	this.container = container;
		$("#color-pick").attr("onclick","myPixelDraw.fns.pickColor();")
      	$("#sizeit").attr("onclick","myPixelDraw.fns.reSize();")
      	$(".select").attr("onclick","myPixelDraw.fns.colorPalette();")      	
		

      	this.fns.calcSize(document.getElementById('resize').value);

      	$(".cell").attr("onclick","myPixelDraw.fns.colorIt();")
    },
	
	fns:{
		calcSize:function (cant) {
			if (cant==0) {
				cant=myPixelDraw.defaultCells;
			}
			var cuadrado = cant*cant;

			$("#container").empty();
			
			for (var i = 0; i < cuadrado; i++) {
				var nuevoElemento = $('<div>');
				nuevoElemento.addClass('cell');


				nuevoElemento.css({
					width: 400/cant,
					height: 400/cant,
					draggable: true,
				});

				$('.cell').css({
					"cursor":"progress"
				})

				$('.cell').attr('dragabble','true');

				$("#container").append(nuevoElemento);
			}

			$("#color-pick").css({
				margintop: 500
			});

		},
		reSize:function () {
				var valor = document.getElementById('resize').value;
				if (valor>0 && valor<50) {
					myPixelDraw.fns.calcSize(valor);
				}
				else{
					alert("Ingrese un número entre 0 y 50");
				}
		},
		detectMouseUp:function () {
			document.mouseup();
			coloring= false;
		},
		colorPalette:function () {
			$("#color-pick > div").each(function(){
				var si=$(this).attr("id");

				$("#color-pick #"+si).css({
					backgroundcolor: si
				});

			});
		},
		pickColor:function () {

			var si;


			$("#color-pick > div").click(function(){

				$("#color-pick > div").removeClass("select");

				$(this).attr("class","select");

				si = $(this).attr("id");

				colorPicked=si;

				console.log(colorPicked)
			});			
		},
		colorIt:function () {
			console.log(colorPicked)

			coloring= true;
			$("#container").mousedown(function(ev){
			      if (ev.which == 2) {
			      	console.log("hola")
			      	
			      	
			      }
			      if(ev.which == 3)
			      {
			        console.log("no")
			      }
			      event.preventDefault();
			});

		},
		colorOnDrag:function (cant) {
			console.log('colorOnDrag');
		},
		reset:function (cant) {
			console.log('reset');
		},
		toggleBorders:function (cant) {
			console.log('toggleBorders');
		},
		disableRightClick:function (cant) {
			console.log('disableRightClick');
		},
		grabImage:function (cant) {
			console.log('grabImage');
		}
	}
}

$(function(){
	var elemento = $('#container');
	myPixelDraw.init(elemento);

}).ready();