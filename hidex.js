  var suma = function() {
      var valorX = document.getElementById('valor1').value
      var valorY = document.getElementById('valor2').value
      document.getElementById('resultado').innerHTML = "El resultado de la suma es: " + (parseInt(valorX) + parseInt(valorY))
  }
  var resta = function() {
      var valorX = document.getElementById('valor1').value
      var valorY = document.getElementById('valor2').value
      document.getElementById('resultado').innerHTML = "El resultado de la resta es: " + (parseInt(valorX) - parseInt(valorY))
 }
 var multiplicacion = function() {
     var valorX = document.getElementById('valor1').value
     var valorY = document.getElementById('valor2').value
     document.getElementById('resultado').innerHTML = "El resultado de la multiplicacion es: " + (parseInt(valorX) * parseInt(valorY))
 }
 var division = function() {
     var valorX = document.getElementById('valor1').value
     var valorY = document.getElementById('valor2').value
     document.getElementById('resultado').innerHTML = "El resultado de la division es: " + (parseInt(valorX) / parseInt(valorY))
 }