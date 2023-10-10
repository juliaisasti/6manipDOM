document.getElementById("quiz").addEventListener("submit", function(event){
    
    event.preventDefault();

    let counter = 0
    
    const correctAnswers = ["Un autobús","A la policía","A comprar ropa","Que lo robaron","Alguien deshonesto","Una broma","Al dinero","Expresión usada para pedir un favor","Sueño","Robar"]

    const allAnswers = document.querySelectorAll("input")

    let userAnswers = [""]

    console.log(allAnswers)

    for (let i = 0; i < allAnswers.length -1; i++) {
        if (allAnswers[i].checked){
            console.log(allAnswers[i].value)
            console.log(userAnswers)
        }
    }
})


// sumar un punto por respuesta correcta!!!!!!!!!


// function checkRadio(.opciones)
// {
//   for(var i=0; i < opciones.length; i++) {
//     if(opciones[i].checked) return opciones[i].value;
//   }
//   return false;
// }

// function checkForm(#quiz    )
// {
//   if(radioValue = checkRadio("#quiz.radiofield)) {
//     console.log("You selected " + radioValue);
//     return true;
//   } else {
//     console.log("Error: No value was selected!");
//     return false;
//   }
// }
// })

