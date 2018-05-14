//Comenzando do...while
var exit = '0';
do {
  var name = prompt('¡Hola! \n¿Cómo te llamas?');
  if (name === 'null') {
    exit = '1';
  }
  else if (name === '') {
    alert('Debes ingresar tu nombre');
  }
  else {
// Bienvenida
    alert (name + ', ¡Bienvenid@ a la Trivia de Películas Animadas!');
    document.write(name + ', ¡Bienvenid@ a la Trivia de Películas Animadas!');
//Preguntar si quiere jugar
    do {
      var startGame = prompt('¿Quieres jugar? \n Elige una opción: \n 1. Sí \n 2. No');
      if (startGame === '1') {
        alert('¡Empecemos el juego!');
// Preguntas trivia
        var questionA = prompt('1.-¿"Moana" tiene como mascotas a un cerdito y un gallito? \n Elige una opción: \n 1. Sí \n 2. No \n 3. No sé');
        var questionB = prompt('2.-¿Quién tiene poderes de hielo en "Frozen"?').toUpperCase();
        var questionC = prompt('3.-¿Cómo se llama la niña de "Intensamente"? \n Elige una opción: \n 1. Anastasia \n 2. Riley \n 3. Merida');
// Respuestas
        if (questionA === '1') {
          var answerA = 'CORRECTA';
        }
        else {
          answerA = 'INCORRECTA';
        }
        document.write ('<br/> \n 1.- ¿"Moana" tiene como mascotas a un cerdito y un pollito? Respuesta correcta: Sí<br/>' + 'Tu respuesta fue ' + answerA );
        if (questionB === 'ELSA') {
          var answerB = 'CORRECTA';
        }
        else {
          answerB = 'INCORRECTA';
        }
        document.write('<br/> \n 2.- ¿Quién tiene poderes de hielo en "Frozen?" Respuesta correcta: Elsa<br/>' + 'Tu respuesta fue ' + answerB );
        if (questionC === '2') {
          var answerC = 'CORRECTA';
        }
        else {
          answerC = 'INCORRECTA';
        }
        document.write('<br/> \n 3.- ¿Cómo se llama la niña de "Intensamente"? Respuesta correcta: Riley<br/>' + 'Tu respuesta fue ' + answerC );
          exit = '1';
      }
//Si no quiere jugar, sale
      else if (startGame === '2' || startGame === null) {
        document.write('\n Otro día jugamos :(');
        exit = '1';
      }
    } while (exit === '0')
  }
} while (exit === '0')
