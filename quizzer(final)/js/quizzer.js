
// 1
var questions = [
	[
		"¿Cual es la bandera de Japón?",
		"<img src='imagenes/us.png' class='imag '>",
		"<img src='imagenes/brasil.png'  class='imag'>",
		"<img src='imagenes/china.jpg'  class='imag'>",
		"<img src='imagenes/japon.jpg'  class='imag'>",
		3 // con este array y la posición tres digo cual es mi respuesta correcta
	],
	[
		"Entre las imagenes, selecciona el vestido tradicional japones",
		"<img src='imagenes/aleman.jpg' class='imag'>",
		"<img src='imagenes/flamenca.jpg' class='imag'>",
		"<img src='imagenes/kimono.jpg' class='imag'>",
		"<img src='imagenes/holandes.jpg' class='imag'>",
		2
	],
	[
		"¿Que comida es típica en Japón?",
		"Sushi",
		"Fajitas",
		"Pizza",
		"Ninguno de los anteriores",
		0
	],
	[
		"¿Cual de estos dibujos animados es japones?",
		"<img src='imagenes/mickey.png' class='imag'>",
		"<img src='imagenes/bugs.png' class='imag'>",
		"<img src='imagenes/shinchan.gif' class='imag'>",
		"<img src='imagenes/scooby.png' class='imag'>",
		2
	],
	[
		"¿Cómo se lee el manga?",
		"De derecha a izquierda y comenzando por el final",
		"De izquiera a derecha y comenzando por el principio",
		"Indistintamente",
		"Todas son incorrectas",
		1
	],
		[
		"¿Cual de estas organizaciones criminales son originarias de Japón?",
		"Mafia rusa",
		"Triadas",
		"Camorra",
		"Yakuzas",
		3
	],
		[
		"Selecciona el guerrero japones",
		"<img src='imagenes/templario.jpg' class='imag'>",
		"<img src='imagenes/maya.jpg' class='imag'>",
		"<img src='imagenes/espartano.jpg' class='imag'>",
		"<img src='imagenes/ninja.jpg' class='imag'>",
		3
	],
		[
		"¿Cual es la capital de Japón?",
		"Madrid",
		"Hong-kong",
		"Tokyo",
		"Kioto",
		2
	],
		[
		"Monte más famoso del país",
		"Fuji",
		"Alpes",
		"Teide",
		"Mulhacén",
		0
	],
		[
		"Uno de estos monumentos está en Japón, elige el correcto:",
		"<img src='imagenes/malemania.jpg' class='imag'>",
		"<img src='imagenes/mindia.jpg' class='imag'>",
		"<img src='imagenes/mjapon.jpg' class='imag'>",
		"<img src='imagenes/meeuu.jpg' class='imag'>",
		2
	],
		[
		"Como se dice Adiós en Japones?",
		"Sayonara",
		"Aufwiedersehen",
		"Arigato",
		"Konnichiwa",
		0
	],
		[
		"Elige el árbol más representativo del país",
		"<img src='imagenes/cactus.jpg' class='imag'>",
		"<img src='imagenes/cerezo.jpg' class='imag'>",
		"<img src='imagenes/baobab.jpg' class='imag'>",
		"<img src='imagenes/amazonico.jpg' class='imag'>",
		1
	],
		[
		"¿Cual es el ingrediente principal del sushi?",
		"Arroz",
		"Carne",
		"Pescado",
		"Vedura",
		0
	],
		[
		"¿Cual de los siguientes monstruos es originario de Japón?",
		"BigFoot",
		"Godzilla",
		"Monstruo del lago Ness",
		"Yeti",
		3
	],
		[
		"Elige el estilo de lucha japones",
		"<img src='imagenes/esgrima.jpg' class='imag'>",
		"<img src='imagenes/boxeo.jpg' class='imag'>",
		"<img src='imagenes/karate.jpg' class='imag'>",
		"<img src='imagenes/capoeira.jpg' class='imag'>",
		2
	],
];



// 2
// aquí utilizamos undercore, para generar cadenas con las respuestas y poder usar parametros, así las respuestas pueden ser variables.
var questionTemplate = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
      <ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
          <label for='q<%= index %>o1'><%= a %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
          <label for='q<%= index %>o2'><%= b %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
          <label for='q<%= index %>o3'><%= c %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
          <label for='q<%= index %>o4'><%= d %></label> \
        </li> \
      </ul> \
    </div> \
    ");


// 3
//definimos las variables que vamos a utilizar y el tiempo del juego a usar por cada pregunta
var points,
	pointsPerQuestion,
	currentQuestion,
	questionTimer,
	timeForQuestion = 20, // segundos por pregunta
	timeLeftForQuestion,
    id; 

// 4
$(function() {

	// 
	$('button.start').click(start);
	$('.play_again button').click(restart);
    
    /* Aquí le doy efectos a las imagenes*/

	function movimiento(){


    $("img").mouseover(function(){
        $(this).css({
        	height: '200px',
        	width: '200px'
        })
    });

    $("img").mouseleave(function(){
        $(this).css({
        	height: '120px',
        	width: '150px'
        })
    });

}
//la función restart 
//6
	function restart() {
		points = 0;
		pointsPerQuestion = 10;
		currentQuestion = 0;
		timeLeftForQuestion = timeForQuestion;

		$('.finish.card').hide();
		$('div.start').show();
		$('.times_up').hide();
        $('#myBar').addClass('bar');
		generateCards();
		updatePoints();
        movimiento();
        
	}

	//5 la función fadeOut oculta un elemento variando su opacidad, con esto le damos dinamismo al proyecto.
	function start() {
		$('div.start').fadeOut(200, function() {
			moveToNextQuestion();
            
            
		});
	}

	// Aquí generamos las preguntas
	function generateCards() {
		$('.questions').html('');
		for (var i = 0; i < questions.length; i++) {
			var q = questions[i];
			var html = questionTemplate({
				question: q[0],
				index: i,
				a: q[1],
				b: q[2],
				c: q[3],
				d: q[4]
			});
			$('.questions').append(html);
		};
		$('.question.card input').change(optionSelected);
	}

	// 
	function moveToNextQuestion() {
		currentQuestion += 1;
		if (currentQuestion > 1) {
			$('.question.card:nth-child(' + (currentQuestion-1) + ')').hide();
            
		}
		showQuestionCardAtIndex(currentQuestion);
		setupQuestionTimer();
	}

	// 
	function setupQuestionTimer() {
		if (currentQuestion > 1) {
			clearTimeout(questionTimer);
            clearInterval(id);
		}
		timeLeftForQuestion = timeForQuestion;
		questionTimer = setTimeout(countdownTick, 1000);
         move();
        
	}

	// 
	function showQuestionCardAtIndex(index) { // staring at 1
		var $card = $('.question.card:nth-child(' + index + ')').show();
	}

	// 
	function countdownTick() {
		timeLeftForQuestion -= 1;
		if (timeLeftForQuestion == 0) { 
			return finish();
		}
		questionTimer = setTimeout(countdownTick, 1000);
       
	}



	// actualiza los puntos
	function updatePoints() {
		$('.points span.points').html(points + ' puntos');
        var punt = document.getElementById("final_points").value;
        var puntos = localStorage.setItem("puntos",points);
	}

	// 
	function optionSelected() {
		var selected = parseInt(this.value);
		var correct = questions[currentQuestion-1][5];

		if (selected == correct) {
			points += pointsPerQuestion;
			updatePoints();
			correctAnimation();
            
		} else {
			wrongAnimation();
		}

		if (currentQuestion == questions.length) {
			clearTimeout(questionTimer);
            clearInterval(id);
			return finish();
		}
        
		moveToNextQuestion();

	}

	
	function correctAnimation() {
		animatePoints('right');
	}

	// 
	function wrongAnimation() {
		animatePoints('wrong');
	}
    
    function move() {
      var elem = document.getElementById("myBar");   
      var width = 1;
      id= setInterval(frame, 200);
      function frame() {
        if (width >= 100) {
              clearInterval(id);
              $('#myBar').removeClass('bar');
         }else {
              width++; 
              elem.style.width = width + '%';
        }
      }
    }

	// 
	function animatePoints(cls) {
		$('header .points').addClass('animate ' + cls);
		setTimeout(function() {
			$('header .points').removeClass('animate ' + cls);
		}, 500);
	}

	// 
	function finish() {
		if (timeLeftForQuestion == 0) {
			$('.times_up').show();
		}
		$('#final_points').html('¡¡'+points + ' puntos!!');
		$('.question.card:visible').hide();
		$('.finish.card').show();
        $('#myBar').removeClass('bar');
        
        
	}
    
    $('.random').click(function() {
         $.getScript('./js/login.js',function(){
            var nombre = localStorage.getItem("nombre");
            var curso = localStorage.getItem("curso");
            var puntos = localStorage.getItem("puntos");
            var dataString = 'nombre=' + nombre+ '&curso='+curso+ '&puntos='+puntos;
            $.ajax({
                type: "POST",
                url: "datos.php",
                data: dataString,
                success: function() {
	            $(location).attr('href','random.html');
		        }
            });
        });
    });
    
        $('.salir').click(function() {
            $.getScript('./js/login.js',function(){
            var nombre = localStorage.getItem("nombre");
            var curso = localStorage.getItem("curso");
            var puntos = localStorage.getItem("puntos");
            var dataString = 'nombre=' + nombre+ '&curso='+curso+ '&puntos='+puntos;
            $.ajax({
                    type: "POST",
                    url: "datos.php",
                    data: dataString,
                    success: function() {
	                   $(location).attr('href','index.html');
		            }
                });
            });
        });

	// 
	restart();

});