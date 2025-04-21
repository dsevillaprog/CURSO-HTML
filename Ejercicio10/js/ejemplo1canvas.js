function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    contexto.fillStyle = '#0000ff';
    contexto.fillRect(100, 100, 200, 200);
    contexto.strokeRect(0, 0, 100, 100);
    contexto.beginPath();
    contexto.moveTo(50, 50);
    contexto.lineTo(50, 150);
    contexto.lineTo(150, 150);
    contexto.stroke();
    contexto.fillStyle = '#ff0000';
    // b. Forma cerrada con  relleno
    contexto.beginPath();
    contexto.moveTo(200, 50);
    contexto.lineTo(200, 150);
    contexto.lineTo(300, 150);
    contexto.fill();
    // c. Forma  cerrada sin relleno
    contexto.beginPath();
    contexto.moveTo(50, 200);
    contexto.lineTo(50, 300);
    contexto.lineTo(150, 300);
    contexto.closePath();
    contexto.stroke();
    // a. Arco desde 0 grados hasta 90 grados en sentido de las agujas del reloj
    contexto.beginPath();
    contexto.arc(60, 60, 50, radianes('0'), radianes('90'), false);
    contexto.stroke();
    // b. Arco desde 0 grados hasta 90 grados en sentido contrario de las agujas del reloj
    contexto.beginPath();
    contexto.arc(200, 60, 50, radianes('0'), radianes('90'), true);
    contexto.stroke();
    // c. Arco desde 90 grados hasta 270 grados en sentido de las agujas del reloj
    contexto.beginPath();
    contexto.arc(350, 60, 50, radianes('90'), radianes('270'));
    contexto.stroke();
    contexto.beginPath();
    contexto.moveTo(125, 25);
    contexto.lineTo(75, 25);
    contexto.quadraticCurveTo(25, 25, 25, 75);
    contexto.lineTo(25, 125);
    contexto.stroke();
    // curva cuadratica, esquina poco redondeada 
    contexto.beginPath();
    contexto.moveTo(350, 25);
    contexto.lineTo(300, 25);
    contexto.quadraticCurveTo(265, 35, 250, 75);
    contexto.lineTo(250, 125);
    contexto.stroke();
    // curva bezier, esquinas redondeadas hacia afuera
    contexto.beginPath();
    contexto.moveTo(125, 200);
    contexto.lineTo(75, 200);
    contexto.bezierCurveTo(35, 185, 10, 210, 25, 250);
    contexto.lineTo(25, 300);
    contexto.stroke();
    // dos curvas bezier, en forma de letra ese 
    contexto.beginPath();
    contexto.moveTo(300, 200);
    contexto.bezierCurveTo(260, 200, 200, 220, 260, 250);
    contexto.bezierCurveTo(325, 275, 350, 300, 300, 300);
    contexto.stroke();
}
function radianes(grados) {
    return grados * (Math.PI / 180);
}
