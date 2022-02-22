//código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado+ " cm");

function perimetroCuadrado(lado){
  return lado * 4;
}
//console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+ " cm");

function areaCuadrado(lado){
  return lado * lado;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: "+ areaCuadrado + " cm²");
console.groupEnd();

//código del triangulos
console.group("Triángulos")

// const ladoTri1 = 6;
// const ladoTri2 = 6;
// const baseTri = 4;

// console.log(
//   "Los lados del triangulo miden: "
//   + ladoTri1
//   + " cm, "
//   +ladoTri2
//   + " cm y "
//   +baseTri
//   + " cm."
// );

// const alturaTri = 5.5;
// console.log("La altura del triángulo mide: "+ alturaTri+ " cm");

function perimeTriangulo(lado1, lado2, base){
  return (lado1 + lado2 + base);
}
//console.log("El perimetro del triangulo es: "+ perimeTri+ " cm");

function areaTriangulo(base, alturaTri){
  return (base * alturaTri) / 2;
}
//console.log("El área del triángulo es: "+ areaTri + " cm²");


function alturaIsosceles(ladoA, ladoB, base)
{
  if(ladoA === ladoB && ladoA != base && ladoB != base)
  {
    return Math.sqrt( ((ladoA**2)-((base**2)/4)) );
  }
  else
  {
    alert("Los lados deben medir lo mismo. La base debe ser distinta a los lados");
  }
}

console.groupEnd();

console.group("Círculos");
//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es de: "+ radioCirculo+ " cm");

//diametro
function diametroCirculo(radio){
  return radio * 2;
}
//console.log("El diametro del circulo es: "+ diametroCirculo+ " cm");

//PI
//const PI = 3.1415;
function PI(){
  return Math.PI;
}
//console.log("PI es: "+ PI);

//Circunferencia
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio); // FUNCION dentro de FUNCION
  return diametro * PI();
}
//console.log("El perimetro del circulo es: "+ perimetroCirculo+ " cm");

//Área
function areaCirculo(radio){
  return (radio * radio) * PI();
}
//console.log("El área del circulo es: "+ areaCirculo+ " cm²");
console.groupEnd();

/* Interacción con HTML */

//cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");   //obtiene el valor con JS desde HTML
  const value = input.value;  //indico q lo que quiero obtener es el valor

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado"); //para saber desde donde viene el valor
  const value = input.value;  //para obtener el valor

  const area = areaCuadrado(value);
  alert(area);
}

//triángulo
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("Lado1");   //obtiene el valor con JS desde HTML
  const input2 = document.getElementById("Lado2");
  const input3 = document.getElementById("Base");
  const value1 = parseInt(input1.value);  //indico q lo que quiero obtener es el valor
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  const perimetro = perimeTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const input1 = document.getElementById("BaseArea");   //para saber desde donde viene el valor
  const input2 = document.getElementById("Altura");
  const value1 = input1.value; //para obtener el valor
  const value2 = input2.value;

  const area = areaTriangulo(value1, value2);
  alert(area);
}

function calcularAlturaIsosceles(){
  const input1 = document.getElementById("LadoA");   //obtiene el valor con JS desde HTML
  const input2 = document.getElementById("LadoB");
  const input3 = document.getElementById("BaseIso");

  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);

  const altura = alturaIsosceles(value1, value2, value3);
  alert(altura);
}

//circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("InputCirculo");   //obtiene el valor con JS desde HTML
  const value = input.value;  //indico q lo que quiero obtener es el valor

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo(){
  const input = document.getElementById("InputCirculo");   //para saber desde donde viene el valor
  const value = input.value;  //para obtener el valor

  const area = areaCirculo(value);
  alert(area);
}