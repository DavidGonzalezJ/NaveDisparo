var nave = {
_imagen:'naveAli.png',
_dirActual:null,
_posicion : {x:5,y:0},

mueveIzqu : function() {
this._dirActual='izq';
this._posicion.x-=1;
console.log('Moviendo a la izquierda');
},
mueveDer : function() {
this._dirActual='der';
this._posicion.x+=1;
console.log('Moviendo a la derecha');
},
disparar : function() {
console.log('PAÑUUUM');
}
}

var enemigo = {
_imagen:'naveEnem.png',
_dirActual:'der',
_posicion: {x:5,y:15},
_puntuacion:50,

mueveIzqu : function() {
this._dirActual='izq';
this._posicion.x-=1;
console.log('Moviendo a la izquierda');
},
mueveDer : function() {
this._dirActual='der';
this._posicion.x+=1;
console.log('Moviendo a la derecha');
},
avanza : function() {
this._posicion.y-=1;
if(this._dirActual==='der') 
	this._dirActual='izq';
else
	this._dirActual='der';
console.log('Avanzando');
},
disparar : function() {
console.log('PIUM');
}
}

var disparo = {

//Debería generar un objeto disparo
//desde los metodos de disparo de la
//nave y el enemigo, pero no se :(

_imagen:'disparo.png',

//Tomará la x y la y de la nave que lo lance
_posicion:{x:null,y:null},

avanzar: function(n){
this._posicion.y+=n;
}
}

nave.disparar();
enemigo.disparar();
