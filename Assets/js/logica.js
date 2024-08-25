$(document).ready(function () {
    $('.pProfecional #d1').hide();
    $('.pProfecional #d2').hide();
    $('.pProfecional #d3').hide();

    //doble click al texto
    $('.pProfecional #h31').dblclick(function () {
        $('#d1').toggle();
    });

    $('.pProfecional #h33').dblclick(function () {
        $('#d3').toggle();
    });
    //pasar el mouse
    $("#h32").mouseover(function () {
        $("#d2").toggle();
    });

});

$(document).ready(function () {
    // Funcionalidad para el formulario
    $("form").submit(function (event) {
        event.preventDefault();
        var nombre = $("input[type='text']").val();
        var correo = $("input[type='email']").val();
        var mensaje = $("textarea").val();

        //validar que escriban un nombre o una letra
        if (nombre === "") {
            alert("Por favor, ingrese su nombre");
            return;
        }
        
        //exprecion regular correo
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(correo)) {
            alert("Por favor, ingrese un correo electrónico válido");
            return;
        }
        //validar que escriban un mensaje o una letra
        if (mensaje === "") {
            alert("Por favor, ingrese un mensaje");
            return;
        }

        alert("Gracias por contactarnos, " + nombre + ". Su mensaje ha sido enviado con éxito.");
        limpiar();
    });

    function limpiar() {
        $("input[type='text']").val("");
        $("input[type='email']").val("");
        $("textarea").val("");
    }
});