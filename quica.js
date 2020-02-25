function aleatorio(piso,techo){
	return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}
function redVelX(){
	while(this.velocidadX != 0){
		if(this.velocidadX > 0){
			this.velocidadX -= 1;
		}else{
			this.velocidadX += 1;
		}
	}
}
function redVelY(){
	while(this.velocidadY != 0){
		if(this.velocidadY > 0){
			this.velocidadY -= 1;
		}else{
			this.velocidadY += 1;
		}
	}
}
function Quica(){
	var opc = aleatorio(1,100) % 2;
	if(opc==1)
		this.img = $("#pelota_1")[0];
	else
		this.img = $("#pelota_2")[0];

	this.x = 310;
	this.y = 210;
	this.velocidadX = 0;
	this.velocidadY = 0;

	while(this.velocidadX == 0)
		this.velocidadX = aleatorio(-10,10);

	while(this.velocidadY == 0)
		this.velocidadY = aleatorio(-10,10);

	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img, this.x, this.y);
	}

	this.actualizar = function(accion) {
		if (accion == "enter") {
			this.vVerd = true;
		}
		if (this.x >= 2 && this.x <= 572 && this.vVerd){
			this.x += this.velocidadX;
		}
		if (this.y >= 2 && this.y <= 414 && this.vVerd){
			this.y += this.velocidadY;
		}
		if(this.x < 11 || this.x > 561){
			if(this.velocidadX != 0){
				this.velocidadX =this.velocidadX *-1;
			}else{
				this.velocidadX = 2;
				this.velocidadX =this.velocidadX *-1;
			}
		}
		if(this.y < 11 || this.y > 403){
			if(this.velocidadY != 0){
				this.velocidadY =this.velocidadY *-1;
			}else{
				this.velocidadY = 2;
				this.velocidadY =this.velocidadY *-1;
			}
		}
	
	/*setInterval("redVelX()",2000);
	setInterval("resVelY()",2000);*/

	}
}
