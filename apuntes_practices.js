/** Practico de JavaScript
 * 
VARIABLES Y OPERACIONES

  Una variable es un espacio de memoria reservado y sirve para guardar datos que serán usados.

  Declarar una variable es reservar el espacio en memoria con un nombre.
  Mientras que inicializar una variable es dar paso a usar los datos que contiene esa variable.

  Sumar números es calcular un resultado mediante una operación matemática.
  Concatenar strings es unir dos textos.
  El operador que permite sumar y concatenar strings es el: +.

  Esto es un array, es de tipo objeto:
  
  var persona = [
    nombre = prompt("Ingrese su nombre: "),
    apellido = prompt("Ingrese su apellido: "),
    nameUser = prompt("Ingrese su nombre de usuario: "),
    edad = parseInt(prompt("Ingrese su edad: ")),
    email = prompt("Ingrese su email: "),
    mayorDeEdad = prompt("Es mayor de edad? SI o NO"),
    ahorros = parseInt(prompt("Posee ahorros? Cuánto?")),
    deudas = parseInt(prompt("Tiene deudas? Cuánto?")),
  ];

  nombreComp = nombre + " " + apellido;
  dineroReal = ahorros - deudas;

FUNCIONES
  Una función, es una porción de programa encerrado en un valor. De ingresarse ese valor se ejecutará el programa que está dentro de la función.

  Una función sirve para replicar varias veces la ejecución de un código sin tener que escribir la orden de ejecucion varias veces.

  Los parámetros son la lista de variables que ponemos cuando se define una función
    function sum(a, b) {
      return a + b;
    };

  Los argumentos son los valores que se pasan a la función cuando ésta es invocada
    const result = sum(7, 4);

  function usuario(completeName, nickName){
    name = prompt("Nombre: "),
    lastname = prompt("Apellido: "),
    completename = name + "" + lastname,
    nickname = prompt("Nick Name: ")
  };

CONDICIONALES
1. Un condicional es una condición que tiene que ser cumplida o no, para dar paso a la ejecución de un bloque de código.
if, else if, else, switch.

if funciona siempre y cuando la condición sea verdad.
else if funciona en caso de que el if no se cumpla
else funciona en caso de que el 'else if' no se active
switch sirve para validar condiciones con varias opciones

Sí se pueden combinar funciones y condicionales.

2. file: ej2_condicionales_pract_javascript.js

CICLOS
  Un bucle o ciclo, en programación, es una secuencia de instrucciones de código que se ejecuta repetidas veces, hasta que la condición asignada a dicho bucle deja de cumplirse.

  En JavaScript existen: for, while, do while.

  Un ciclo infinito ocurre cuando un ciclo ejecuta una orden repetidamente sin detenerse ya que la condición del ciclo siempre se cumple. 
  Es un problema porque el proceso queda constantemente ejecutandose y consumiendo memoria afectando el funcionamiento del sistema operativo.

  Sí se pueden mezclar ciclos y condicionales.

  i=0;
  while(i < 5)
  {
    i++;
    console.log(i);
  }

  i=10;
  while(i >= 2)
  {
    i--;
    console.log(i);
  }

  function mostrar()
  {
    const respuesta = prompt("Cuánto es 2+2 ?");
    while(respuesta != "cuatro")
    {
      alert("Incorrecto!");
      respuesta = prompt("ingrese el número clave.");
    }
  }
	
function mostrar()
{
	var resp;
	resp = parseInt(prompt("Cuánto es 2+2"));
	while(resp != 4)
	{
		alert("Respuesta incorrecta");
		resp = parseInt(prompt("Cuánto es 2+2"));
	}
  alert("Felicitaciones!");
}

LISTAS

Un vector o array es un conjunto de elementos del mismo tipo (enteros, flotantes, caracteres)
que se agrupan bajo un mismo nombre y se diferencian entre sí por un índice.
La forma genérica de declararlo en un programa es la siguiente:

  v[5]; defino un vector que se llama v de 5 enteros

  vec[10]; defino un vector que se llama vec de 10 flotantes

  v1[5]; defino un vector llamado v1 de 20 caracteres

En JavaScript, un objeto es un entidad independiente con propiedades y tipos.

  var persona = {};  //vacío
  var persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
      alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function() {
      alert('Hola, Soy '+ this.nombre[0] + '. ');
    }
  };

  luego debemos ejecutar :

  persona.nombre
  persona.nombre[0]
  persona.edad
  persona.intereses[1]
  persona.bio()
  persona.saludo()


Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente consta de algunas variables y funciones, que se denominan propiedades y métodos cuando están dentro de objetos).

Un array es una lista ordenada de valores a los que te refieres con un nombre y un índice.
Un array tiene métodos(push, sort, shift, pop, unshift,indexOf).
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. 

Los objetos son la unidad principal de encapsulación en la Programación Orientada a Objetos.
Los objetos no tienen métodos.
JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos. Este capítulo describe cómo usar objetos, propiedades, funciones y métodos; y cómo crear tus propios objectos.

Sí se pueden mezclar arrays y objetos y veceversa.


Función que recibe objeto como parametro e imprime sus elementos

  function Saludar(Persona)
  {
    var Persona={
      nombre:prompt("Ingrese su nombre"),
      apellido:prompt("Ingrese su apellido"),
      edad:parseInt(prompt("Ingrese su edad")),
    };
    alert('Hola ' + Persona.nombre +" "+ Persona.apellido + " tienes "+ Persona.edad + " años de edad");
  }
  //para llamar la funcion
  Saludar


Función que recibe array como parámetro y muestra sus elementos

  var x = ['a', 'b', 'c', 'd']; 
  miFuncion(x);
  
  function miFuncion(params) {
    for (i=0; i<params.length; i++) {
      alert(params[i])
    }
  }

  //para llamar la funcion
  miFuncion(x)
 */
  
 /////////////

 /** 
  Creo un repositorio, copio el link al repo. Ubicado en la carpeta del curso ejecuto: 
  git clone --link--
  Eso trae todos los archivos desde el repo a la terminal.

  code ./ -r --> para reutilizar la ventana abierta de VSC y abrirse en la carpeta del proyecto.

  git commit -m "Mensaje descriptivo del commit"

  Para conectar un boton html con código JS aplicamos onClick sobre el botón llamando a la función
    onclick="calcularPerimetroCuadrado()" 

  Para usar los valores ingresados en el input en la función, usamos getElementoById
  Configuro mi función calcularPerimetroCuadrado() así

    function calcularPerimetroCuadrado()
    {
      const input = document.getElementById("InputCuadrado");   //para saber desde donde viene el valor
      const value = input.value;  //para obtener el valor

      const perimetro = perimetroCuadrado(value);  //para enviar el valor como argumento.
      alert(perimetro); //para mostrar el resultado
    }
  con esto ya alcanzaría para usar los valores ingresados por el usuario.

  NOTA: si los botones están dentro de un form, son detectados como tipo 'submit', cada vez q se presionen recargará la página.
  Para evitar eso debemos darles tipo 'button'.
  
  **

  ENVIAR OBJETO POR CONSOLE

    //envío un objeto por 'console.log'
    console.log({
      precio,
      descuento,
      porcentajePrecioConDesc,
      precioConDesc,
    });

  PARA ESCRIBIR TEXTO en html DESDE JavaScript usamos INNERTEXT

  innerText se comporta como un atributo

  // obtengo el ID del parrafo
  document.getElementById("ResultPrice")
    <p id="ResultPrice">

  // lo almaceno en una variable
  const resultP = document.getElementById("ResultPrice")
  
  // pruebo el llamado a esa variable contenedora del ID
  resultP
    <p id="ResultPrice">

  // aplico INNERTEXT
  resultP.innerText = "El precio con descuento es: $X"

  Para aplicar cupones de descuento:
    
    Crearemos un array con cada uno de nuestros cupones.

    Cambiaremos el input de descuento en HTML por un input de cupones.

    Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario.

    Cambiar el input de descuento por uno de cupones

    
  PROMEDIO, MODA Y MEDIANA

  Media Aritmetica
    
    num1+num2+num3 / cant_de_num;
  
    Usar cuando todos los elementos son iguales.
    No entrega resultados muy exactos cuando hay excepciones en los elementos
    En esos casos usamos 

  La mediana

  Ordenando los elementos de menor a mayor, debemos encontrar el elementos que esté exactamente en el medio.
  
  
    Si el numero de datos que hay en el “arreglo” es impar escogemos el numero de la mitad: Si fueran 15 posiciones escogemos la posición 8

    Si el numero de datos que hay en el “arreglo” es par escogemos el valor de las dos posiciones del centro y las dividimos en dos: Si fuera 16 escogemos la posición 8 y 9 y la dividimos entre 2

    Es un poco mas exacta que la mediana

  La moda

  Moda: Este es el dato que mas se repite en un conjunto de datos si tenemos el siguiente arreglo [10,9,8,10,8,10,8,7,9] y vemos que dos números se repiten la misma cantidad de veces, simplemente se ponen los dos [8,10].
  Este tipo de proceso es muy funcional cuando no solo queremos hablar de tipos de datos numéricos, tambien pueden ser cadenas de texto y demás.


*/