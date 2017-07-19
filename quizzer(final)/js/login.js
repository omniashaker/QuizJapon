/* javascript del login */

$(document).ready(function () {
    'use strict';
    $("#ok").hide();
    $("#cuenta").hide();

    
    $("#formid").validate({
        rules: {
            nombre: { required: true},
            curso: { required: true}
        },
        //añadimos los mensajes de error de cada campo
        messages: {
            nombre: "Debe introducir su nombre.",
            curso: "Debe introducir su curso."

        },
        //el código que procesará el formulario si todo cumple con las normas
        submitHandler: function (form) {
            var dataString = 'nombre=' + $('#nombre').val();
            $.ajax({
                type: "POST",
                url: "logincon.php",
                data: dataString,
                success: function (data) {
                    $('#cuerpo').removeClass('cuerpo');
                    $('#cuerpo').addClass('correcto');
                    $("#ok").html(data);
                    $("#ok").show();
                    $("#cuenta").show();
                    $("#formid").hide();
                    $("#login").hide();
                    tiempo();
                    
                }
            });
        }
    });
    
        $('#enviar').click(function() {
            
            var nom = document.getElementById("nombre").value;
            var cur = document.getElementById("curso").value;
           
            localStorage.setItem("nombre", nom);
            localStorage.setItem("curso", cur);
            
        });
    
        function tiempo(){
              var cuentaatras = setInterval(function(){
                var  contador = parseInt( $('#cuenta').html());
                if (contador !==0){
                    $('#cuenta').html(contador-1);
                }else{
                    clearInterval(cuentaatras);
                    $(location).attr('href','quizzer.html');
                }
              }, 1000);
        }

});