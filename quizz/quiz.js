document.getElementById("quiz").addEventListener("submit", function(event){
    
    event.preventDefault();

    let counter = 0
    
    const correctAnswers = ["Un autobús","A la policía","A comprar ropa","Que lo robaron","Alguien deshonesto","Una broma","Al dinero","Expresión usada para pedir un favor","Sueño","Robar"]

    const allAnswers = document.querySelectorAll("input")

    let userAnswers = []

    console.log(allAnswers)

    for (let i = 0; i < allAnswers.length - 1; i++) {
        if (allAnswers[i].checked){

            userAnswers.push(allAnswers[i].value)
        }
    }

        for (let i = 0; i < userAnswers.length; i++) {
            console.log(userAnswers[i], correctAnswers[i]);
            if(userAnswers[i]==correctAnswers[i]){
                console.log("Correcto")
            } else {
                console.log("Incorrecto")
            }
        }

})