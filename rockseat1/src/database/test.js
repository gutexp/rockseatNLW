const database = require("./db")
const createProffy = require("./createProffy")

database.then( async (db)=>{
    //inserindo dados

    proffyValue = {
        name: "Gustavo Fraga", 
        avatar: "images/2019-11-11 12.06.48.jpg", 
        whatsapp: "83991360425", 
        bio: "Entusiasta das melhores tecnologias de matemática avançada.<br><br>Apaixonado por explorar os anais das integrais triplas. Mais de 200.000 pessoas já passaram por uma das minhas aulas.", 
    }

    classValue = {
        subject:"Matemática", 
        cost: "20", //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [   //lembrando que o class_id virá pelo banco de dados
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]
    //O uso do Await é importante para que nós tenhamos a certeza de que o próximo passo só será executado depois da execução do atual
    await createProffy(db, {proffyValue, classValue, classScheduleValues}) 

    //consultar dados inseridos
    //colocando todos os dados dos proffys em uma constante
    const selectedProffys = await db.all("SELECT * FROM proffys")   // o * significa tudo

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON(classes.proffy_id =  proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    //precisamos fazer a regra de negócio da filtragem de horários para os profs disponíveis durante a pesquisa do aluno

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND  class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)

})