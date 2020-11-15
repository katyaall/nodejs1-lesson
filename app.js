//  Код по заданию: "Первое приложение"

/* const http = require("http");
const greeting = require("./greeting");

http.createServer(function(request,response){
     
    response.end("Hello NodeJS!");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
}); */

//  Код по заданию: "Модули"

/* const os = require("os");
const greeting = require("./greeting");
 
// получим имя текущего пользователя
let userName = os.userInfo().username;
 
 
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName)); */

//  Код по заданию: "Определение конструкторов и объектов в модуле"

/* const User = require("./user.js");
 
let eugene = new User("Eugene", 32);
eugene.sayHi();

//  Код по заданию: "Работа с модулями"

var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`); //Hello Alice
 
var greeting2 = require("./greeting.js");
greeting2.name= "Bob"; */
 
/* console.log(`Hello ${greeting2.name}`); //Hello Bob
// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`); //Hello Bob */

//  Код по заданию: "Структура модулей"

const welcome = require("./welcome");
 
welcome.getMorningMessage();
welcome.getEveningMessage();
