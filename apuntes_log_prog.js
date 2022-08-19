/*
  Convenios y buenas prácticas de programación.
  A concatenar caracteres (strings).

minuscula para las etiquetas y funciones
<h1></h1> <br> <script></script>
alert("Hola matrix")

La estructura de mi código será 
  
  <meta charset="UTF-8">

  El HTML puede ir acá 

  <script>
  
  </script>

  o acá 


Operaciones conjuntas entre textos y números.

//
<meta charset="UTF-8">
Estoy escribiendo desde el mundo JavaScript en el mundo HTML
<script>
</script>

//
<meta charset="UTF-8">
Estoy escribiendo desde el mundo JavaScript en el mundo HTML
<script>
</script>
Aquí también estamos en el mundo HTML, porque está fuera de la etiqueta script

Con el document.write podemos pasar al resultado de un cálculo.
El mundo HTML no es capaz de realizar operaciones matemáticas. 

El document.write pertenece al mundo JavaScript y que se puede escribir en el mundo HTML
<meta charset="UTF-8">
<script>
    document.write("<h1>Sea bienvenido</h1>");
</script>

No es posible escribir instrucciones de JavaScript en el mundo HTML:
  <meta charset="UTF-8">
  document.write("Sea bienvenido");
  <script></script>

  Funciones
  Calcular resultados con variables

  <hr/> --> para crear saltos de parrafos  
*/
/*
  JavaScript si necesita sumar puede convertir un string a numero.
  Pero si tiene que sumar entonces concatena el numero con la string.

    En este caso concatenaría los números porq desde el prompt ingresan como strings
    <meta charset="UTF-8">
    <script>
        function saltarLinea() {
            document.write("<br>");
        }
        function imprimir(frase) {
            document.write(frase);
            saltarLinea();
        }

        var invitados = prompt("Número de invitados");
        var vips = prompt("Número de invitados VIP's");
        var total = invitados + vips;
        imprimir("El total de invitados es " + total);
    </script>
*/
/* LOGICA DE PROG 2

Condicionales. Archivo: futbol

  if(numero >= 2 && numero < 12) {
      alert("ENTRÓ!");
  }

    //para q esta condición funcione debería estar escrito && numero < 12
    if(numero >= 2 &&  < 12) { 
        alert("ENTRÓ!");
    }

  if(numero >= 10) {
      alert("ENTRÓ!");
  }

  ¿Cuál de las opciones de abajo fueron verdaderas y se mostró la alerta ENTRÓ!?
  A y C.

Archivo: imc interactuando
Agrego funciones que tienen condiciones anidadas.

Juego adivinación. Variaciones.

Un array permite que una variable tenga varios valores.

  Para mostrar los diferentes personajes de una array

  var heroes = ["Superman", "Thor", "Batman", "Mujer Maravilla"];

  for( var i = 0; i < heroes.length; i++) {
    alert(heroes[i]);
  }

Para agregarelementos en un array uso el método .push como una función
  frutas.push("aguacate");
esto agregar´pa esta fruta el final del array

Resumen del curso
  Futbol: condicionales para verificar como le fue al equipo
  Calcular IMC: condicionales anidadas
  Juego adivinacion: ciclos while para adivinar numeros aleatorios con una cantidad de intentos definida por el usuario.
  Verificador de mundiales de la FIFA. Iteraciones del ciclo WHILE.
  Tabla de multiplicar comparando si es par o no usando WHILE y FOR.
  Calculador de la media de edades. Cantidad de integrantes ingresada por el usuario.
  Estrellas: para anidar iteraciones. Se pueden hacer FOR y FOR o WHILE y WHILE.
  Programa q sortea números aleatorios evitando repetir números.Condicionales e iteraciones.
*/