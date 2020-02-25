var jugando;

$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function inicio(){
	jugando = true;
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	quica = new Quica();

	run();

	$('#instrucciones').click(function(){
    $('#popup').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    $('.popup-overlay').height($(window).height());
    return false;
  });

  $('#close').click(function(){
  	$('#popup').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
    return false;
  });

  $("#iniciar").click(function(){
		if(jugando==false)
		inicio();
	});

}

function capturaTeclado(event){
	if(event.which==32 || event.which==13)  {
		quica.actualizar('enter');
	}

}

function run(){
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");

	if(jugando){
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		quica.dibujar(contextoBuffer);
		quica.dibujar(contextoBuffer);
		quica.actualizar();

		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);

	} else{
			contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
			contextoBuffer.fillStyle = "#ffffff";
			quica.sprite = 3;
			quica.vida = 0;
			quica.dibujar(contextoBuffer);
			contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
			contexto.drawImage(buffer, 0, 0);

		}
}
