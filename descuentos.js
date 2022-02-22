//const precio = parseInt(prompt("Ingrese el precio original: "));

//const descuento = parseInt(prompt("Ingrese el descuento: "));

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDesc = 100 - descuento;
  const precioConDesc = (precio * porcentajePrecioConDesc) / 100;

  return precioConDesc;
}

function clickPrecioConDesc(){
  const inputPrice = document.getElementById("InputPrice"); //obtiene el valor con JS desde HTML
  const precioOrig = parseInt(inputPrice.value);

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;
  //const descuento = inputCoupon.value;

  /* Entra en deshuso porque ahora se aplican cupones
  const inputDiscount = document.getElementById("InputDiscount");
  const descuento = parseInt(inputDiscount.value);
  */
  
  /** OPCION 1
  switch(couponValue)
  {
    case cupones[0]:
      descuento = 15;
      break;

    case cupones[1]:
      descuento = 25;
      break;

    case cupones[2]:
      descuento = 35;
      break;
  }  */

  /** OPCION 2 */
  /**
  if (!cupones.includes(couponValue)) {
    alert("El cupón " + couponValue + " no es válido");
  }
  else if(couponValue === "Lunes")
  {
    descuento = 15;
  }
  else if(couponValue === "Miercoles")
  {
    descuento = 25;
  }else if(couponValue === "Viernes")
  {
    descuento = 35;
  }
  */
  const cupones = [
    {
      name: "Lunes",
      discount: 15,
    },
    {
      name: "Miercoles",
      discount: 25,
    },
    {
      name: "Viernes",
      discount: 35,
    }
  ];

  const isCouponValueValid = function(coupon){
    return coupon.name === couponValue;
  }
  const userCoupon = cupones.find(isCouponValueValid);

  if(!userCoupon)
  {
    alert("El cupón "+ userCoupon +" no es válido");
  }else
  {
    const descuento = userCoupon.discount;
    const precioFinal = calcularPrecioConDescuento(precioOrig, descuento);

    //ESCRITURA DE PARRAFO DESDE JS A HTML
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioFinal;
  }

  //alert(precioFinal);
}


//envío un objeto por 'console.log'
/*
console.log({
  precio,
  descuento,
  porcentajePrecioConDesc,
  precioConDesc,
});
*/