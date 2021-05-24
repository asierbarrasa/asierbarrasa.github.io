$("#btnCalcular").click(function () {
    var notaPrimero = parseFloat($("#notaPrimero").val().replace(',',
        '.')) || 0
    var notaSegundo = parseFloat($("#notaSegundo").val().replace(',',
        '.')) || 0
    var mediaBach = (notaPrimero + notaSegundo) / 2




    var notaMate = parseFloat($("#valueMate").val().replace(',',
        '.')) || 0
    var notaLengua = parseFloat($("#valueLengua").val().replace(',',
        '.')) || 0
    var notaIngles = parseFloat($("#valueIngles").val().replace(',',
        '.')) || 0
    var notaEuskera = parseFloat($("#valueEuskera").val().replace(',',
            '.')) ||
        0
    var notaHistoria = parseFloat($("#valueHistoria").val().replace(',',
        '.')) || 0
    var mediaObligatorias = (notaMate + notaLengua + notaIngles +
        notaEuskera +
        notaHistoria) / 5



    var nota1 = parseFloat($("#value1").val().replace(',', '.')) || 0
    var nota2 = parseFloat($("#value2").val().replace(',', '.')) || 0
    var nota3 = parseFloat($("#value3").val().replace(',', '.')) || 0

    var ponderacion1 = parseFloat($("#select1").val().replace(',',
        '.')) ||
        0
    var ponderacion2 = parseFloat($("#select2").val().replace(',',
        '.')) ||
        0
    var ponderacion3 = parseFloat($("#select3").val().replace(',',
        '.')) ||
        0



    var mediaEspecificas = (nota1 * ponderacion1) + (nota2 *
            ponderacion2) +
        (
            nota3 *
            ponderacion3)
    $("#mediaBach").text(mediaBach + "/10")
    $("#mediaBachPonderada").text((mediaBach * 0.6) + "/6")
    $("#mediaObligatorias").text(mediaObligatorias + "/10")
    $("#mediaObligatoriasPonderada").text((mediaObligatorias * 0.4) +
        "/4")

    $("#mediaEspecificas").text(mediaEspecificas)

    $("#mediaTotal").text((mediaObligatorias * 0.4) + (mediaBach *
        0.6) +
        mediaEspecificas)

    M.toast({
        html: 'La media es:'
    })

})


$('body').keypress(function (e) {
    if (e.which == '13') {
        $("#btnCalcular").click()
    }
});