// servidor
const express =  require('express')
const server = express()

const{pageStudy, pageGiveClasses, pageLanding, saveClasses} = require("./pages")

//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true,
})

//inicio e config do server
server
.use(express.urlencoded({extended: true}))  //receber os dados do req.body
.use(express.static("public"))    //isso fará com q o express busque os nossos estilos na pasta public e entregue na nossa estrutura html
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)   //definição de que porta vamos usar, aconselhável ser 5000 ou 5500