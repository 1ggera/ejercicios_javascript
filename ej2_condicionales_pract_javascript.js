const tipoDeSuscripcion = "Basic";

//1
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//2
if(tipoDeSuscripcion == "Free")
{
  console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic")
{
  console.log("Puedes tomar casi todos los curso de PLatzi durante un año");
}
else if(tipoDeSuscripcion == "Expert")
{
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else(tipoDeSuscripcion == "ExpertPlus")
{
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//3
if(tipoDeSuscripcion == "Free")
{
  console.log("Solo puedes tomar los cursos gratis");
}

if(tipoDeSuscripcion == "Basic")
{
  console.log("Puedes tomar casi todos los curso de PLatzi durante un año");
}

if(tipoDeSuscripcion == "Expert")
{
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if(tipoDeSuscripcion == "ExpertPlus")
{
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}