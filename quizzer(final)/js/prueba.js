//var fullURL = browser.extension.getURL("http://localhost/quiz/index.php/quizs");
//var uno="http://localhost/quiz/index.php/quizs";
//document.write("FUNCIONA");
//document.write(uno);
//var questions=jQuery.parseJSON(uno);
//document.write(questions);


$(document).ready(function(){
	//$.getJSON("http://localhost/quiz/index.php/quizs", function(data){
	
	$.getJSON("http://localhost/juego/index.php/quizs/", function(data){
			var p_id=$("<td/>");
			$.each(data.id, function(index,id){
				var p=$("<p/>");
				p.text(id);
				td_id.append(p);
			});
			var p_preguntas=$("<td/>");
			$.each(data.pregunta, function(index,preg){
				var p=$("<p/>");
				p.text(preg);
				p_preguntas.append(p);
			});
			var p_a=$("<td/>");
			$.each(data.a, function(index,a){
				var p=$("<p/>");
				p.text(a);
				p_a.append(p);
			});
			var p_b=$("<td/>");
			$.each(data.b, function(index,b){
				var p=$("<p/>");
				p.text(b);
				p_b.append(p);
			});
			var p_c=$("<td/>");
			$.each(data.c, function(index,c){
				var p=$("<p/>");
				p.text(c);
				p_c.append(p);
			});
			var p_d=$("<td/>");
			$.each(data.d, function(index,d){
				var p=$("<p/>");
				p.text(d);
				p_d.append(p);
			});
			var p_correcta=$("<td/>");
			$.each(data.correcta, function(index,correcta){
				var p=$("<p/>");
				p.text(correcta);
				p_correcta.append(p);
			});
			$("#questions").append($("<tr/>")
				.append(td_id)
				.append(p_preguntas)
				.append(p_a)
				.append(p_b)
				.append(p_c)
				.append(p_d)
				.append(p_correcta)
			);

	});

});
