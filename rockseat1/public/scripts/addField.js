// document.querySelector("#container").style.backgroundColor = "red"

//Procurar o botão e ao clicar nele duplicar os campos de horários

//toda vez que apertarmos o botão "Novo horário" chamaremos a função cloneField que irá colocar outro campo de horário.
document.querySelector("#add-time").addEventListener("click", cloneField)  //querySelector acha os ID's no nosso HTML

function cloneField(){
    
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)  //clone node com true vai retornar a duplicata dos campos em questão

    document.querySelector("#schedule-items").appendChild(newFieldContainer)    //aqui ele está especificando onde desejamos que seja inserido o nosso campo novo, no caso no id

    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEarch(function(field){    //pra cada campo o novo campo será limpo qndo for clonado
        field.value = ""
    })

}